<template>
<div>
  <h1 class="banner">{{ value }}</h1>
  <input type="text" v-model="value"/>
</div>
</template>

<script>
export default {
  props: [ "title" ],
  data: function() {
    return { value: this.title }
  }
  /*
  data: function () {
    return {
      value: this.title
    };
  }
  */
};
</script>
