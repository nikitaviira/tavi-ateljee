<template>
  <v-container
    fluid
    class="pt-0 pb-1"
  >
    <PageHeader :header-text="$t('headers.contacts')" />
    <v-row class="first-row">
      <v-col class="contacts-block">
        <p class="header pb-5">
          Õmblusateljee "TaVi"
        </p>
        <span
          v-for="(contact, i) in contacts"
          :key="i"
        >
          <v-icon
            :size="$vuetify.breakpoint.xsOnly ? 30 : 45"
            class="mr-2"
            color="rgb(229, 107, 81)"
          >
            {{ contact.icon }}
          </v-icon>
          <span v-if="!contact.link">{{ contact.text }}</span>
          <span
            v-else
            style="cursor: pointer"
            @click="goToLink(contact.link)"
          >
            {{ contact.text }}
          </span>
        </span>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4642.962422592088!2d28.164203086321994!3d59.3796527
        8493662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4694481b8903eab5%3A0x8035cdc46d7cd52d!2sAlbert-Au
        gust%20Tiimani%2014%2C%2021003%20Narva!5e0!3m2!1sen!2see!4v1647270363336!5m2!1sen!2see"
          :style="{ height: $vuetify.breakpoint.lgAndUp || $vuetify.breakpoint.smAndDown ? '500px' : '400px' }"
          class="google-map"
          allowfullscreen
          loading="eager"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PageHeader from '@/components/PageHeader.vue';
  import { translation } from '@/plugins/Translation';

  @Component({
    components: {
      PageHeader
    },
    metaInfo() {
      return {
        title: `${this.$t('name')} | ${this.$t('page.contacts.name')}`,
        htmlAttrs: {
          lang: translation.currentLocale
        },
        meta: [{ name: 'description', content: `${this.$t('page.contacts.description')}` }]
      };
    }
  })
  export default class Contacts extends Vue {
    private get contacts(): any {
      return [
        { text: '+37253755945', icon: 'mdi-phone' },
        { text: 'tavi.ateljee@gmail.com', icon: 'mdi-email' },
        { text: this.$t('footerAddress'), icon: 'mdi-home' },
        { text: 'taviatellier_', link: 'https://www.instagram.com/taviatellier_/', icon: 'mdi-instagram' },
        { text: 'tatjana.viiiiiii', link: 'https://www.facebook.com/tatjana.viiiiiii', icon: 'mdi-facebook' }
      ];
    }

    private goToLink(link: string): void {
      window.open(link, '_blank')!.focus();
    }
  }
</script>

<style lang="scss" scoped>
.first-row {
  padding-top: 50px !important;
  padding-bottom: 50px !important;
  @media #{map-get($display-breakpoints, "sm-and-down")} {
    padding-top: unset !important;
    padding-bottom: unset !important;
  }
  @media #{map-get($display-breakpoints, "md-only")} {
    padding: 0 2%;
  }
  @media #{map-get($display-breakpoints, "lg-and-up")} {
    padding: 0 5%;
  }
}

.contacts-block {
  display: grid;
  align-self: center;
  padding: 40px 5%;

  @media #{map-get($display-breakpoints, "md-and-up")} {
    justify-content: center;
  }

  @media #{map-get($display-breakpoints, "xs-only")} {
    padding: 40px 5%;
  }

  span {
    font-size: 1.5rem;

    @media #{map-get($display-breakpoints, "sm-only")} {
      font-size: 1.3rem;
    }

    @media #{map-get($display-breakpoints, "xs-only")} {
      font-size: 1.1rem;
    }
  }
}

.alignTextCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.google-map {
  border: 0;
  width: 100%;
}

.header {
  font-size: clamp(2.2rem, 2.75vw, 3rem);
  display: flex;
  justify-content: center;
  align-items: center;

  @media #{map-get($display-breakpoints, "xs-only")} {
    font-size: 2rem;
  }
}
</style>
