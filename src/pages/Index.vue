<template>
  <div class="container">
    <div class="header">
      <router-link to="/search" class="search">
        <i class="fa fa-search"></i>输入搜索内容
      </router-link>
      <router-link to="/user" class="user">
        <i class="fa fa-user-o"></i>
      </router-link>
    </div>
    <!-- banner图 -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image:url(/images/image.png)"></div>
          <div class="swiper-slide" style="background-image:url(/images/image.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(/images/image.png)"></div>
          <div class="swiper-slide" style="background-image:url(/images/image.jpg)"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </div>
    <div class="list">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="background-image:url(/images/image.png)"></div>
          <div class="swiper-slide" style="background-image:url(/images/image.jpg)"></div>
          <div class="swiper-slide" style="background-image:url(/images/image.png)"></div>
          <div class="swiper-slide" style="background-image:url(/images/image.jpg)"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="course">
      <div>
        <h3>今天公开课</h3>
        <h4>Today's public class</h4>
      </div>
      <router-link to="/search"><span>查看更多</span><i class="fa fa-caret-right"></i></router-link>
    </div>
    <div>12</div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: { delay: 1500, disableOnInteraction: false },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    new Swiper(".swiper-container2", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  .search {
    display: block;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 5.76rem;
    text-indent: 0.2rem;
    color: gray;
    background: whitesmoke;
    border-radius: 0.1rem;
    i {
      margin-right: 0.2rem;
    }
  }
  .user {
    i {
      font-size: 0.4rem;
    }
  }
}
.banner {
  height: 5.47rem;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .swiper-pagination {
    text-align: right;
    position: absolute;
    top: 3rem;
  }
}
.list{
  height: 3.5rem;
  width: 6.66rem;
  background: white;
  margin: 0 auto;
  position: relative;
  top: -2rem;
  z-index: 100;
  overflow: hidden;
  .swiper-container2 {
    width: 100%;
    height: 2.9rem;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
.course{
  position: relative;
  top: -1rem;
  display: flex;
  height: .8rem;
  border-left: .1rem solid red;
  justify-content: space-between;
  width: 6.66rem;
  margin:0 auto;
  align-items: center;
  div{
    margin-left: .2rem;
    h4{
      color: #afafaf;
      font-size: .24rem;
    }
  }
  a{
    color: #afafaf;
    font-size: .28rem;
  }
}
</style>
