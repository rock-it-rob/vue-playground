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

<style>
.banner
{
  background: #fafafa;
  border-bottom: 2px solid #eee;
  padding: 10px;
  border-top: 1px solid #f44;
}

.banner h1
{
  color: #f44;
  font-size: 2em;
  text-align: center;
  text-shadow: #fcc 1px 2px;
  padding: 10px 0;
}
</style>
