<template>
  <v-menu
    open-on-click
    transition="slide-y-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        fab
        dark
        color="#2bc531"
        fixed
        right
        bottom
        height="50"
        width="50"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon size="30">
          mdi-phone
        </v-icon>
      </v-btn>
    </template>

    <v-list
      class="pr-0 pl-0"
      rounded
    >
      <v-list-item
        v-for="(button, i) in buttons"
        :key="'btn-' + i"
      >
        <v-row>
          <v-btn
            :class="button.class"
            fab
            icon
            @click="button.initCall"
          >
            <v-avatar size="45">
              <v-img
                eager
                :src="require('@/assets/svgs/' + button.picture)"
              />
            </v-avatar>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TelephoneBtn extends Vue {
    private buttons = [
      { picture: 'phone.svg', initCall: () => this.initPhoneCall(), class: 'phoneBtn' },
      { picture: 'viber.svg', initCall: () => this.initViberChat(), class: 'viberBtn' }
    ];

    private initPhoneCall(): void {
      location.href = 'tel:+37253755945';
    }

    private initViberChat(): void {
      location.href = 'viber://chat?number=%2B37253623105';
    }
  }
</script>

<style lang="scss" scoped>
  .phoneBtn {
    color: $phone-color !important;
    caret-color: $phone-color !important;
  }

  .viberBtn {
    color: $viber-main !important;
    caret-color: $viber-main !important;
  }

  .v-menu__content {
    border-radius: 30px !important;
  }
</style>
