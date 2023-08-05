<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">Excluir</v-card-title>
        <v-card-text>
          Deseja realmente excluir essa tarefa?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-2" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="primary" text @click="handleRemove()">
            Excluir
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
    };
  },
  methods: {
    handleRemove() {
      this.$store.dispatch("removeTarefa", this.tarefa.id);
      this.$emit("fechaModal");

    console.log('helo');
    },
  },
};
</script>