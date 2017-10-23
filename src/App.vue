<template>
  <el-container class="h100">
    <el-header>
      <v-header></v-header>
    </el-header>
    <vAside></vAside>
  </el-container>
</template>

<script>
import vHeader from '@/components/vHeader.vue'
import vAside from '@/components/vAside.vue'
export default {
  name: 'app',
  components: {
    vHeader,
    vAside
  }
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
}
.h100 {
  height: 100%;
}
</style>
