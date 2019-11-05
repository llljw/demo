<template>
  <div id="app">
    <!--头部搜索栏-->
    <van-sticky :offset-top="0">
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
    </van-sticky>


    <!--从缓存加载-->
    <keep-alive>
      <router-view/>

    </keep-alive>

    <!--底部导航栏-->
    <van-tabbar
      id="dd"
      route
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item v-if="sh" replace to="/myCenter" icon="contact">个人中心</van-tabbar-item>
      <van-tabbar-item v-else replace to="/login" icon="contact">登录</van-tabbar-item>
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
        value: '',
        active: 0,
      };
    },
    computed: {
      sh() {
        return store.state.show;
      }
    },
    methods: {
      onSearch() {
      }
    },

  };
</script>

<style lang="scss">
</style>
