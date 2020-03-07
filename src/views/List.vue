<template>
  <v-layout row wrap class="mt-5">
    <v-flex xs10 class="pl-2">
      <v-card class="mx-auto" max-width="400" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{todoLists}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      todoLists: []
    };
  },
  created() {
    eventBus.$on("TodoInput", todo => {
      this.todoLists = todo;
    });
  }
};
</script>

<style>
</style>