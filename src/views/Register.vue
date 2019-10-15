<template>
  <div class="register">
    <van-nav-bar
      title="用户注册"
      left-text="返回"
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
        @blur="unBlur"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-field
        v-model="password2"
        type="password2"
        label="确定密码"
        placeholder="请再次输入密码"
        required
      />
      <van-field
        v-model="email"
        type="email"
        label="邮箱"
        placeholder="请输入邮箱"
        autosize
      />
      <van-field
        v-model="phone"
        type="phone"
        label="电话"
        placeholder="请输入电话"
        autosize
      />
      <van-field
        v-model="question"
        label="密保问题"
        type="question"
        placeholder="请设置问题"
        autosize
        required
      />
      <van-field
        v-model="answer"
        type="answer"
        label="密保答案"
        placeholder="请设置答案"
        autosize
        required
      />
    </van-cell-group>
    <!--:disabled="bol"-->
    <van-button
      round
      type="primary"
      size="large"
      @click="zc"
      color="linear-gradient(to right, white, #42B983,#31BC7C)">
      注册
    </van-button>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';

export default {
  name: 'register',
  store,
  data() {
    return {
      bol: true,
      username: '',
      password: '',
      password2: '',
      email: '',
      phone: '',
      question: '',
      answer: '',
      // disabled:
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: '/login',
      });
    },
    onClickRight() {
    },
    zc() {
      const this_ = this;

      // 封装前端传给后端的数据
      const params = new URLSearchParams();
      params.append('username', this.username);
      params.append('password', this.password);
      params.append('email', this.email);
      params.append('phone', this.phone);
      params.append('question', this.question);
      params.append('answer', this.answer);
      // 执行请求获取后端数据
      axios.post('/portal/user/register.do', params)
        .then((datas) => {
          // 获取状态码
          const { status } = datas.data;
          if (status !== 0) {
            // 弹出错误信息
            this_.$dialog.alert({
              message: datas.data.msg,
            });
          } else {
            // 弹出成功信息
            this_.$dialog.alert({
              message: datas.data.msg,
            });

            // 注册成功跳转到登录页
            this_.$router.push({
              path: '/login',
            });
          }
        });
    },

    unBlur() {
      // 当用户输入用户名之后，鼠标焦点移开
      // 1.判断当前注册的用户名是否存在
      // 2.如果用户名存在就对用户进行提示

      // 保存当前对象
      const this_ = this;

      // 封装前端传给后端的数据
      const params = new URLSearchParams();
      params.append('str', this.username);
      params.append('type', 'username');

      // 执行请求获取后端数据
      axios.post('/portal/user/check_valid.do', params)
        .then((datas) => {
          // 获取状态码
          const { status } = datas.data;
          if (status !== 0) {
            // 弹出错误信息
            this_.$dialog.alert({
              message: datas.data.msg,
            });
            // 这里可以使用刷新方式清空数据
          } else {
            this_.datauser = datas.data.data;
            // 注册成功跳转到登录页

            this_.$dialog.alert({
              message: '用户名可以使用',
            });
          }
        });
      // 3.判断两次密码是否相同
      // 4.密保问题和密保答案不能为空
    },

  },


};


</script>

<style scoped>

</style>
