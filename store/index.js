import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default () => {
  return new Vuex.Store({
    state: {
      token: '',
      user: {},
      articles: {},
      locales: ['en', 'fr'],
      locale: 'en'
    },
    getters,
    mutations,
    actions
  })
}
