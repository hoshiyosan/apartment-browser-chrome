<template>
  <form v-if="apartment">
    <h2>General</h2>
    <md-field>
      <label>Prix</label>
      <md-input v-model="apartment.prix_euros" />
      <span class="md-suffix">€</span>
    </md-field>
    <md-field>
      <label>Pieces</label>
      <md-input v-model="apartment.nombre_pieces" />
    </md-field>
    <md-field>
      <label>Surface</label>
      <md-input v-model="apartment.surface_m2" />
      <span class="md-suffix">m²</span>
    </md-field>
    <md-field>
      <label>Conso energetique</label>
      <md-input v-model="apartment.conso_energetique" />
      <span class="md-suffix">kWh/m²/an</span>
    </md-field>
    <md-field>
      <label>Classe energetique</label>
      <md-input v-model="apartment.classe_energetique" />
    </md-field>
  </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('parse', ['apartment']),
  },
};
</script>