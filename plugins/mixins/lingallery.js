import Vue from 'vue';
import Lingallery from 'lingallery';

if (process.BROWSER_BUILD) {
  const lingallery = require('lingallery')
  Vue.use(lingallery)
}

