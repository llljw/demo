<template>
  <div class="forgetPwd">
    <van-nav-bar
      title="忘记密码"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />


    <van-cell-group>
      <div class="mb">
        <van-cell value=""> 密保问题 ： {{msg}}</van-cell>
      </div>

      <van-field
        v-model="username"
        type="username"
        label="用户名"
        placeholder="请输入用户名"
        required
      />
      <van-field
        v-model="answer"
        type="answer"
        label="答案"
        placeholder="请输入答案"
        required
      />

    </van-cell-group>
    <van-button round type="primary" size="large" @click="tj" color="linear-gradient(to right, white, #42B983,#31BC7C)">
      提交
    </van-button>
  </div>


</template>

<script>
import axios from 'axios';
import store from '@/store';

export default {
  name: 'forgetPwd',
  store,
  data() {
    return {
      username: '',
      answer: '',
      question: '',
      users: store.state.users,
      msg: store.state.msg,
      token: '',
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
    tj() {
      // 保存当前对象
      const this_ = this;

      // 封装前端传递给后端的数据
      const params = new URLSearchParams();

      params.append('question', this.msg);
      params.append('username', this.username);
      params.append('answer', this.answer);

      // 执行请求
      axios.post('/portal/user/forget_check_answer.do', params)
        .then((datas) => {
          // 获取状态码
          const { status } = datas.data;
          if (status !== 0) {
            // 弹出错误信息
            this_.$dialog.alert({
              message: datas.data.msg,
            });
          } else {
            // console.log(datas);
            store.state.token = datas.data.msg;
            // 成功跳转到修改密码页面
            this_.$router.push({
              path: '/amendPwd',
            });
          }
        });
    },
  },
};
</script>

<style scoped>
  .mb {
    margin-left: 10px;
  }


</style>
