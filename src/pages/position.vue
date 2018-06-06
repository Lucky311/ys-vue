<template>
    <div class="position-index" @touchmove.prevent >
      <nav class="show-nav">
        <div class="head">
          <a href="javascript:;" class="back" @click="changeDisplay">x</a>
          <div class="text">选择收货地址</div>
          <a href="javascript:;" class="next">新增地址</a>
        </div>
        <div class="search-more">
          <div class="searchbar has-perfix">
            <i class="icon-searchpage"></i>
             <input type="text" placeholder="请输入收货地址" readonly="readonly">
          </div>
          <span>
            <em class="first-render">北京</em>
            <i class="icon-moregpshome"></i>
          </span>
        </div>
      </nav>
     <article>
      <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif">
      <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif">
      <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif">
      
     </article>
     <!--<article class="">
      <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif">
      <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif">
      <img src="https://imgjd7.fruitday.com/images/2018-01-22/2c15f7f76f8b2bb8249947051e1772b3.gif">
      
     </article>-->
    </div>
</template>
<script>
    export default{
      name:'position-index',

      data(){
        return({

        })
      },
      methods:{
        changeDisplay(){
          this.$emit('change-show',false)
        }
      }
    }
</script>
<style scoped>
  .position-index{
    display: flex; 
    flex-direction: column;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index: 1;
    background: #f5f5f5;
  }
  .show-nav{
    display: block;
    width: 100%;
    height: auto;
    background-color: #fff;
    color: #65a032;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: .01rem solid #d8d8d8;
  }
  .head{
    display: flex;
    line-height: .46rem;
  }
  .head a{
    color: #65a032;
  }
  .back{
    margin-left: .08rem;
    width: .88rem;
    font-size: .3rem;
  }
  .text{
    text-align: center;
    flex: 1;
    font-size: .17rem;
  }
  .next{
    width: .8rem;
    margin-right: .08rem;
    text-align: right;
    display: inline-block;
  }
  /*搜索*/
  .search-more{
    border-radius: .04rem .04rem .04rem .04rem;
    background-color: #fff;
    padding: 0 .1rem .1rem;
    position: relative;
    box-sizing: border-box;
    height:.33rem;
    margin-bottom: .06rem;

  }
  .has-perfix {
    padding-left: .8rem;
  }
  .searchbar {
    box-sizing: border-box;
    position: relative;
    background-color: #eee;
    border-radius: .05rem;
    color: #878787;
    font-size: .14rem;
  }
  .searchbar input{
    border: none;
    background-color: #eee;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    padding: 0 .3rem 0 .06rem;
    height: .32rem;
  }
  em{
    margin-left: .03rem;
    display: block;
    width: 82%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span{
    color: #3a3a3a;
    font-size: .16rem;
    text-align: center;
    height: .33rem;
    line-height: .33rem;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: .8rem;
    border-right: .01rem solid #dcdcdc;
  }
  article{
    background: #fff;
    margin-top: .89rem;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
  }
  article img{
    padding-top: 1rem;
    width: 100%
  }

</style>
