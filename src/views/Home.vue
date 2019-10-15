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
    <van-row id="tjshop">
      <van-col span="12">
        <van-panel>
          <van-image
            width="100"
            height="100"
            src="https://img13.360buyimg.com/n1/jfs/t1/79135/30/10401/167299/5d7f38b2E301b146a/5b321fe74a5446be.jpg"
            @click="productdetail"
          />
          <p>商品名称：{{productList.name}}</p>
          <p>商品价格：{{productList.price}}</p>
        </van-panel>
      </van-col>
      <van-col span="12">
        <van-panel>
          <van-image
            width="100"
            height="100"
            src="https://img13.360buyimg.com/n1/jfs/t1/79135/30/10401/167299/5d7f38b2E301b146a/5b321fe74a5446be.jpg"
          />
          <p>商品名称：{{productList.name}}</p>
          <p>商品价格：{{productList.price}}</p>
        </van-panel>
      </van-col>
    </van-row>


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
      productList: '',
    };
  },
  methods: {
    getProducts() {
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
            this_.productList = datas.data.data;
          }
        });
    },
    productdetail(){
      this.$router.push({
        path: '/productDetail',
      });
    }
  },
  activated() {
    this.getProducts();
  },
};
</script>

<style scoped>
  #tjshop {
    text-align: center;
  }

</style>
