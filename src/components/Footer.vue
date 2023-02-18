<template>
  <v-footer
    dark
    padless
  >
    <v-card
      width="100%"
      flat
      tile
      class="white--text text-center footer-color"
    >
      <v-card-text>
        <v-btn
          v-for="(button, i) in socialNetworkButtons"
          :key="i"
          class="mx-4"
          icon
          @click="goToLink(button.link)"
        >
          <v-icon
            size="24px"
          >
            {{ button.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="white--text pt-0"
        style="font-size: 1rem"
      >
        {{ $t('footerAddress') }}<br>+37253755945<br>tavi.ateljee@gmail.com
      </v-card-text>

      <v-divider style="background: white;" />

      <v-card-text
        class="white--text"
        style="font-size: 1rem"
      >
        {{ $t('footerLeaveReview') }} <b
          style="cursor: pointer"
          @click="goToLink('https://www.google.com/maps/place/Ateljee+\'TaVi\'/@59.3790591,28.1653875,17z/data=!4m5!3m4!1s0x4694370e51822eeb:0x257a939572db197e!8m2!3d59.3790591!4d28.1666449')"
        >Google</b>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {
    private get socialNetworkButtons(): Record<string, string>[] {
      return [
        { icon: 'mdi-facebook', link: 'https://www.facebook.com/tatjana.viiiiiii/', colorClass: 'facebookColor' },
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/taviatellier_/', colorClass: 'instagramColor' }
      ];
    }

    private goToLink(link: string): void {
      window.open(link, '_blank')!.focus();
    }
  }
</script>

<style lang="scss" scoped>
  .footer-color {
    background-color: $main-color !important;
  }
</style>
