<template>
  <v-container
    class="pt-0"
    fluid
  >
    <PageHeader :header-text="$t('headers.prices')" />
    <div
      v-for="[panelTopic, panels] in Object.entries(panelData)"
      :key="'panel-group-' + panelTopic"
    >
      <v-row
        id="choose-us-header"
        style="height: 150px"
        class="d-flex justify-center align-center mt-5"
      >
        <h2 :class="$style.subHeadingText">
          {{ panelTopic }} <hr>
        </h2>
      </v-row>
      <v-row :class="$style.expansionPanels">
        <v-expansion-panels
          popout
          active-class="mb-0"
        >
          <v-expansion-panel
            v-for="(panel, j) in panels"
            :key="'panel-group-' + panelTopic + 'sub-panel-' + j"
            :class="[$style.expansionPanel, 'white--text', 'mb-2']"
            :active-class="$style.expansionPanelActiveClass"
          >
            <v-expansion-panel-header disable-icon-rotate>
              <span :class="$style.expansionPanelHeaderText">
                {{ panel.name }}
              </span>
              <template #actions>
                <v-icon
                  :size="$vuetify.breakpoint.smAndUp ? 30 : 25"
                  :class="$style.disabledIcon"
                  :color="$style.mainColor"
                >
                  mdi-plus-circle
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content eager>
              <ol>
                <li
                  v-for="(item, k) in panel.items"
                  :key="'panel-group-' + panelTopic + 'sub-panel-' + j + 'price' + k"
                  class="black--text"
                  style="list-style-type: circle;"
                >
                  {{ item.name + ': ' }}
                  <b v-if="item.priceFrom === item.priceTo">{{ item.priceFrom }}€</b>
                  <b v-else><br v-if="$vuetify.breakpoint.xsOnly">{{ $t('priceRange', { from: item.priceFrom, to: item.priceTo }) }}€</b>
                </li>
              </ol>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <div class="mb-15" />
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import PageHeader from '@/components/PageHeader.vue';
  import { translation } from '@/plugins/Translation';
  import prices from '@/locale/prices.json';

  interface PanelItem {
    name: string;
    priceFrom: number;
    priceTo: number;
  }

  interface Panel {
    name: string;
    items: PanelItem[];
  }

  @Component({
    components: { PageHeader },
    metaInfo() {
      return {
        title: `${this.$t('name')} | ${this.$t('page.prices.name')}`,
        htmlAttrs: {
          lang: translation.currentLocale
        },
        meta: [{ name: 'description', content: `${this.$t('page.prices.description')}` }]
      };
    }
  })
  export default class Prices extends Vue {
    private panelData: Record<string, Panel[]> = {};

    mounted(): void {
      this.setTranslatedPrices();
    }

    private setTranslatedPrices() {
      this.panelData = prices[translation.currentLocale];
    }

    @Watch('$route.params.locale')
    private onLocaleChange(): void {
      this.setTranslatedPrices();
    }
  }
</script>

<style lang="scss" module>
:export {
  mainColor: $main-color;
  secondaryColor: $secondary-color;
}

.expansionPanels {
  padding: 0 25%;

  @media #{map-get($display-breakpoints, "xs-only")} {
    padding: 0 20px;
  }

  @media #{map-get($display-breakpoints, "sm-only")} {
    padding: 0 10%;
  }

  @media #{map-get($display-breakpoints, "md-only")} {
    padding: 0 15%;
  }
}

.loadingAnimationBlock {
  margin-top: 12px;
  height: calc(100vh - 430px);
  align-content: center;
  justify-content: center;

  @media #{map-get($display-breakpoints, "xs-only")}, screen and (max-height: 550px) {
    height: calc(100vh - 256px);
  }

  @media only screen and (max-width: 325px) {
    height: calc(100vh - 305px);
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

.expansionPanel {
  background: $secondary-color !important;
  border-radius: 0 !important;
  border-color: transparent !important;
}

.expansionPanelHeaderText {
  font-size: x-large;
  font-weight: 500;

  @media #{map-get($display-breakpoints, "xs-only")} {
    font-size: large;
  }
}

.alignTextCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.disabledIcon {
  background-color:white;
  width: 15px;
  height: 15px;

  @media #{map-get($display-breakpoints, "xs-only")} {
    height: 12px;
  }
}

.expansionPanelActiveClass {
  background: white !important;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%) !important;

  span {
    color: black !important;
  }

  i::before {
    content: "\F0376";
  }
}
</style>
