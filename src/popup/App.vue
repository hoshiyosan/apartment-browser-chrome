<template>
  <div>
    <md-toolbar class="md-primary">
      <h1 class="md-title">Appartement</h1>

      <div class="md-toolbar-section-end">
        <!--<md-icon>favorite</md-icon>-->
        <md-button class="md-icon-button" to="/favorite/new" v-if="bookmark">
          <md-icon>favorite_border</md-icon>
        </md-button>
        <md-button class="md-icon-button" to="/favorites">
          <md-icon>search</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return { message: 'yolo' };
  },
  computed: {
    ...mapState('parse', ['bookmark']),
  },
};
</script>
