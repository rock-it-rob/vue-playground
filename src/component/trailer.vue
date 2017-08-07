<template>
  <div class="trailer">
    <p>
      This site created and maintained by:
      <span class="author">{{ author }}</span>
    </p>
    <p>
      About <span class="author">{{ authorShortName }}</span>:
      <span class="bio">{{ bio }}</span>
    </p>
  </div>
</template>

<script>
module.exports = {
  props: [
    "author",
    "bio"
  ],
  computed: {
    authorShortName: function() {
      let names = this.author.split(' ');
      return names[0];
    }
  }
}
</script>

<style>
.trailer
{
  background: #f92;
  color: #fda;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.trailer p
{
  font-size: .9em;
  margin: 6px;
}

.trailer .author
{
  font-family: monospace;
  color: #fff;
}

.trailer .bio
{
  font-size: 1em;
}
</style>
