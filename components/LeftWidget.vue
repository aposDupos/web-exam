<template>
  <v-card
    elevation="2"
    outlined
    shaped
    class="mt-4"
  >
    <v-card-title>В нашем роддоме родилось:</v-card-title>
    <v-list light shaped>
      <v-list-item v-for="(animal, key, index) in widgetData" :key="key">
        <v-list-item-icon>
          <v-icon v-text="animals[index].icon"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="animals[index].name"/>
          <v-list-item-subtitle v-text="animal"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "LeftWidget",
  async fetch() {
    this.widgetData = await this.$axios.$get('/api/farm/left_widget')
  },
  data() {
    return {
      widgetData: {},
      animals: [
        {
          name: 'Добрейших коровок:',
          icon: 'mdi-cow'
        }, {
          name: 'Милейших кроликов:',
          icon: 'mdi-rabbit'
        }, {
          name: 'Пушистейших овечек:',
          icon: 'mdi-sheep'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
