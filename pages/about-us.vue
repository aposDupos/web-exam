<template>
  <v-row>
    <v-col cols="12">
      <p>{{mainData.text}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "about-us",
  async fetch() {
    this.mainData = await this.$axios.$get('/api/farm/about_page')
  },
  data() {
    return {
      mainData: {}
    }
  },
}
</script>

<style scoped>

</style>
