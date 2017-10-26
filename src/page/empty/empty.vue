<template>
  <div class="loading">
    <div class="loadingBg"></div>
    <p class="loadingText">重新加载中</p>
  </div>
</template>

<script>
  export default {
    activated() {
      console.log(11111111);
      let route = this.$route.query.go;
      setTimeout(function() {
        this.$router.push(route);
      }.bind(this),1500)
    }
  }
</script>

<style>
  .loadingBg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
    background: #000;
    z-index: 10;
    filter: blur(10px);
  }
  .loadingText {
    z-index: 11;
    position: absolute;
    left: 50%;
    top: 50%;
    color: #fff;
    font-size: 25px;
  }
</style>
