<template>
<div class="todo" id="todo">
    <ul class="list" id="list">
       <li class="item" v-for="(ele,index) in listData" :key="index">  
         <p v-text="ele"></p>
       </li>
    </ul>
    <div v-cloak>
      <p v-pre>{{text1}}</p>
      <p>{{text2}}</p>
    </div>
    <div>
      <button @click="show=!show">切换</button>
      <p v-if="show">{{text2}}</p>
      <p v-show="show">{{text2}}</p>
      <p>v-html: <span v-text="text2"></span></p>
    </div>
    <!--v-model -->
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
</div>
</template>

<script>
export default {
  name:'Directives',
  data () {
    return {
      show:true,
      message:'请输入',
      text1:"用 Vue 构建大型应用时推荐使用 NPM 安装",
      text2:"热重载、保存时静态检查以及可用于生产环境的构建配置的项",
      listData:["电脑","空调"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *  { margin: 0; padding: 0;}
    #todo { width: 500px; margin: 0 auto}
    .box { padding: 10px;}
    .list { padding: 10px;}
    .item { padding: 5px; border-bottom: 1px dashed #ccc; list-style: none}
    .text { width: 300px; height: 30px;}
    p { line-height: 2;}
    button { width: 80px; height: 30px;}

    [v-cloak] {display: none}
</style>
