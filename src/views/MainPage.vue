<template>
  <v-container
    :class="$style.hideNavbar"
    fluid
  >
    <!-- Main image -->
    <v-row
      id="full-screen-image"
      style="height: 100vh; background: black"
    >
      <v-img
        class="fill-height"
        :src="mainImgDynamicSize"
        :lazy-src="$vuetify.breakpoint.xsOnly
          ? require('@/assets/mainpage/main-page-img-mobile-shakal.jpg')
          : require('@/assets/mainpage/main-page-img-shakal.jpg')"
      >
        <div :class="$style.mainScreenBanner">
          <img
            src="@/assets/svgs/logo.svg"
            alt="Logo of the website"
          >
          <p>
            {{ $t('mainPage.mainImageHeader') }}
          </p>
        </div>
        <div
          class="scroll-down"
          @click="scrollAwayFromMainScreen"
        />
      </v-img>
    </v-row>

    <!-- We offer block -->
    <v-row
      id="we-offer-header"
      style="height: 150px"
      class="d-flex justify-center align-center mt-5"
    >
      <h2 :class="$style.subHeadingText">
        {{ $t('mainPage.weOffer.header') }} <hr>
      </h2>
    </v-row>
    <v-col class="d-flex flex-column">
      <WeOfferCard
        v-for="(block, i) in weOfferBlockData"
        :key="i"
        :header-translated-key="block.header"
        :text-translated-key="block.text"
        :is-reversed="block.isReversed"
        :image-name="block.imageName"
      />
    </v-col>

    <!-- Choose us block -->
    <v-row
      id="choose-us-header"
      style="height: 150px"
      class="d-flex justify-center align-center"
    >
      <h2 :class="$style.subHeadingText">
        {{ $t('mainPage.chooseUs.header') }} <hr>
      </h2>
    </v-row>
    <v-row
      id="choose-us"
      :class="[$style.chooseUsBlock, $vuetify.breakpoint.mdAndUp ? 'flex-row' : 'flex-column']"
    >
      <v-col
        v-for="(block, i) in chooseUsBlockData"
        id="choose-us-block"
        :key="i"
        class="d-flex flex-column child-flex align-center align-self-center col-md-4 col-lg-4 col-20"
      >
        <v-icon
          v-animation-class="$vuetify.breakpoint.smAndDown ? block.mobileAnimationClass : block.animationClass"
          size="100"
          class="mb-10"
          style="flex: 1 1 0;"
          :color="$style.mainColor"
        >
          {{ block.icon }}
        </v-icon>
        <h3
          v-animation-class="$vuetify.breakpoint.smAndDown ? block.mobileAnimationClass : block.animationClass"
          style="flex: 0;"
          class="text-center"
        >
          {{ $t(block.title) }}
        </h3>
        <p
          v-animation-class="$vuetify.breakpoint.smAndDown ? block.mobileAnimationClass : block.animationClass"
          class="text-center mt-2"
        >
          {{ $t(block.description) }}
        </p>
      </v-col>
    </v-row>

    <!-- Contact us block -->
    <v-row
      :style="{ height: $vuetify.breakpoint.smAndDown ? '550px' : '500px' }"
      class="d-flex justify-center mt-0 header"
    >
      <v-img
        eager
        :class="[$vuetify.breakpoint.smAndDown ? 'text-center' : '', 'fill-height', 'blurred-img']"
        :src="require('@/assets/mainpage/about-us-background.jpg')"
        :gradient="($vuetify.breakpoint.smAndDown ? 'to top': 'to left') + ', transparent -25%, black 100%'"
      >
        <v-col :class="[$style.descriptionText, 'fill-height']">
          <h2 class="white--text pb-5">
            {{ $t('mainPage.contactUs.title') }}
          </h2>
          <p class="white--text text-break">
            {{ $t('mainPage.contactUs.description') }}
          </p>
          <v-btn
            depressed
            :to="$i18nRoute({ name: 'contacts' })"
            :style="{ width: $vuetify.breakpoint.smAndDown ? '100%' : '50%' }"
            class="white--text mt-5"
            :color="$style.mainColor"
          >
            {{ $t('mainPage.contactUs.button') }}
          </v-btn>
        </v-col>
      </v-img>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Mixins } from 'vue-property-decorator';
  import type { DirectiveBinding } from 'vue/types/options';
  import { translation } from '@/plugins/Translation';
  import IsMobile from '@/mixins/IsMobile';
  import WeOfferCard from '@/components/WeOfferCard.vue';

  @Component({
    components: { WeOfferCard },
    directives: {
      'animation-class': (el: Element, binding: DirectiveBinding) =>
        el.setAttribute('animation-class', binding.value)
    },
    metaInfo() {
      return {
        title: `${this.$t('name')} | ${this.$t('page.main.name')}`,
        htmlAttrs: {
          lang: translation.currentLocale
        },
        meta: [{ name: 'description', content: `${this.$t('page.main.description')}` }]
      };
    }
  })
  export default class MainPage extends Mixins(IsMobile) {
    private readonly chooseUsIntersectionObserver =
      new IntersectionObserver(this.chooseUsIntersectionHandler, { threshold: 0.4 });
    private readonly hideNavbarIntersectionObserver =
      new IntersectionObserver(this.hideNavbarIntersectionHandler, { threshold: 0.6 });

    private readonly headerEl = document.getElementsByTagName('header').item(0);

    private chooseUsBlockData = [
      {
        title: 'mainPage.chooseUs.block1.title',
        description: 'mainPage.chooseUs.block1.description',
        icon: 'mdi-star-outline',
        animationClass: 'slideRightFade',
        mobileAnimationClass: 'slideRightFade'
      },
      {
        title: 'mainPage.chooseUs.block2.title',
        description: 'mainPage.chooseUs.block2.description',
        icon: 'mdi-briefcase-outline',
        animationClass: 'slideTopFade',
        mobileAnimationClass: 'slideLeftFade'
      },
      {
        title: 'mainPage.chooseUs.block3.title',
        description: 'mainPage.chooseUs.block3.description',
        icon: 'mdi-hand-heart-outline',
        animationClass: 'slideLeftFade',
        mobileAnimationClass: 'slideRightFade'
      }
    ];

    private weOfferBlockData = [
      {
        text: 'mainPage.weOffer.block1.text',
        header: 'mainPage.weOffer.block1.header',
        imageName: 'we-offer-2.jpg',
        isReversed: false
      },
      {
        text: 'mainPage.weOffer.block2.text',
        header: 'mainPage.weOffer.block2.header',
        imageName: 'we-offer-1.jpg',
        isReversed: true
      }
    ];

    created(): void {
      this.headerEl!.style.transitionProperty = 'none';
      this.hideHeader();
    }

    mounted(): void {
      document.querySelectorAll('#choose-us-block')
        .forEach((el: Element) => this.chooseUsIntersectionObserver.observe(el));
      this.hideNavbarIntersectionObserver.observe(document.getElementById('full-screen-image') as Element);
    }

    private get mainImgDynamicSize(): any {
      if (this.$vuetify.breakpoint.xlOnly) {
        return require('@/assets/mainpage/main-page-img-4k.jpg');
      } else if (this.$vuetify.breakpoint.xsOnly) {
        return require('@/assets/mainpage/main-page-img-mobile.jpg');
      }

      return require('@/assets/mainpage/main-page-img.jpg');
    }

    beforeDestroy(): void {
      this.chooseUsIntersectionObserver.disconnect();
      this.hideNavbarIntersectionObserver.disconnect();
    }

    private hideHeader(): void {
      this.headerEl!.style.transform = 'translateY(-130px)';
    }

    private showHeader(): void {
      this.headerEl!.style.transitionProperty = 'inherit';
      this.headerEl!.style.transform = 'translateY(0)';
    }

    private chooseUsIntersectionHandler(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.4) {
          (entry.target as HTMLElement).childNodes.forEach((child) => {
            const childEl = child as HTMLElement;

            childEl.classList.add(childEl.getAttribute('animation-class') || '');
          });
          observer.unobserve(entry.target);
        }
      });
    }

    private hideNavbarIntersectionHandler(entries: IntersectionObserverEntry[]): void {
      entries[0].intersectionRatio >= 0.6 ? this.hideHeader() : this.showHeader();
    }

    private scrollAwayFromMainScreen(): void {
      const imgHeight = document.getElementById('full-screen-image')!.getBoundingClientRect().height;
      const scrollFor = imgHeight - window.scrollY - (this.isMobile ? 50 : 130);

      window.scrollBy({ top: scrollFor, behavior: 'smooth' });
    }
  }
