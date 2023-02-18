<template>
  <v-btn
    dark
    tile
    depressed
    :fixed="!drawer"
    width="90"
    height="40"
    :ripple="false"
    class="switch-language-btn ma-2"
    @click="changeLocale(oppositeLocale)"
  >
    <img
      width="45"
      height="40"
      class="mr-1"
      :src="require(`@/assets/flag-${oppositeLocale}.png`)"
    >
    <span :style="{ textTransform: drawer ? 'none' : '' }">
      {{ localeText }}
    </span>
  </v-btn>
</template>

<script lang="ts">
  import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';
  import { translation } from '@/plugins/Translation';

  @Component
  export default class SwitchLanguageBtn extends Vue {
    @Prop({ type: Boolean, default: false })
    private drawer!: boolean;

    @PropSync('langChange', { type: Boolean, default: false })
    private syncedLangChange!: boolean;

    private changeLocale(locale: string) {
      if (this.$i18n.locale !== locale) {
        this.syncedLangChange = true;

        const to = this.$router.resolve({ params: { locale } });

        return translation.changeLocale(locale).then(() => {
          this.$router.push(to.location).then(() => {
            this.syncedLangChange = false;
          });
        });
      }
    }

    private get currentLocale(): string {
      return translation.currentLocale;
    }

    private get oppositeLocale(): string {
      return this.currentLocale === 'ru' ? 'et' : 'ru';
    }

    private get localeText(): string {
      if (this.drawer) {
        return this.currentLocale === 'ru' ? 'Eesti keeles' : 'На русском';
      }

      return this.oppositeLocale.toUpperCase();
    }
  }
</script>

<style lang="scss" scoped>
  .theme--dark.v-btn:hover::before {
    opacity: 0 !important;
  }

  .switch-language-btn {
    left: 0;
    background-color: $main-color !important;
  }

  span {
    font-size: large;
  }
</style>
