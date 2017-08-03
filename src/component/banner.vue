<template>
<div class="banner">
  <h1>{{ value }}</h1>
</div>
</template>

<script>
export default {
  props: [ "title" ],
  data: function() {
    return { value: this.title }
  }
};
</script>
