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
  background: #fdd;
  padding: 14px;
  border: 1px solid #ccc;
  border-bottom: 1px solid #faa;
  margin: 0 10px;
}

.banner h1
{
  color: #e66;
  color: #f44;
  font-size: 2em;
  text-align: center;
  text-shadow: #aaa 1px 1px;
}
</style>
