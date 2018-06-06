<template>
  <div>
    <div class="header">
      <ul>
        <li>
          <img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png">
        </li>
        <li @click="positionShow=true">大钟寺</li>
        <li>搜索</li>
      </ul>
    </div>
    <!--首页定位页面-->
    <div v-show="positionShow" >
      <position-index @change-show="changeShow"></position-index>
    </div>

  </div>

</template>
<script>
    export default{
      data(){
        return(
          {
            positionShow:false
        })
      },
      methods:{
        changeShow(val){
          this.positionShow =val
        }
      }

    }
</script>
<style scoped>
  .header{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    min-height: .37rem;
    height: auto;
    line-height: .36rem;
    box-shadow: 0 0.03rem 0.03rem 0 rgba(0,0,0,.2)
  }
  .header li{
    float: left;

  }
  .header li:first-child{
    margin-left: .16rem;
  }
  .header li:first-child img{
    width: .51rem;
    height: .14rem;
    margin-right: .05rem;
  }
.header li:nth-child(2){
    position:relative;
    line-height: .38rem;
    width: auto;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #65a032;
    padding-right:.16rem;
}
.header li:nth-child(2):after{
  content:"";
  position:absolute;
  top:.16rem;
  right:0;
  border:6px solid #65a032;
  border-color:#65a032 transparent transparent transparent;
}
.header li:nth-child(3){
  line-height: .38rem;
  float:right;
  padding-right:.16rem;
}

</style>
