import { Component, Vue } from 'vue-property-decorator';

@Component
export default class IsMobile extends Vue {
  screenHeight = 0;

  get isMobile(): boolean {
    return !this.$vuetify.breakpoint.smAndUp || this.screenHeight <= 550;
  }

  get isTiltedScreen(): boolean {
    return this.screenHeight <= 550;
  }

  private updateHeight(): void {
    this.screenHeight = window.innerHeight;
  }

  created(): void {
    this.updateHeight();
    window.addEventListener('resize', () => this.updateHeight());
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', () => this.updateHeight());
  }
}
