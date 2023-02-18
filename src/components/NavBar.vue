<template>
  <v-app-bar
    app
    :elevation="!syncedIsMobile ? 0 : 4"
    :absolute="!syncedIsMobile && !isMainPage"
    :dense="!syncedIsMobile"
    :prominent="!syncedIsMobile"
    :style="{ height: !syncedIsMobile ? '130px' : '56px' }"
    class="nav-bar-color"
  >
    <SwitchLanguageBtn v-if="!syncedIsMobile" />

    <v-btn
      v-if="syncedIsMobile"
      dark
      icon
      top
      left
      fixed
      class="ma-n3"
      @click.stop="syncedDrawer = !syncedDrawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-spacer />

    <v-row
      v-if="!syncedDrawer"
      class="align-self-center justify-center mb-n1"
    >
      <router-link :to="$i18nRoute({ name: 'root' })">
        <v-img class="logo" />
      </router-link>
    </v-row>

    <v-spacer />

    <template
      v-if="!syncedIsMobile"
      #extension
    >
      <v-tabs
        class="mt-2"
        slider-color="white"
        height="40"
        centered
        :hide-slider="hideSlider"
      >
        <v-tab
          v-for="(tab, i) in tabs"
          :key="'tab-' + i"
          class="white--text"
          :ripple="false"
          :to="$i18nRoute({ name: tab.route })"
          @click="showSlider"
        >
          <v-icon
            v-if="tab.icon !== ''"
            class="mr-2 white--text"
          >
            {{ tab.icon }}
          </v-icon>
          {{ $t(tab.translationTag) }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
  import { Component, PropSync, Vue, Watch } from 'vue-property-decorator';
  import SwitchLanguageBtn from '@/components/SwitchLanguageBtn.vue';

  @Component({
    components: { SwitchLanguageBtn }
  })
  export default class NavBar extends Vue {
    @PropSync('drawer', { type: Boolean })
    private syncedDrawer!: boolean;
    @PropSync('isMobile', { type: Boolean })
    private syncedIsMobile!: boolean;

    private isMainPage = false;

    private hideSlider = true;
    private readonly tabs = [
      { translationTag: 'page.main.name', route: 'root', icon: 'mdi-home-city' },
      { translationTag: 'page.gallery.name', route: 'gallery', icon: 'mdi-image-multiple' },
      { translationTag: 'page.prices.name', route: 'prices', icon: 'mdi-currency-eur' },
      { translationTag: 'page.contacts.name', route: 'contacts', icon: 'mdi-contacts' }
    ];

    @Watch('$route.name', { immediate: true, deep: true })
    private onRouteChange(routeName: string): void {
      this.isMainPage = routeName === 'root';
    }

    private showSlider() {
      this.hideSlider = false;
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar-color {
    background-color: $main-color !important;
  }

  .logo {
    content: url('~@/assets/svgs/logo.svg');
    width: 165px;
    margin-top: 16px !important;

    @media #{map-get($display-breakpoints, "xs-only")}, screen and (max-height: 550px) {
      width: 115px;
      margin-top: 8px !important;
    }
  }
</style>
