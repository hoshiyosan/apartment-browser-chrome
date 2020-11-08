<template>
  <form @submit.prevent="searchPlace">
    <md-autocomplete v-model="query" :md-options="placesNames" @md-changed="onQueryChange" @md-selected="onPlaceSelected">
      <label>Country</label>
    </md-autocomplete>

    <md-button type="submit" class="md-secondary md-raised">search</md-button>
  </form>
</template>


<script>
import MapsApi from '../../../apis/maps';

export default {
  data() {
    return {
      query: '',
      candidates: [],
      result: null,
      //
      timeout: 500,
      lastType: new Date().getTime(),
    };
  },
  props: {
    value: Object,
  },
  computed: {
    placesNames() {
      return this.candidates.map(candidate => candidate.formatted_address);
    },
  },
  methods: {
    onQueryChange(evt) {
      this.lastType = new Date().getTime();
      setTimeout(
        scope => {
          if (new Date().getTime() - scope.lastType >= scope.timeout) {
            console.log(this.query);
            scope.searchPlace();
          }
        },
        this.timeout,
        this
      );
    },
    onPlaceSelected(placeName) {
      const googleMapPlace = this.candidates.filter(candidate => candidate.formatted_address === placeName)[0];
      this.$emit('input', {
        name: googleMapPlace.formatted_address,
        location: googleMapPlace.geometry.location,
      });
    },
    searchPlace() {
      MapsApi.searchPlace(this.query).then(candidates => {
        this.candidates = candidates;
      });
    },
  },
};
</script>