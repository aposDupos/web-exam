<template>
  <v-row justify="flex-start">
    <v-col cols="12">
      <AnimalsForm/>
    </v-col>
    <v-col cols="4" v-for="animal in animals" :key="animal.id">
      <AnimalCard :animal="animal"/>
    </v-col>
  </v-row>
</template>

<script>
import AnimalsForm from "../components/AnimalsForm";
import {mapActions, mapMutations, mapGetters} from 'vuex'
import AnimalCard from "../components/AnimalCard";

export default {
  name: "animals",
  components: {AnimalCard, AnimalsForm},
  async fetch() {
    const animals = await this.getAnimals();
    this.setAnimals(animals)
  },
  computed: {
    ...mapGetters({
      animals: 'animals/animals'
    })
  },
  methods: {
    ...mapActions({
      getAnimals: 'animals/getAnimals'
    }),
    ...mapMutations({
      setAnimals: 'animals/setAnimals'
    })
  }
}
</script>

<style scoped>

</style>
