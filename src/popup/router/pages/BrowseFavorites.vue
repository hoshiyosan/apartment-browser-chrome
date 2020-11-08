<template>
  <div id="browse-favorites">
    <h2>Browse favorites</h2>

    <md-list class="md-triple-line">
      <BookmarkSummary :bookmark="bookmark" v-for="bookmark in bookmarks" :key="bookmark._id" />
    </md-list>
  </div>
</template>


<script>
import { mapActions, mapState } from 'vuex';
import BookmarkSummary from '../widgets/bookmark/Summary';

export default {
  components: { BookmarkSummary },
  beforeMount() {
    this.updateBookmarks();
  },
  computed: {
    ...mapState('bookmarks', ['bookmarks']),
  },
  methods: {
    ...mapActions('bookmarks', ['updateBookmarks']),
  },
};
</script>