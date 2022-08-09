<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="inputForm"
        label="Add Tarefa"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>

    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <tarefa :tarefa="tarefa" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import tarefa from "../components/tarefas/TarefaView.vue";

export default {
  // eslint-disable-next-line
  name: "Home",

  components: {
    tarefa,
  },

  data() {
    return {
      inputForm: null,
    };
  },

  methods: {
    handleAddTarefa() {
      this.$store.commit('addTarefas', this.inputForm);
      this.inputForm = null;
    }
  }
};
</script>
