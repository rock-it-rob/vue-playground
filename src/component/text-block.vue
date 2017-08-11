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
  margin-bottom: 20px;

}

.section h2
{
  font-size: 1.2em;
  color: #d66;
  background: #722;
  background: #fee;
  color: #400;
  border-bottom: 2px solid #e44;
  padding: 6px 18px;
  display: inline-block;
}

.section .text
{
  font-size: 1.1em;
  background: #fff;
  color: #d44;
  padding: 10px 0;
}
</style>
