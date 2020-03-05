<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout row wrap>
      <v-flex xs12 align-self-center>
        <v-card>
          <v-toolbar flat color="primary">
            <v-toolbar-title class="login_title">로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field class="mt-5" label="email" v-model="email"></v-text-field>
            <v-text-field class="mb-3" v-model="password" label="password" type="password"></v-text-field>
            <v-btn
              @click="login({
                // email : email 변수명과 같으면 그냥써도됨 
                email,
                password:password
            })"
              color="#64B5F6"
              large
              block
              depressed
              class="login_btn"
            >
              <p class="mt-3">로그인</p>
            </v-btn>
          </div>
        </v-card>
        <v-alert v-if="isLogin" class="mt-2" type="success" :value="isLogin">로그인이 완료되었습니다</v-alert>
        <v-alert v-else class="mt-2" type="error" :value="isLoginError">이메일과 비밀번호를 확인해주세요!</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
  }
};
</script>

<style>
.login-field {
  width: 300px;
}

.login_btn p,
.login_title {
  color: #ffffff;
  font-weight: bold;
}
</style>