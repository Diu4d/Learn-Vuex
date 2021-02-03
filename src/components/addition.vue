<template>
  <div>
      <button @click="add">+1</button>
      <button @click="addN">+n</button>
      <button @click="btncommit">+1 Async</button>
      <button @click="addNcommit">+n Async</button>
  <!-- <h1>当前count的值为:{{$store.state.count}}</h1> -->
  <h3>{{$store.getters.showNum}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    add(){
      this.$store.commit('add')
    },
    addN(){
      this.$store.commit('addN',3)
    },
    btncommit(){
      this.$store.dispatch('addAsync')
      //这里的displatch函数函数，专门用来触发action
    },
    addNcommit(){
      this.$store.dispatch('addnAsync',5)
    }
  }
}
</script>

<style>

</style>