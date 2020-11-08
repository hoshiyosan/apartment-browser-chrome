<template>
  <div id="pieces" v-if="apartment">
    <h2>Pieces</h2>
    <label>
      Garage
      <input v-model="apartment.bonus.garage" type="checkbox" true-value="true" false-value="false" />
    </label>

    <label>
      Parking
      <input v-model="apartment.bonus.parking" type="checkbox" true-value="true" false-value="false" />
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('parse', ['apartment']),
  },
};
</script>