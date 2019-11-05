<template>
  <div id="home">
    <!--<ul v-if="this.$route.query.da != null">-->
    <!--<li v-for="(val,index) in this.$route.query.da" :key="index">-->
    <!--<span v-if="val != null">-->
    <!--{{val}}-->
    <!--</span>-->
    <!--</li>-->
    <!--</ul>-->


    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"
             width="100%"
             height="100%"
        />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="4">
      <van-grid-item
        v-for="value in icons"
        :icon="value.image"
        :text="value.text"
      />
    </van-grid>

    <!--推荐商品-->
    <van-grid :border="false" :column-num="2">
      <van-grid-item @click="productdetail">
        <van-image src="https://img13.360buyimg.com/n1/jfs/t1/79135/30/10401/167299/5d7f38b2E301b146a/5b321fe74a5446be.jpg" />
        <p>{{product.name}}</p>
        <p>{{product.price}}￥</p>
        <p>{{product.subtitle}}</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://wx1.sinaimg.cn/mw690/005Eg1gZly1g82fkcmy00j30dg0csgo1.jpg" />
        <p>{{product2.name}}</p>
        <p>{{product2.price}}￥</p>
        <p>{{product2.subtitle}}</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://wx1.sinaimg.cn/mw690/005Eg1gZly1g82fiha4s8j30ec0czq5h.jpg" />
        <p>{{product3.name}}</p>
        <p>{{product3.price}}￥</p>
        <p>{{product3.subtitle}}</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://wx3.sinaimg.cn/mw690/005Eg1gZly1g82fbrjsn8j30at09y0vp.jpg" />
        <p>{{product4.name}}</p>
        <p>{{product4.price}}￥</p>
        <p>{{product4.subtitle}}</p>
      </van-grid-item>
    </van-grid>

    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
  import axios from 'axios';
  import store from '@/store';

  export default {
    name: 'home',
    data() {
      return {
        icons: [
          {
            text: '电器',
            image: 'https://wx1.sinaimg.cn/mw690/005Eg1gZly1g7sw8l9p1rj300w00w0j0.jpg',
          },
          {
            text: '食物',
            image: 'https://wx1.sinaimg.cn/thumb150/005Eg1gZly1g7sw8ladiwj301c01cmwx.jpg',
          },
          {
            text: '服饰',
            image: 'https://wx3.sinaimg.cn/mw690/005Eg1gZly1g7sw8ldez2j301c01cgld.jpg',
          },
          {
            text: '美妆',
            image: 'https://wx4.sinaimg.cn/mw690/005Eg1gZly1g7sw8la3xgj301c01c0si.jpg',
          },
        ],
        images: [
          'https://wx2.sinaimg.cn/mw690/005Eg1gZly1g7strcnsc5j30p00b4kij.jpg',
          'https://wx1.sinaimg.cn/mw690/005Eg1gZly1g7stravypej30p00b4e1o.jpg',
          'https://wx2.sinaimg.cn/mw690/005Eg1gZly1g7strbl9bsj30p00b416r.jpg',
        ],
        product: '',
        product2: '',
        product3: '',
        product4:''
      };
    },
    methods: {
      getProduct() {
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
      getProduct2() {
        // 保存当前对象
        const this_ = this;

        // 封装前端传递给后端的数据
        const params = new URLSearchParams();
        params.append('productId', 10008);

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
              this_.product2 = datas.data.data;
            }
          });
      },
      getProduct3() {
        // 保存当前对象
        const this_ = this;

        // 封装前端传递给后端的数据
        const params = new URLSearchParams();
        params.append('productId', 10003);

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
              this_.product3 = datas.data.data;
            }
          });
      },
      getProduct4() {
        // 保存当前对象
        const this_ = this;

        // 封装前端传递给后端的数据
        const params = new URLSearchParams();
        params.append('productId', 10007);

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
              this_.product4 = datas.data.data;
            }
          });
      },
      productdetail() {
        this.$router.push({
          path: '/productDetail',
        });
      }
    },
    activated() {
      this.getProduct();
      this.getProduct2();
      this.getProduct3();
      this.getProduct4();
    },
  };
</script>

<style scoped>

</style>
