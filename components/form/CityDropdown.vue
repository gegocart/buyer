<template>
  <select @change="changed">
    <option value="">Please select</option>
    <option :value="city.name" v-for="city in cities" :key="city.id">
      {{ city.name }}
    </option>
  </select>
</template>

<script>
  export default {
    data () {
      return {
        cities: []
      }
    },

    methods: {
      async getCities () {
        let response = await this.$axios.$get('cities')
        this.cities = response;
      },

      changed ($event) {
        this.$emit('input', $event.target.value)
      }
    },

    created () {
      this.getCities()
    }
  }
</script>
