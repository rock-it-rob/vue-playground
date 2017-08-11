import Vue from "vue";
import banner from "./component/banner.vue";
import trailer from "./component/trailer.vue";
import cont from "./component/cont.vue";

let blocks = [
  {
    title: "Section 1: The First",
    text: "This is section 1. Welcome. Enjoy it."
  },
  {
    title: "Section 2: The Second Section",
    text: "You've read the first. Now read the next chapter."
  },
  {
    title: "Section 3: The Final Chapter",
    text: "The thrilling conclusion to the epic saga!"
  }
];

new Vue({
  el: "#app-main",
  data: {
    title: "My Banner Component",
    author: "Rob Benton",
    bio: "He's a great guy.",
    blocks: blocks
  },
  components: {
      "banner": banner,
      "cont": cont,
      "trailer": trailer
  }
});
