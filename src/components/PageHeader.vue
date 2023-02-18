<template>
  <v-row class="d-flex justify-center mt-0 header">
    <div class="fill-height d-flex align-center">
      <h2 class="white--text">
        {{ headerText }}
      </h2>
    </div>
  </v-row>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class PageHeader extends Vue {
    @Prop({ type: String, required: true })
    private headerText!: string;
  }
</script>

<style lang="scss" scoped>
  .header {
    height: 300px;
    background-image: url('~@/assets/img.png');
    background-color: $secondary-color;
    background-blend-mode: overlay;
    background-repeat: round;
    background-size: 175px 150px;

    @media #{map-get($display-breakpoints, "xs-only")}, screen and (max-height: 550px) {
      height: 200px;
      background-image: url('~@/assets/cropped2.png');
      background-repeat: space;
      background-position: 0 25px;
      background-size: 115px 155px;
    }

    @media only screen and (max-width: 325px) {
      height: 175px;
      background-image: unset;
      background-repeat: unset;
      background-position: unset;
      background-size: unset;
    }
  }

  h2 {
    font-family: $secondary-font;
    font-size: clamp(6rem, 12vw, 8rem);

    @media #{map-get($display-breakpoints, "xs-only")} {
      font-size: 4rem;
    }
  }
</style>
