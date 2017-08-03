import Vue from "vue";
import banner from "./component/banner.vue";

new Vue({
  el: "#app-main",
  data: {
    title: "My Banner Component"
  },
  components: {
      "banner": banner
  }
});
