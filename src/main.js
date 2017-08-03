import Vue from "vue";
import banner from "./component/banner.vue";
import trailer from "./component/trailer.vue";

new Vue({
  el: "#app-main",
  data: {
    title: "My Banner Component",
    author: "Rob Benton",
    bio: "I'm super awesome."
  },
  components: {
      "banner": banner,
      "trailer": trailer
  }
});
