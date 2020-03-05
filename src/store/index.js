import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllUser: [
      { email: "woong@naver.com", password: "1234", name: "웅" },
      { email: "woong1@naver.com", password: "1234", name: "재웅" }
    ],
    isLogin: false,
    isLoginError: false,
    UserName: ""
  },
  //mutations : 스테이트값을 변화시키는 로직
  mutations: {
    // 로그인 성공시 ,
    loginSuccess(state) {
      state.isLogin = true;
    },
    // 로그인 실패시
    isLoginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
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
      selectedUser === null
        ? commit("isLoginError")
        : selectedUser.password !== loginObj.password
        ? commit("isLoginError")
        : commit("loginSuccess");
      state.UserName = selectedUser.name;
      //그 유저의 비밀번호와 입력된 비밀번호를 비교한다
    }
  },
  modules: {}
});
