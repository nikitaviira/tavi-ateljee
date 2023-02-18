<template>
  <v-card
    :class="$style.weOfferCard"
    elevation="10"
  >
    <div
      v-if="!isReversed"
      :class="$style.flexBox"
      class="d-flex flex-no-wrap justify-space-between fill-height"
    >
      <div :class="$style.imageContainer">
        <v-img
          :class="$style.image"
          eager
          :src="require(`@/assets/mainpage/${imageName}`)"
        />
      </div>
      <div :class="$style.textContainer">
        <h2>{{ $t(headerTranslatedKey) }}</h2>
        <p>{{ $t(textTranslatedKey) }}</p>
        <v-btn
          :to="$i18nRoute({ name: 'prices' })"
          depressed
        >
          {{ $t('mainPage.weOffer.buttonText') }}
        </v-btn>
      </div>
    </div>
    <div
      v-else
      :class="$style.flexBoxReversed"
      class="d-flex flex-no-wrap justify-space-between fill-height"
    >
      <div :class="$style.reversedTextContainer">
        <h2>{{ $t(headerTranslatedKey) }}</h2>
        <p>{{ $t(textTranslatedKey) }}</p>
        <v-btn
          :to="$i18nRoute({ name: 'prices' })"
          depressed
        >
          {{ $t('mainPage.weOffer.buttonText') }}
        </v-btn>
      </div>
      <div :class="$style.reversedImageContainer">
        <v-img
          :class="$style.reversedImage"
          eager
          :src="require(`@/assets/mainpage/${imageName}`)"
        />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class WeOfferCard extends Vue {
    @Prop({ type: String, required: true })
    private textTranslatedKey!: string;

    @Prop({ type: String, required: true })
    private headerTranslatedKey!: string;

    @Prop({ type: String, required: true })
    private imageName!: string;

    @Prop({ type: Boolean, default: false })
    private isReversed!: boolean;
  }
</script>

<style lang="scss" module>
  :export {
    mainColor: $main-color;
    secondaryColor: $secondary-color;
  }

  .weOfferCard {
    width: 70%;
    max-width: 1300px;
    margin: 40px auto;
    background: white;

    a {
      float: right;
      margin-top: 3%;
      color: white !important;
      background-color: $main-color !important;
      background: $main-color !important;
    }

    @media only screen and (max-width: 419px) {
      width: 95%;
    }

    @media only screen and (min-width: 420px) and (max-width: 599px) {
      width: 90%;
    }

    @media only screen and (min-width: 600px) and (max-width: 899px) {
      width: 80%;
    }

    @media only screen and (min-width: 900px) and (max-width: 1149px) {
      width: 75%;
    }

    @media only screen and (min-width: 1150px) and (max-width: 1499px) {
      width: 80%;
    }

    @media #{map-get($display-breakpoints, "xl-only")} {
      width: 65%;
    }
  }

  .flexBox {
    flex-direction: row;

    @media only screen and (max-width: 1149px) {
      flex-direction: column;
    }
  }

  .flexBoxReversed {
    flex-direction: row;

    @media only screen and (max-width: 1149px) {
      flex-direction: column-reverse;
    }
  }

  .imageContainer {
    margin-right: 2%;

    @media only screen and (max-width: 1149px) {
      margin-right: 0;
    }
  }

  .image, .reversedImage {
    height: 100%;
    position: absolute;
    top: -35px;
    width: inherit;
    left: -45px;

    @media only screen and (max-width: 1149px) {
      height: inherit;
      width: 85%;
      margin: -35px auto;
      position: relative;
      top: auto;
      left: auto;
    }
  }

  .textContainer, .reversedTextContainer {
    width: 50%;
    padding: 5%;

    h2 {
      color: black;
      font-size: xx-large;
      padding-bottom: 3%;

      @media only screen and (max-width: 599px) {
        font-size: x-large;
      }
    }

    p {
      font-size: 1.1rem;
      color: black;
      white-space: pre-line;

      @media only screen and (max-width: 599px) {
        font-size: 1rem;
        white-space: normal;
      }
    }

    @media only screen and (max-width: 1149px) {
      width: 100%;
      padding: 4%;
    }

    @media only screen and (max-width: 899px) {
      padding: 5%;
    }

    @media only screen and (max-width: 449px) {
      padding: 7%;
    }
  }

  .reversedImageContainer, .imageContainer {
    width: 50%;
    background: rgb(229, 107, 81);

    @media only screen and (max-width: 449px) {
      height: 200px;
    }

    @media only screen and (min-width: 450px) and (max-width: 499px) {
      height: 225px;
    }

    @media only screen and (min-width: 500px) and (max-width: 599px) {
      height: 250px;
    }

    @media only screen and (min-width: 600px) and (max-width: 749px) {
      height: 275px;
    }

    @media only screen and (min-width: 750px) and (max-width: 899px) {
      height: 325px;
    }

    @media only screen and (min-width: 900px) and (max-width: 1149px) {
      height: 350px;
    }

    @media only screen and (max-width: 1149px) {
      width: 100%;
    }
  }

  .reversedImage {
    left: auto;
    right: -45px;

    @media only screen and (max-width: 1149px) {
      right: auto;
    }
  }

  .reversedTextContainer {
    margin-right: 2%;

    @media only screen and (max-width: 1149px) {
      margin-right: 0;
    }
  }
</style>
