<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        style="height: 100%;"
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>预约入库</span>
          </template>
          <el-menu-item index="appointment" @click="test('预约入库单','/appointment')">
            <i class="el-icon-menu"></i>预约入库单
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>预约入库单查询
          </el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>仓库入库</span>
          </template>
          <el-menu-item index="appointment">
            <i class="el-icon-menu"></i>操作
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>查询
          </el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>仓库上架</span>
          </template>
          <el-menu-item index="appointment">
            <i class="el-icon-menu"></i>操作
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>查询
          </el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>预约出库</span>
          </template>
          <el-menu-item index="appointment">
            <i class="el-icon-menu"></i>操作
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>查询
          </el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>仓库出库</span>
          </template>
          <el-menu-item index="appointment">
            <i class="el-icon-menu"></i>操作
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>查询
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>特殊
          </el-menu-item>
        </el-submenu>

        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>仓库管理</span>
          </template>
          <el-menu-item index="appointment">
            <i class="el-icon-menu"></i>操作
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>盘点
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-menu"></i>盘点记录
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <el-tabs type="card" v-model="activeTab" closable @tab-click="tabClick" @tab-remove="removeTab">
        <el-tab-pane key="/index" label="首页" name="/index">
        </el-tab-pane>
        <el-tab-pane
          v-for="(item, index) in allTabs"
          :key="item.href"
          :label="item.title"
          :name="item.href"
          @click="tabClick"
        >
        </el-tab-pane>
      </el-tabs>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        allTabs: [

        ],
        activeTab: '/index'
      }
    },
    methods: {
      handleOpen(index) {
        console.log(index);
      },
      removeTab() {

      },
      tabClick(a) {
        let href = a.name;
        this.$router.push(href);
      },
      test(title,href) {
        /* 判断是否存在这个路由 */
        for(let i=0;i<this.allTabs.length;i++) {
            if(this.allTabs[i].href==href) {
                this.activeTab = href;
                return;
            }
        }
        this.allTabs.push({
          href: href,
          title: title
        });
        this.activeTab = href;
        this.$router.push(href);
      }
    }
  }
</script>

<style>
  .el-main {
    padding: 0;
  }
  .el-tabs--border-card>.el-tabs__content {
     padding: 0px;
  }
</style>
