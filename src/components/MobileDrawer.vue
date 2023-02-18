<template>
  <v-navigation-drawer
    v-model="syncedDrawer"
    :disable-route-watcher="langChange"
    app
    temporary
    height="100%"
    :width="syncedTiltedScreen ? '40%' : '75%'"
    class="drawer-color"
  >
    <v-list
      nav
      dense
    >
      <div class="mb-3 logo-block-centered">
        <img
          :style="{ height: syncedTiltedScreen ? '14vw' : '28vw' }"
          :src="require('@/assets/svgs/logo.svg')"
          alt="Logo of the website"
        >
      </div>

      <v-divider class="white" />

      <v-list-item-group
        class="mt-5"
      >
        <v-list-item
          v-for="(tab, i) in tabs"
          :key="i"
          active-class="active-tab"
          :to="$i18nRoute({ name: tab.route })"
        >
          <v-list-item-icon>
            <v-icon color="white">
              {{ tab.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text tab-font">
            {{ $t(tab.translationTag) }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template
      v-if="!syncedTiltedScreen"
      #append
    >
      <v-divider class="white mb-3 ml-2 mr-2" />
      <div class="d-flex justify-center">
        <SwitchLanguageBtn
          :drawer="true"
          :lang-change.sync="langChange"
        />
      </div>
      <div class="d-flex justify-center pa-2 pb-3">
        <v-btn
          v-for="(button, i) in socialNetworkButtons"
          :key="i"
          class="mx-2"
          icon
          large
          :raised="false"
          :class="button.colorClass"
          @click="goToLink(button.link)"
        >
          <v-icon
            color="white"
            large
          >
            {{ button.icon }}
          </v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { Component, PropSync } from 'vue-property-decorator';
  import SwitchLanguageBtn from '@/components/SwitchLanguageBtn.vue';
  import Footer from '@/components/Footer.vue';

  @Component({
    components: { SwitchLanguageBtn }
  })
  export default class MobileDrawer extends Footer {
    @PropSync('drawer', { type: Boolean })
    private syncedDrawer!: boolean;
    @PropSync('isTiltedScreen', { type: Boolean })
    private syncedTiltedScreen!: boolean;

    private langChange = false;
    private readonly tabs = [
      { translationTag: 'page.main.name', route: 'root', icon: 'mdi-home-city' },
      { translationTag: 'page.gallery.name', route: 'gallery', icon: 'mdi-image-multiple' },
      { translationTag: 'page.prices.name', route: 'prices', icon: 'mdi-currency-eur' },
      { translationTag: 'page.contacts.name', route: 'contacts', icon: 'mdi-contacts' }
    ];
  }
</script>

<style lang="scss" scoped>
  .drawer-color {
    background-color: $main-color !important;
  }

  .logo-block-centered {
    display: grid;
    place-content: center;
  }

  .active-tab {
    border: 1px solid white;
  }

  .tab-font {
    font-size: 1.3rem !important;
    line-height: 2rem !important;
  }
</style>
