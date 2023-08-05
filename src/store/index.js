import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('dbs')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      // { id: 1, title: "Estudar vueJs + vuetify", concluido: false },
      // { id: 2, title: "Estilizar pag", concluido: false },
    ],

  },
  getters: {
  },
  mutations: {
    buscaTarefas(state) {
      db.collection('tarefas').get().then(tarefasDb => {
        state.tarefas = tarefasDb
        console.log(tarefasDb);
      })
    },

    addTarefas(state, title) {

      db.collection('tarefas').add({
        id: new Date().getTime(),
        title,
        concluido: false
      })
    },

    
  },
  actions: {
    async addTarefas({commit},title){
      await commit('addTarefas',title)
      await commit('buscaTarefas')
    },

    async updateTarefa({commit}, novaTarefa){
      db.collection('tarefas').doc({id: novaTarefa.id}).update({
        title: novaTarefa.title
      }).then(() => {
        commit('buscaTarefas')
      })
    },
    
    async removeTarefa({commit}, id){
      db.collection('tarefas').doc({id}).delete().then(() => {
        commit('buscaTarefas')
      })
    }
  },
  modules: {
  }
})
