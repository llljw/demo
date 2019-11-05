<template>
  <div class="goods">
    <!--头部导航栏-->
    <top-back :content="title"></top-back>

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(srchost,index) in product.subImages" :key="index">
        <img :src="srchost">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{product.name}}</div>
        <div class="goods-price">¥{{ product.price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：免运费</van-col>
        <van-col span="14">剩余：{{ product.stock }}</van-col>
      </van-cell>
      <van-cell title="参数" is-link @click="parameter"/>

    </van-cell-group>

    <van-action-sheet
      v-model="show"
      title="参数">
      <p>品牌：红富士</p>
      <p>价格：0-50元</p>
      <p>产地：中国大陆</p>
      <p>保质期：15天</p>
      <p>存储方法：冷藏</p>
      <van-button round type="primary" size="large" @click="confirm"
                  color="linear-gradient(to right, white, #42B983,#31BC7C)">
        完成
      </van-button>
    </van-action-sheet>

    <!--商品详情展示-->
    <van-divider>详细信息</van-divider>


    <div>
      <van-image
        class="ju"
        width="100%"
        src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g81co80yzkj30ku0godih.jpg"
      />
      <van-image
        class="ju"
        width="100%"
        src="https://wx1.sinaimg.cn/mw690/005Eg1gZly1g81cnq8hm3j30ku0gogpu.jpg"
      />
      <van-image
        width="100%"
        src="https://wx1.sinaimg.cn/mw690/005Eg1gZly1g81cnrbl4xj30ku0gowjx.jpg"
      />
      <van-image
        width="100%"
        src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g81cnqz41rj30ku0go78o.jpg"
      />
      <van-image
        width="100%"
        src="https://wx2.sinaimg.cn/mw690/005Eg1gZly1g81cnqzgj2j30ku0go78c.jpg"
      />
      <van-image
        width="100%"
        src="https://wx1.sinaimg.cn/mw690/005Eg1gZly1g81cnq5m9mj30ku0gon04.jpg"
      />
      <van-image
        width="100%"
        src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g81cnpsp7hj30ku0gogoj.jpg"
      />
      <van-image
        width="100%"
        src="https://wx2.sinaimg.cn/mw690/005Eg1gZly1g81co7s6rsj30ku0go0v4.jpg"
      />
      <van-image
        width="100%"
        src="https://wx4.sinaimg.cn/mw690/005Eg1gZly1g81cnr7321j30ku0gogoh.jpg"
      />
      <van-image
        width="100%"
        src="https://wx4.sinaimg.cn/mw690/005Eg1gZly1g81co8fwmdj30ku0gon0n.jpg"
      />
      <van-image
        width="100%"
        src="https://wx2.sinaimg.cn/mw690/005Eg1gZly1g81cnqi0ouj30ku0g6goc.jpg"
      />
      <van-image
        width="100%"
        src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g81co86xgjj30ku0gowiy.jpg"
      />
      <van-image
        width="100%"
        src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g81cnpsn13j30ku09cgnj.jpg"
      />
    </div>

    <br/>
    <br/>
    <!--商品导航-->
    <van-goods-action id="vga">
      <van-goods-action-icon icon="chat-o" @click="service">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="toCart" :info="num">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="onClickCart">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="onClickBuy" color="linear-gradient(to right,#42B983,#31BC7C)">
        立即购买
      </van-goods-action-button>
    </van-goods-action>


  </div>
</template>

<script>
  import axios from 'axios';
  import TopBack from '@/components/TopBack.vue';

  export default {
    name: 'ProductDetal',
    components: { TopBack },
    data() {
      return {
        show: false,
        title: '商品详情',
        product: '',
        num: 0
      };
    },
    methods: {
      // 参数
      parameter() {
        this.show = true;
      },
      // 返回商品详情页
      confirm() {
        this.show = false;
      },
      getProductsDetial() {
        // 保存当前对象
        const this_ = this;

        // 封装前端传递给后端的数据
        const params = new URLSearchParams();
        params.append('productId', 10000);

        axios.post('/portal/product/detail.do', params)
          .then((datas) => {
            // console.log(datas);
            // 获取状态码
            const { status } = datas.data;

            if (status !== 0) {
              this_.$dialog.alert({
                message: datas.data.msg,
              });
            } else {
              this_.product = datas.data.data;
            }
          });
      },
      // 获取购物车中商品数量
      getCartNum() {
        // 保存当前对象
        const this_ = this;

        axios.post('/portal/cart/get_cart_product_count.do')
          .then((datas) => {
            // console.log(datas);
            // 获取状态码
            const { status } = datas.data;
            // 成功后重新赋值
            if (status === 0) {
              this_.num = datas.data.data;
            }
          });
      },
      // 进入购物车页面
      toCart() {
        this.$router.push('cart');
      },
      // 加入购物车
      onClickCart() {
        this.$router.push('cart');
        this.$toast.success('加入成功~');
      },
      // 立即购买，跳转到购物车页面
      onClickBuy() {

      },
      service() {
        this.$dialog.alert({
          message: '有问题请拨打4000100',
        });
      },
    },
    // 组建加载就执行的方法
    activated() {
      this.getProductsDetial();
      this.getCartNum();
    },
  };
</script>

<style lang="less">
  #vga {
    bottom: 50px !important;
  }
  .van-image{
    display: block !important;
  }

  .goods {
    padding-bottom: 50px;
    &-swipe {
      img {
        width: 100%;
        display: block;
      }
    }
    &-title {
      font-size: 16px;
    }
    &-price {
      color: #f44;
    }
    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    &-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    &-tag {
      margin-left: 5px;
    }
  }

  .ju {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
  }
</style>

<!--
thumb: [
'https://wx2.sinaimg.cn/mw690/005Eg1gZly1g7uaa15k88j30dw0b4abf.jpg',
'https://wx2.sinaimg.cn/mw690/005Eg1gZly1g7uaa216fqj30dw0b4k74.jpg'
]-->
