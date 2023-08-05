<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">Editar</v-card-title>
        <v-card-text>
          Informe o novo titulo
          <v-text-field class="mt-3" outlined v-model="title"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-2" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="handleEditar()"
            label="New Title"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  data() {
    return {
      dialog: true,
      title: null,
    };
  },
  created(){
    this.title = this.tarefa.title 
  },
  methods:{
    handleEditar(){
        let novaTarefa = {
            title: this.title,
            id: this.tarefa.id
        }
        this.$store.dispatch('editarTarefa',novaTarefa);
        this.$emit('fechaModal')
    }
  }
  
};
</script>