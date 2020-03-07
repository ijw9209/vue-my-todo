<template>
  <v-container grid-list-md text-xs-center>
    <v-layout wrap row align-center>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0 todo-list-title">{{userInfo.name}} 님의 일정리스트</v-card-text>
        </v-card>
      </v-flex>
      <List />
      <ListAdd />
    </v-layout>
  </v-container>
</template>

<script>
import List from "@/views/List";
import ListAdd from "@/views/ListAdd";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userInfo"])
  },
  components: {
    List,
    ListAdd
  }
};
</script>

<style>
.todo-list-title {
  text-align: center;
}
</style>