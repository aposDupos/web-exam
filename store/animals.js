const getters = {
  animals: ({animals}) => animals
}

const actions = {
  async getAnimals() {
    const res = await this.$axios.$get('/api/farm/baby')
    return res
  }
}

const mutations = {
  setAnimals(state, animals) {
    state.animals = animals
  },
  addAnimal(state, payload){
    state.animals = [...state.animals, payload]
  }
}

const state = () => ({
  animals: []
})

export {
  getters, actions, state, mutations
}
