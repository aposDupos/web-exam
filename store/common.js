const getters = {
  isDialogOpened: ({isDialogOpened}) => isDialogOpened
}

const actions = {}

const mutations = {
  setDialogOpened(state, isDialogOpened) {
    state.isDialogOpened = isDialogOpened
  }
}

const state = () => ({
  isDialogOpened: {
    type: Boolean,
    default: false
  }
})

export {
  getters, actions, state, mutations
}
