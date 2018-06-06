<template>
  <div class="home" v-if="brand[0]">
    <header-index></header-index>
    <!--内容组件-->
    <section class="content">
      <!--首页轮播图-->
      <div class="swipe-wrapper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="ele in pics" :key="ele.banner_seq_id">
            <img :src="ele.image" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
       <div class="advantage">
        <!-- <img :src="brand[0].image"> -->
        <ul class="sort">
          <li v-for="ele in sortIndex" :key="ele.banner_seq_id">
            <img :src="ele.image" alt="">
          </li>
        </ul>
        <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif" title="" style="height: 160px;">
      </div>
      <div class="floor1">
        <div class="item1">
          <img :src="item1[0].image" alt="">
        </div>
        <div id="item-0-7">
          <div class="section recommends  "> 
            <div class="list recommends-list"> 
               <a class="item " href=""> 
                  <div class="img-box"> 
                    <img :src="product1[0].image"> 
                  </div>
                  <div class="desc"> 
                      <h5>{{product1[0].title}}</h5>
                      <p>{{product1[0].subtitle}}</p>  
                      <div class="price"> 
                        <span class="money">￥{{product1[0].guide_price}} / <em>{{product1[0].volume}}</em></span>
                        <i class="icon-searchplus">+</i>
                      </div> 
                  </div> 
                </a>  
            </div> 
          </div>
        </div>
        <div class="item-0-8">
          <ul class="product1">
            <li v-for="(ele,index) in product1" :key="index">
              <img :src="ele.image"/>
            </li>  
          </ul>
        </div>
      </div>
    </section>
    <footer-common></footer-common>
  </div>
</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  export default{
    name:'home',
    computed:{
      ...mapGetters([
        'pics','brand','sortIndex','item1','product1'
      ])
    },
    methods:{
      ...mapActions([
        'getBannerData'
      ])
      
    },
    mounted(){
      this.getBannerData()
    //   console.log(this.$router)
    }
  }
</script>
<style scoped>
  .content{
    padding-top: 43px;
    padding-bottom: .45rem;
  }
  .swipe-wrapper{
    height:160px;
  }
  .swipe-wrapper img{
    width: 100%;
    display: block;
  }
  /*advantage*/
  .advantage{
    width: 100%;
    background: #fff;
  }
  .advantage img{
    height: 0.36rem;
    width: 100%;
  }
  /*sort*/
  .sort{
     background: #fff;
    padding-bottom: .2rem;
    padding: 0 .075rem;
    overflow: hidden;
    margin-bottom: .2rem
    
  }
  .sort li{
    float: left;
    box-sizing: border-box;
    padding: .1rem .025rem 0;
    width:50%;
    height:0.86rem
  }
  .sort li img{
    height:0.86rem
  }
  .floor1{
    margin-top: .1rem;
    margin-bottom: .1rem;
  }
  .item1 img{
    width:100%;
  }

 .recommends-list .item {
   display: block;
    position: relative;
    padding: .25rem .12rem 0 .25rem;
    height: 1.6rem;
    border-top: .005rem solid rgba(220,220,220,.2);
}
.recommends-list img {
    width: 1.2rem;
    height: 1.2rem;
    display: block;
}
#item-0-7{
  background:#fff;
  overflow: hidden;
}
.recommends-list .desc {
    /*position: relative;*/
    padding-left: .25rem;
    float: left;
}

.section .list .desc h5,.section .list .desc p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.recommends-list .desc h5 {
    font-size: .17rem;
    margin-bottom: .05rem;
}
.section .list .desc h5,.section .list .desc p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.recommends-list .desc p {
    color: #878787;
    margin-bottom: .37rem;
}
.section .money {
    display: block;
    color: #ff8000;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.recommends-list span {
    font-size: .16rem;
}
.price{
  position: relative;
}
.section .icon-searchplus {
    position: absolute;
    top: .03rem;
    right: 0;
    width: .74rem;
    height: .4rem;
    text-align: right;
    line-height: .35rem;
    display: inline-block;
    text-align: center;
    font-size: .14rem;
    color: #ff8000;
    background-color: #fff;
    width: .17rem;
    height: .17rem;
    line-height: .17rem;
    border: .01rem solid #bfbfbf;
    border-radius: 50% 50% 50% 50%;
}
.img-box{
  float: left;
}
/*product1*/
.item-0-8{
  width:100%;
  overflow-x: auto;
}
.product1{
  white-space:nowrap;
  width:16rem;
  
}
.product1 li{
  float: left;
}
.product1 li img{
  width:0.96rem;
  height:0.96rem;
  }
</style>
