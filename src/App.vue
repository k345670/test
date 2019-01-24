<template>
  <div id="app">
    <router-view/>
    <tabs-bar>
      <tab-item v-for="item in tabList" :key="item.id" :info=item><van-icon name="fire-o" /></tab-item>
    </tabs-bar>
  </div>
</template>

<script>
export default {
    data(){
      return{
        tabList:[
          {id:1,title:'首页',path:'/home',icon:'van-icon van-icon-wap-home'},
          {id:2,title:'动态',path:'/dynamic',icon:'van-icon van-icon-fire-o'},
          {id:3,title:'消息',path:'/infomation',icon:'van-icon van-icon-chat-o'},
          {id:4,title:'我的',path:'/mine',icon:'van-icon van-icon-manager-o'}
        ]
      }
    }
}
</script>

<style>

</style>
