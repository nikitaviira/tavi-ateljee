import type { VNode } from 'vue';
import type Vue from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = Vue;
    type IntrinsicElements = Record<string, any>;
  }
}
