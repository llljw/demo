<template>
  <div id="app">
    <!--头部导航栏-->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      background="#3FBA82"
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch" style="color:white">搜索</div>
    </van-search>

    <!--从缓存加载-->
    <keep-alive>
      <router-view/>

    </keep-alive>

    <!--底部导航栏-->
    <van-tabbar
      route
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/login" icon="contact">登录</van-tabbar-item>
      <van-tabbar-item v-if="show" replace to="/myCenter" icon="contact">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import store from '@/store';

  export default {
    name: 'app',
    store,
    data() {
      return {
        show: false,
        value: '',
        active: 0,
        users: store.state.users,
      };
    },
    methods: {
      onSearch() {
      },
      // 使用activated判断用户是否登录，登陆的话将show值设置为true
      getMySelf() {
        if (store.state.users === '') {
          console.log("进来了");
          this.show = true;
        }
      }
    },
    activated() {
      this.getMySelf();
    },
  };
</script>

<style lang="scss">
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
  }
</style>