</script>

<style lang="scss" module>
:export {
  mainColor: $main-color;
  secondaryColor: $secondary-color;
}

.mainScreenBanner {
  display: grid;
  width: fit-content;
  float: right;
  margin: 3%;

  img {
    justify-self: center;
    height: 200px;
  }

  p {
    color: white;
    text-align: center;
    margin-top: 30px;
    font-size: 1.5rem;
    white-space: pre-line;
  }

  @media #{map-get($display-breakpoints, "xs-only")} {
    float: none;
    margin: 15% auto !important;
    img {
      height: 120px;
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-height: 550px) {
    margin: 2% !important;

    img {
      height: 120px !important;
    }
    p {
      margin-top: 15px;
      font-size: 1rem !important;
    }
  }

  @media #{map-get($display-breakpoints, "xl-only")} {
    p {
      font-size: 1.7rem;
    }
  }

  @media #{map-get($display-breakpoints, "md-only")} {
    img {
      height: 170px;
    }
    p {
      font-size: 1.3rem;
    }
  }

  @media #{map-get($display-breakpoints, "sm-only")} {
    img {
      height: 160px;
    }
    p {
      font-size: 1.2rem;
    }
  }
}

.hideNavbar {
  margin-top: -130px;

  @media #{map-get($display-breakpoints, "xs-only")}, screen and (max-height: 550px) {
    margin-top: -56px;
  }
}

