<template>
  <div class="amendPwd">
    <!--头部导航栏-->
    <top-back :content="title"></top-back>

    <van-cell-group>

      <van-field
        v-model="username"
        type="username"
        label="用户名"
        placeholder="请输入用户名"
        required
      />
      <van-field
        v-model="passwordNew"
        type="password"
        label="新密码"
        placeholder="请输入新密码"
        required
      />

    </van-cell-group>
    <van-button round type="primary" size="large" @click="gg" color="linear-gradient(to right, white, #42B983,#31BC7C)">
      确认更改
    </van-button>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';
import TopBack from '@/components/TopBack.vue';

export default {
  name: 'amendPwd',
  components: { TopBack },
  store,
  data() {
    return {
      title: '修改密码',
      username: '',
      passwordNew: '',
      forgetToken: store.state.token,
    };
  },
  methods: {
    gg() {
      // 保存当前对象
      const this_ = this;

      // 封装前端传递给后端的数据
      const params = new URLSearchParams();

      params.append('username', this.username);
      params.append('passwordNew', this.passwordNew);
      params.append('forgetToken', this.forgetToken);

      // 执行请求
      axios.post('/portal/user/forget_reset_password.do', params)
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
            this_.$dialog.alert({
              message: datas.data.msg,
            });
            this_.$router.push({
              path: '/login',
            });
          }
        });
    },
  },
};
</script>

<style scoped>

</style>
