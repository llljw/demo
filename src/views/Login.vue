<template>
  <div class="login">
    <!--导航栏-->
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入用户名')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>

    <van-button round type="primary" size="large" @click="tz" color="linear-gradient(to right, white, #42B983,#31BC7C)">
      登录
    </van-button>

    <div class="help">
      <p @click="wjmm">
        忘记密码
      </p>
    </div>

    <van-divider id="fgx">其他方式登录</van-divider>

    <div id="dlfs">
      <van-image
        round
        width="2rem"
        height="2rem"
        :src="QQ"
      />
      <div class="aa"></div>
      <van-image
        round
        width="2rem"
        height="2rem"
        :src="WeChat"
      />

    </div>


    <!--<ul>-->
    <!--<li v-for="(val,index) in datauser" :key="index">-->
    <!--{{val}}-->
    <!--</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import QQ from '@/assets/QQ.png';
import WeChat from '@/assets/WeChat.png';
import store from '@/store';

export default {
  name: 'login',
  store,
  data() {
    return {
      username: '',
      password: '',
      datauser: '',
      datamsg: '',
      QQ,
      WeChat,
    };
  },
  methods: {
    tz() {
      // 保存当前对象
      const this_ = this;

      // 封装前端传递给后端的数据
      const params = new URLSearchParams();
      params.append('username', this.username);
      params.append('password', this.password);

      // 执行请求获取后端数据
      axios.post('/portal/user/login.do', params)
        .then((datas) => {
          // 获取状态码
          const { status } = datas.data;
          if (status !== 0) {
            // 弹出错误信息
            this_.$dialog.alert({
              message: datas.data.msg,
            });
          } else {
            // 全局保存当前用户信息
            store.state.users = datas.data.data;
            // 获取后台数据
            this_.datauser = datas.data.data;
            // 登录成功跳转到首页
            this_.$router.push({
              path: '/',
            });
          }
        });
    },
    onClickLeft() {
      this.$router.push({
        path: '/',
      });
    },
    onClickRight() {
      this.$router.push({
        path: '/register',
      });
    },
    wjmm() {
      // 保存当前对象
      const this_ = this;

      // 封装前端传递给后端的数据
      const params = new URLSearchParams();
      params.append('username', this.username);

      // 执行请求获取后端数据
      axios.post('/portal/user/forget_get_question.do', params)
        .then((datas) => {
          // console.log(datas);
          // 获取状态码
          const { status } = datas.data;
          if (status !== 0) {
            // 弹出错误信息
            this_.$dialog.alert({
              message: datas.data.msg,
            });
          } else {
            // 全局保存当前登录用户找回密码问题
            store.state.msg = datas.data.msg;
            // 成功跳转到忘记密码页面
            this_.$router.push({
              path: '/forgetPwd',
            });
          }
        });
    },
  },
};
</script>
<style scoped>
  /*忘记密码*/
  .help {
    color: #9B9B9D;
    font-size: 13px;
    margin-top: 5px;
    text-align: center;
  }

  /*其它方式登录*/
  #fgx {
    margin-top: 100px;
  }

  #dlfs {
    display: flex;
    justify-content: center;
  }

  .aa {
    width: 30px;
    height: 30px;
  }


</style>
