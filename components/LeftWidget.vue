<template>
  <v-card
    elevation="2"
    outlined
    shaped
    class="mt-4"
  >
    <v-card-title>В нашем роддоме родилось:</v-card-title>
    <v-list light shaped>
      <v-list-item v-for="(animal, key, index) in leftWidget" :key="key">
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
import {mapActions, mapMutations, mapGetters} from "vuex";

export default {
  name: "LeftWidget",
  async fetch() {
    this.setWidget(await this.getWidget())
  },
  data() {
    return {
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
  },
  computed: {
    ...mapGetters({
      leftWidget: 'common/leftWidget'
    })
  },
  methods: {
    ...mapActions({
      getWidget: 'common/getWidget'
    }),
    ...mapMutations({
      setWidget: 'common/setWidget'
    })
  }
}
</script>

<style scoped>

</style>
