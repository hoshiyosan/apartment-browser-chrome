<template>
  <md-list-item id="bookmark" :to="'/favorite/' + bookmark._id">
    <div class="md-list-item-text">
      <strong>{{ bookmark.title }}</strong>
      <span>{{ bookmark.place.name }}</span>
      <p>{{ bookmark.url }}</p>
    </div>
  </md-list-item>
</template>


<script>
export default {
  props: {
    bookmark: Object,
  },
};
</script>


<style lang="css" scoped>
#bookmark:hover {
  background-color: yellow;
}
</style>