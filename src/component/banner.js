import Vue from "vue";

Vue.component("banner", {
  props: [ "title" ],
  template: "<h1 class='banner'>{{ title }}</h1>"
});
