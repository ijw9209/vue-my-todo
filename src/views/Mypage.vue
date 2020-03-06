<template>
  <div>{{userInfo.name}} ㅎㅇ</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style>
</style>