<template>
  <div id="info">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="dd"/>
      </van-swipe-item>
    </van-swipe>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服"/>
      <van-goods-action-icon icon="cart-o" text="购物车" :info="num"/>
      <van-goods-action-icon icon="shop-o" text="店铺" info="12"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="add"/>
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>

</template>

<script>
export default {
  name: 'info',
  data() {
    return {
      num: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>

<style scoped>
  .dd {
    height: 100%;
    width: 100%;
  }
</style>
