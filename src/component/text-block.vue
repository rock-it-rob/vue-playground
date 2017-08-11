<template>
  <div class="section">
    <h2>{{ block.title }}</h2>
    <div class="text">{{ block.text }}</div>
  </div>
</template>

<script>
export default {
  props: [ "block" ]
};
</script>

<style>
.section
{
  font-size: 1em;
  background: #888;
  margin-bottom: 20px;
}

.section h2
{
  font-size: 1.2em;
  color: #fbb;
  background: #444;
  padding: 8px;
}

.section .text
{
  font-size: 1.1em;
  background: #fff;
  color: #d44;
  padding: 10px 0;
}
</style>
