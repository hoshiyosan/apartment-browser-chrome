<template>
  <md-table v-model="users" md-card>
    <md-table-row>
      <md-table-head md-numeric>ID</md-table-head>
      <md-table-head>Name</md-table-head>
    </md-table-row>

    <md-table-row slot="md-table-row">
      <md-table-cell md-label="ID" md-numeric>Prix appartement</md-table-cell>
      <md-table-cell md-label="Name">{{ apartment.prix_euros | price }}</md-table-cell>
    </md-table-row>

    <md-table-row slot="md-table-row" v-for="cout in apartment.couts" :key="cout.name">
      <md-table-cell md-label="ID" md-numeric>{{ cout.name }}</md-table-cell>
      <md-table-cell md-label="Name">{{ cout.value | price }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('parse', ['apartment']),
  },
};
</script>