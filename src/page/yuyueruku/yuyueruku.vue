<template>
  <div>
    <el-input v-model="num" placeholder="11111"></el-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1
      }
    },
    created() {
      this.num = new Date().getTime();
    },
    beforeRouteEnter(to,from,next) {
      /* 用到路由钩子，判断是否是刷新页面 */
      if(from.path == '/empty') {
        next(function(vm) {
          vm.num = '';
        });
      }else{
          next();
      }
    }
  }
</script>
