import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    //이미 로그인 된 유저니까 로그인페이지를막아야함

    //next() 요 안에 보내줄곳을지정
    next("/");
  } else {
    //path를 입력안하면 입장허용
    next();
  }
};

//로그인 안할시 마이페이지 접근 못하게
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    //아직 로그인안된유저니 로그인페이지막아야함
    alert("로그인이 필요합니다.");
    //요 안에 보내줄곳을지정할수있음
    next("/");
  } else {
    //path를 입력안하면 입장허용
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: rejectAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/mytodo",
    name: "mytodo",
    beforeEnter: onlyAuthUser,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "mytodo" */ "../views/MyTodo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
