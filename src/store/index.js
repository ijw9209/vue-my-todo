import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    AllUser: [
      { email: "woong@naver.com", password: "1234", name: "웅" },
      { email: "woong1@naver.com", password: "1234", name: "재웅" }
    ],
    isLogin: false,
    isLoginError: false
  },
  //mutations : 스테이트값을 변화시키는 로직
  mutations: {
    // 로그인 성공시 ,
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    // 로그인 실패시
    isLoginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  //actions :  비즈니스 로직
  // actions 에서 mutations 내에있는
  // 함수를 실행시키기위해서는 commit이라는 명령어가 필요함
  actions: {
    //로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;

      //전체 유저에서 해당 이메일로 유저를 찾는다
      state.AllUser.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user;
      });
      if (
        selectedUser === null ||
        selectedUser.password !== loginObj.password
      ) {
        commit("isLoginError");
      } else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "mypage" });
      }
      //그 유저의 비밀번호와 입력된 비밀번호를 비교한다
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    }
  },
  modules: {}
});
