<template>
  <div id="search">
    <header>
      <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Général" to="/search/general" exact />
        <md-tab id="tab-details" md-label="Détails" to="/search/details" exact />
        <md-tab id="tab-pricing" md-label="Prix" to="/search/pricing" exact />
      </md-tabs>
    </header>

    <main id="search-result">
      <router-view v-if="apartment" />

      <div id="error-message" v-if="!apartment">
        Impossible de trouver un appart ici!
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  beforeMount() {
    this.retrieveContent();
  },
  computed: {
    ...mapState('parse', ['apartment']),
  },
  methods: {
    retrieveContent() {
      console.log('button click');
      chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        const activeTab = tabs[0];
        const message = { subject: `tab:pageData` };
        console.log('send message to active tab', message);
        chrome.tabs.sendMessage(activeTab.id, message);
      });
    },
  },
};
</script>

<style scoped>
#search-result {
  padding: 0.5em 2em;
}
</style>