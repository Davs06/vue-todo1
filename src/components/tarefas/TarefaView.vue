<template>
  <div>
    <v-list-item :class="{ 'light-green lighten-4': tarefa.concluido }">
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluido }"
          >
            {{ tarefa.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>

          <TarefaMenu/>
          <!-- <v-btn icon @click.stop="handleRemoveTarefa(tarefa.id)">
            <v-icon color="red lighten-3">mdi-trash-can</v-icon>
          </v-btn> -->
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue";

export default {
  components: { TarefaMenu },
  props: ["tarefa"],
  methods: {
    handleRemoveTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>

<style>
</style>