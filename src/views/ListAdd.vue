<template>
  <v-layout row column wrap class="mt-5">
    <v-flex xs10>
      <v-card flat>
        <v-text-field v-model="todo" :counter="20" label="할일 쓰기" required></v-text-field>
        <v-btn @click="todoinput()">입력하기</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { eventBus } from "@/main";
export default {
  data() {
    return {
      todo: null
    };
  },
  created() {},
  methods: {
    todoinput() {
      eventBus.$emit("TodoInput", this.todo);
    }
  }
};
</script>

<style>
</style>