.descriptionText {
  width: 100%;
  padding: 60px;

  @media #{map-get($display-breakpoints, "xs-only")} {
    padding: 40px;
  }

  @media #{map-get($display-breakpoints, "lg-only")} {
    width: 50%;
  }

  @media #{map-get($display-breakpoints, "xl-only")} {
    width: 45%;
  }

  @media #{map-get($display-breakpoints, "sm-only")} {
    padding: 65px;
  }

  @media #{map-get($display-breakpoints, "md-only")} {
    width: 60%;
  }

  h2 {
    @media #{map-get($display-breakpoints, "md-and-up")} {
      font-size: xx-large;
    }

    @media #{map-get($display-breakpoints, "xl-only")} {
      font-size: xxx-large;
    }
  }

  p {
    text-align: justify;
    font-size: 1.1rem;

    @media #{map-get($display-breakpoints, "xs-only")} {
      font-size: 1rem;
    }

    @media #{map-get($display-breakpoints, "xl-only")} {
      font-size: 1.3rem;
    }
  }
}

.subHeadingText {
  color: black;
  font-size: clamp(2.2rem, 3vw, 2.5rem);
  font-weight: 400;

  hr {
    width: 75%;
    background: $main-color;
    height: 4px;
    margin: 5px auto;
    border: 0;
  }

  @media #{map-get($display-breakpoints, "xs-only")} {
    font-size: 2rem;
  }
}

.chooseUsBlock {
  padding: 1vw;
  margin: 0 13%;

  @media #{map-get($display-breakpoints, "xs-only")} {
    margin: 0;
  }

  @media #{map-get($display-breakpoints, "md-only")} {
    margin: 0 5%;
  }

  @media #{map-get($display-breakpoints, "xl-only")} {
    margin: 0 18%;
  }

  div {
    * {
      opacity: 0;
      position: relative;
    }

    @media #{map-get($display-breakpoints, "md-and-up")} {
      width: 200px;
      height: 300px;
    }
  }
}
</style>
