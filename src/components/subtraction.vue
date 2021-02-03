<template>
 <div>
      <button @click="sub">-1</button>
      <button @click="subN(3)">-N</button>
      <button @click="subAsync">-1 Async</button>
      <button @click="subNAsync(5)">-N Async</button>
  <!-- <h1>当前count的值为:{{count}}</h1> -->
  <h3>{{showNum}}</h3>
 </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{}
  },
  methods:{
    ...mapMutations(['sub','subN']),
        //第二种调用mutaitions的方法
    ...mapActions(['subAsync','subNAsync']),
    //actions第二种使用方式

  },
  computed:{
    ...mapState(['count']),
    //第二种引用state的方法
    ...mapGetters(['showNum'])
    //第二种使用getter的方法
  }
}
</script>

<style>

</style>