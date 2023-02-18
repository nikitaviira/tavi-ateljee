<template>
  <v-app
    id="app"
  >
    <MobileDrawer
      :drawer.sync="drawer"
      :is-tilted-screen.sync="isTiltedScreen"
    />
    <NavBar
      :drawer.sync="drawer"
      :is-mobile.sync="isMobile"
    />
    <v-main>
      <router-view />
      <TelephoneBtn v-if="$vuetify.breakpoint.smAndDown" />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { Component, Mixins } from 'vue-property-decorator';
  import TelephoneBtn from '@/components/TelephoneBtn.vue';
  import Footer from '@/components/Footer.vue';
  import NavBar from '@/components/NavBar.vue';
  import MobileDrawer from '@/components/MobileDrawer.vue';
  import IsMobile from '@/mixins/IsMobile';

  @Component({
    components: {
      TelephoneBtn,
      Footer,
      NavBar,
      MobileDrawer
    }
  })
  export default class App extends Mixins(IsMobile) {
    private drawer = false;
  }
</script>

<style lang="scss">
  #app {
    -moz-osx-font-smoothing: grayscale;
  }

  .content-header {
    justify-content: center;
    align-content: center;
    background: black;
  }

  .v-toolbar__extension {
    padding-bottom: 5px !important;
  }

  .theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
    border-color: transparent !important;
  }
</style>
