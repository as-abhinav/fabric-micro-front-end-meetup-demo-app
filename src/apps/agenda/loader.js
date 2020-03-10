import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import VueMaterial from 'vue-material';
import App from './app/index.vue';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#agenda',
    render: r => r(App)
  }
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
