<template>
  <v-container
    :class="{ 'blurBackground': fullScreenOverlay }"
    class="pt-0"
    fluid
  >
    <PageHeader :header-text="$t('headers.gallery')" />
    <v-row style="padding: 5vw 7vw !important;">
      <v-col
        v-for="(img, i) in galleryImages"
        :key="'gallery-img-' + i"
        class="d-flex child-flex"
        cols="20"
        lg="3"
        md="4"
        sm="6"
      >
        <v-hover>
          <template #default="{ hover }">
            <v-img
              :src="img"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  />
                </v-row>
              </template>
              <v-fade-transition v-if="$vuetify.breakpoint.mdAndUp">
                <v-overlay
                  v-if="hover"
                  absolute
                >
                  <v-btn
                    class="magnifying-img-btn"
                    style="background-color: transparent !important;"
                    @click="openFullscreenImg(i)"
                  >
                    <v-icon large>
                      mdi-magnify-plus
                    </v-icon>
                  </v-btn>
                </v-overlay>
              </v-fade-transition>
              <v-btn
                v-else
                class="magnifying-img-btn"
                style="background-color: transparent !important;"
                @click="openFullscreenImg(i)"
              />
            </v-img>
          </template>
        </v-hover>
      </v-col>
    </v-row>

    <!-- Open carousel window with full screen image -->
    <v-dialog
      v-model="fullScreenOverlay"
      fullscreen
      :transition="false"
    >
      <v-container
        class="fill-height"
        fluid
        style="background-color: #000000c2;"
      >
        <v-row
          justify="center"
          align="center"
          class="full-screen"
        >
          <v-carousel
            v-model="selectedCarouselItem"
            hide-delimiters
            show-arrows-on-hover
            :show-arrows="$vuetify.breakpoint.mdAndUp"
          >
            <template #prev="{ on, attrs }">
              <v-btn
                fab
                dark
                :ripple="false"
                color="white"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon
                  color="black"
                  size="30"
                >
                  mdi-arrow-left
                </v-icon>
              </v-btn>
            </template>
            <template #next="{ on, attrs }">
              <v-btn
                fab
                dark
                :ripple="false"
                color="white"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon
                  color="black"
                  size="30"
                >
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </template>
            <v-carousel-item
              v-for="(img, i) in galleryImages"
              :key="'carousel-item-' + i"
              :transition="false"
            >
              <v-img
                :src="img"
                class="full-screen"
                contain
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="white"
                    />
                  </v-row>
                </template>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-row>
      </v-container>
      <v-btn
        dark
        fixed
        height="50"
        width="50"
        style="background: white !important;"
        color="black"
        :ripple="false"
        icon
        large
        right
        top
        @click="fullScreenOverlay = false"
      >
        <v-icon large>
          mdi-close
        </v-icon>
      </v-btn>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import PageHeader from '@/components/PageHeader.vue';
  import { translation } from '@/plugins/Translation';

  @Component({
    components: { PageHeader },
    metaInfo() {
      return {
        title: `${this.$t('name')} | ${this.$t('page.gallery.name')}`,
        htmlAttrs: {
          lang: translation.currentLocale
        },
        meta: [{ name: 'description', content: `${this.$t('page.gallery.description')}` }]
      };
    }
  })
  export default class Gallery extends Vue {
    private fullScreenOverlay = false;
    private selectedCarouselItem = 1;
    private galleryImages: any[] = [];

    mounted(): void {
      window.addEventListener('resize', this.appHeight);
      this.appHeight();

      const images = require.context('@/assets/gallery').keys()
        .map(path => require('@/assets/gallery' + path.substr(1)));

      this.galleryImages.push(...images);
    }

    beforeDestroy(): void {
      window.removeEventListener('resize', this.appHeight);
    }

    private appHeight(): void {
      const doc = document.documentElement;

      doc.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
    }

    private openFullscreenImg(selectedItem: number): void {
      this.selectedCarouselItem = selectedItem;
      setTimeout(() => {
        this.fullScreenOverlay = true;
      }, 100);
    }

    @Watch('fullScreenOverlay')
    private onFullScreenChange(newVal: boolean): void {
      const header = document.getElementsByTagName('header').item(0)!;

      if (newVal) {
        header.style.filter = 'blur(10px)';
      } else {
        header.style.filter = 'none';
      }
    }
  }
</script>

<style lang="scss">
  div[class=v-overlay__content], .magnifying-img-btn {
    width: 100% !important;
    height: 100% !important;
  }

  .blurBackground {
    filter: blur(10px);
  }

  .v-image.v-responsive.v-carousel__item, .v-window, .full-screen {
    height: 100vh !important;

    @media #{map-get($display-breakpoints, "xs-only")} {
      height: calc(var(--vh, 1vh) * 100) !important;
    }
  }
</style>
