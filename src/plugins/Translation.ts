import { i18n } from './i18n';
import Axios from 'axios';
import type { NavigationGuardNext, Route } from 'vue-router/types/router';

const translation = {
  get defaultLocale(): string {
    return 'ru';
  },

  get supportedLocales(): string[] {
    return ['ru', 'et'];
  },

  get currentLocale(): 'et' | 'ru' {
    return i18n.locale as 'et' | 'ru';
  },

  set currentLocale(locale: string) {
    i18n.locale = locale;
  },

  changeLocale(locale: string): Promise<string | Error> {
    if (!translation.isLocaleSupported(locale)) {
      return Promise.reject(new Error('Locale not supported'));
    }

    if (i18n.locale === locale) {
      return Promise.resolve(locale);
    }

    return translation.loadLocaleFile(locale)
      .then((msgs: any) => {
        i18n.setLocaleMessage(locale, msgs.default || msgs);

        return translation.setI18nLocaleInServices(locale);
      });
  },

  isLocaleSupported(locale: string): boolean {
    return translation.supportedLocales.includes(locale);
  },

  loadLocaleFile(locale: string): any {
    return import(`@/locale/locale-${locale}.json`);
  },

  setI18nLocaleInServices(locale: string): string {
    translation.currentLocale = locale;
    localStorage.setItem('preferredLocale', locale);
    Axios.defaults.headers.common['Accept-Language'] = locale;
    document.querySelector('html')!.setAttribute('lang', locale);

    return locale;
  },

  routeMiddleware(to: Route, from: Route, next: NavigationGuardNext): Promise<void> | void {
    const locale = to.params.locale;

    if (!translation.isLocaleSupported(locale)) {
      return next(translation.getUserSupportedLocale());
    }

    return translation.changeLocale(locale).then(() => next());
  },

  i18nRoute(to: Route): Record<string, any> {
    return {
      ...to,
      params: { locale: this.currentLocale, ...to.params }
    };
  },

  getUserSupportedLocale(): string {
    const userPreferredLocale = translation.getUserLocale();

    if (userPreferredLocale.localeNoISO === 'en') {
      return 'ru';
    }

    if (translation.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (translation.isLocaleSupported(userPreferredLocale.localeNoISO)) {
      return userPreferredLocale.localeNoISO;
    }

    return translation.defaultLocale;
  },

  getUserLocale(): { locale: string; localeNoISO: string } {
    const locale = localStorage.getItem('preferredLocale') || window.navigator.language || translation.defaultLocale;

    return {
      locale,
      localeNoISO: locale.split('-')[0]
    };
  }
};

export { translation };
