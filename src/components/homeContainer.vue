<template>
  <div>
    <!-- 轮播图 -->
    <Carousel autoplay v-model="value2">
      <Carousel-item v-for="item in dataList" :key="item.url">
        <div class="demo-carousel">
          <img :src="item.img" alt>
        </div>
      </Carousel-item>
    </Carousel>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../img/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../img/menu2.png" alt>

          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../img/menu3.png" alt>

          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../img/menu4.png" alt>

          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../img/menu5.png" alt>

          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../img/menu6.png" alt>

          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//导入vue-resource
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

//导入提示框
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      value2: 0,
      dataList: [] //用于存储获取到的数据
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(res => {
          console.log(res.body);
          if (res.body.status === 0) {
            //成功了
            this.dataList = res.body.message;
          } else {
            //失败了
            Toast("轮播图加载失败");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.ivu-carousel {
  height: 220px;
  img {
    width: 100%;
    height: 200px;
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img{
      width: 60px;
  }
  li {
    border: none;
    font-size: 13px;
  }
}
</style>
