<template>
  <div class="content">
    <text-block v-for="i in blockList" :block="i" :key="i.id"></text-block>
  </div>
</template>

<script>
import textBlock from "./text-block.vue";

export default {
  props: [ "blocks" ],
  computed: {
    blockList: function() {
      let list = [];
      for (let i = 0; i < this.blocks.length; ++i) {
        list[i] = this.blocks[i];
        list[i].id = i;
      }
      return list;
    }
  },
  components: {
    "text-block": textBlock
  }
};
</script>

<style>
.content
{
  color: #f44;
  margin: 10px;
  border: 2px solid #eee;
  padding: 4px;
}
</style>
