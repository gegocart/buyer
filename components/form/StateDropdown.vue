<template>
  <select @change="changed">
    <option value="">Please select</option>
    <option :value="state.name" v-for="state in states" :key="state.id">
      {{ state.name }}
    </option>
  </select>
</template>

<script>
  export default {
    data () {
      return {
        states: []
      }
    },

    methods: {
      async getStates() {
        let response = await this.$axios.$get('states')
        this.states = response
      },

      changed ($event) {
        this.$emit('input', $event.target.value)
      }
    },

    created () {
      this.getStates()
    }
  }
</script>
