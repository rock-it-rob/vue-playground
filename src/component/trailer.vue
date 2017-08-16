<template>
  <div class="trailer">
    <p>
      This site created and maintained by
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
  background: #444;
  color: #888;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid #333;
}

.trailer p
{
  font-size: .9em;
  margin: 6px;
}

.trailer .author
{
  font-weight: bold;
  font-size: .9em;
  text-decoration: underline;
}

.trailer .bio
{
  font-size: 1em;
}
</style>
