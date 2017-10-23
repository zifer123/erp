<template>
  <div class="box">
    <div class="logo">
      深圳市时运来公司
    </div>
    <el-menu
      class="item"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>

</script>

<style>
  .box {
    display: flex;
    flex-direction: row;
  }
  .logo {
    width: 200px;
    line-height: 60px;
    background: #545C64;
    text-align: center;
    color: #fff;
    font-family: 微软雅黑;
  }
  .item {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
</style>
