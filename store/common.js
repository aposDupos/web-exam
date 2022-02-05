const getters = {
  leftWidget: ({leftWidget}) => leftWidget
}

const actions = {
  async getWidget() {
    const widgetData = await this.$axios.$get('/api/farm/left_widget')
    return widgetData
  },
}

const mutations = {
  setWidget(state, widgetData){
    state.leftWidget = widgetData
  },
  addWidget(state, payload){
    state.leftWidget[payload]=state.leftWidget[payload]+1
  }
}

const state = () => ({
  leftWidget: {}
})

export {
  getters, actions, state, mutations
}
