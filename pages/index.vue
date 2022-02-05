<template>
  <v-row>
    <v-col cols="6">
      <p>{{mainData.text}}</p>
    </v-col>
    <v-col cols="6">
      <v-img :src="mainData.image" aspect-ratio="1" lazy-src="">
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="lime"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  async fetch() {
    this.mainData = await this.$axios.$get('/api/farm/home_page')
  },
  data() {
    return {
      mainData: {}
    }
  },
}
</script>
