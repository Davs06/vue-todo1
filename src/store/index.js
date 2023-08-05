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
      // if (title) {
      //   state.tarefas.push({
      //     id: new Date().getTime(),
      //     title,
      //     concluido: false
      //   })
      // }
    },

    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)

    },

    editarTarefa(state, novaTarefa) {
      let tarefa = state.tarefas.filter(tarefa => tarefa.id !== novaTarefa.id)[0]

      tarefa.title = novaTarefa.title

    }
  },
  actions: {
  },
  modules: {
  }
})
