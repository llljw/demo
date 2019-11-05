<template>
  <div>
    <!--导航栏-->
    <van-nav-bar
      title="用户中心"
      left-text="返回"
      right-text="···"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />


    <!--右边弹出-->
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '20%' ,height:'87%'}"
      round
    >
      aaaaaaaaaaaaa
    </van-popup>

    <img class="user-poster" src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g81asmi5txj30bz075n17.jpg">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"/>
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records"/>
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend"/>
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics"/>
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link/>
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link/>
      <van-cell icon="gift-o" title="我收到的礼物" is-link/>
      <van-cell icon="close" title="退出登录" is-link @click="logout"/>
    </van-cell-group>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'MyCenter',
    data() {
      return {
        show: false
      };
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);// 返回上一级
      },
      onClickRight() {
        this.show = true;
      },
      logout() {
        const this_ = this;
        axios.post('/portal/user/logout.do')
          .then(function (datas) {
            console.log(datas);
            //获取状态码
            var status = datas.data.status;
            if (status === 0) {
              //弹出信息
              this_.$dialog.alert({
                message: '退出登录成功'
              });
              this_.$router.push({
                path: '/login'
              });
              // 个人中心和登录互相转换
              this_.$store.commit('setshow');
            }
          });
      }
    }
  };
</script>

<style lang="less">

  .user {
    &-poster {
      width: 100%;
      height: 30vw;
      display: block;
    }
    &-group {
      margin-bottom: 15px;
    }
    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
