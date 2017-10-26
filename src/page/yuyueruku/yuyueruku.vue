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
        console.log(111111);
      this.num = new Date().getTime();
    }
  }
</script>
