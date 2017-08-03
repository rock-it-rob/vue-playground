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
