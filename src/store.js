import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
    //只有mutations中定义的函数，才有权力修改state的数据
  },
  getters:{
    showNum:state=>{
      return '当前的count值为 【' + state.count + '】' 
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    sub(state) {
      state.count--
    },
    addN(state, step) {
      state.count += step
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        //在actions中不能直接修改state中的数据
        //必须通过context.commit()触发某个mutaitions才行
        context.commit('add')
      }, 1000);
    },
    addnAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000);
    },
    subAsync(context){
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
    subNAsync(context,step){
      setTimeout(()=>{
        context.commit('subN',step)
      },1000)
    }
  }

})
