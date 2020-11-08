<template>
  <form id="favorites" @submit.prevent="createBookMark()">
    <h2>Favorite</h2>

    <md-field>
      <label>URL</label>
      <md-input v-model="bookmark.url" style="font-size: 10px" />
    </md-field>

    <md-field>
      <label>Nom</label>
      <md-input v-model="bookmark.title" />
    </md-field>

    <SearchPlace v-model="bookmark.place" />

    <md-button class="md-primary md-raised" type="submit">Add to favorites</md-button>
  </form>
</template>


<script>
import { mapState } from 'vuex';
import SearchPlace from '../widgets/generic/SearchPlace';

export default {
  data() {
    return {
      address: '14 square andré roux',
    };
  },
  components: {
    SearchPlace,
  },
  computed: {
    ...mapState('parse', ['bookmark']),
  },
  methods: {
    createBookMark() {
      this.$store.dispatch('bookmarks/createBookMark', this.bookmark);
    },
  },
};
</script>


<style scoped>
#favorites {
  padding: 0.5em 2em;
}
</style>