<template>
  <el-container>
    <el-aside width="120px">
      <el-menu
        style="height: 100%;"
        unique-opened
        background-color="#545c64"
        text-color="#fff"
        :collapse="true"
        active-text-color="#ffd04b">
        <el-submenu :key="menu.id" v-for="menu in leftMenus" :index="menu.name">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ menu.name }}</span>
          </template>

          <el-menu-item v-for="item in menu.children" :key="item.id" :index="item.path" @click="addTab(item.name,item.path)">
            <i class="el-icon-menu"></i>{{ item.name }}
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
        activeNav: '/yuyueruku',
        menus: [
          {
            id: 1,
            name: '预约入库',
            children: [
              {
                id: 1,
                parentId: 1,
                path: '/yuyueruku',
                name: '预约入库单',
                meta: ['add','delete','query','edit']
              },
              {
                id: 2,
                parentId: 1,
                path: '/yuyuerukuList',
                name: '预约入库单查询',
                meta: ['add','delete','query','edit']
              }
            ]
          },
          {
            id: 2,
            name: '仓库入库',
            children: [
              {
                id: 3,
                parentId: 2,
                path: '/cangkuruku',
                name: '仓库入库单',
                meta: ['add','delete','query','edit']
              },
              {
                id: 4,
                parentId: 2,
                path: '/cangkurukuList',
                name: '仓库入库单查询',
                meta: ['add','delete','query','edit']
              }
            ]
          },
          {
            id: 3,
            name: '仓库上架',
            children: [
              {
                id: 5,
                parentId: 3,
                path: '/cangkushangjia',
                name: '仓库上架单',
                meta: ['add','delete','query','edit']
              },
              {
                id: 6,
                parentId: 3,
                path: '/cangkushangjiaList',
                name: '仓库上架单查询',
                meta: ['add','delete','query','edit']
              }
            ]
          },
          {
            id: 4,
            name: '预约出库',
            children: [
              {
                id: 7,
                parentId: 4,
                path: '/yuyuechuku',
                name: '预约出库单',
                meta: ['add','delete','query','edit']
              },
              {
                id: 8,
                parentId: 4,
                path: '/yuyuechukuList',
                name: '预约出库单查询',
                meta: ['add','delete','query','edit']
              }
            ]
          },
          {
            id: 5,
            name: '仓库出库',
            children: [
              {
                id: 9,
                parentId: 5,
                path: '/cangkuchuku',
                name: '仓库出库单',
                meta: ['add','delete','query','edit']
              },
              {
                id: 10,
                parentId: 5,
                path: '/cangkuchukuList',
                name: '仓库出库单查询',
                meta: ['add','delete','query','edit']
              },
              {
                id: 11,
                parentId: 5,
                path: '/teshuchuku',
                name: '特殊出库单',
                meta: ['add','delete','query','edit']
              },
              {
                id: 12,
                parentId: 5,
                path: '/teshuchukuList',
                name: '特殊出库单查询',
                meta: ['add','delete','query','edit']
              }
            ]
          },
          {
            id: 6,
            name: '仓库管理',
            children: [
              {
                id: 13,
                parentId: 6,
                path: '/cangkuguanli',
                name: '仓库库位管理',
                meta: ['add','delete','query','edit']
              },
              {
                id: 14,
                parentId: 6,
                path: '/pandian',
                name: '盘点',
                meta: ['add','delete','query','edit']
              },
              {
                id: 15,
                parentId: 6,
                path: '/pandianList',
                name: '盘点记录',
                meta: ['add','delete','query','edit']
              }
            ]
          },
          {
            id: 7,
            name: '报表',
            children: [
              {
                group: '入库报表',
                children: [
                  {
                    id: 16,
                    parentId: 7,
                    path: '/rukumingxi',
                    name: '入库明细表',
                    meta: ['add','delete','query','edit']
                  },
                  {
                    id: 17,
                    parentId: 7,
                    path: '/rukuhuizong',
                    name: '入库汇总表',
                    meta: ['add','delete','query','edit']
                  }
                ]
              },
              {
                group: '销售报表',
                children: [
                  {
                    id: 18,
                    parentId: 7,
                    path: '/xiaoshoumingxi',
                    name: '销售明细表',
                    meta: ['add','delete','query','edit']
                  },
                  {
                    id: 19,
                    parentId: 7,
                    path: '/xiaoshouhuizong',
                    name: '销售汇总表',
                    meta: ['add','delete','query','edit']
                  }
                ]
              },
              {
                group: '进销存报表',
                children: [
                  {
                    id: 20,
                    parentId: 7,
                    path: '/jinxiaocunmingxi',
                    name: '进销存明细表',
                    meta: ['add','delete','query','edit']
                  },
                  {
                    id: 21,
                    parentId: 7,
                    path: '/jinxiaocunhuizong',
                    name: '进销存汇总表',
                    meta: ['add','delete','query','edit']
                  }
                ]
              }
            ]
          }
        ],
        allTabs: [

        ],
        activeTab: '/index'
      }
    },
    computed: {
      leftMenus() {
        return this.menus.filter(function(item) {
          return item.name!='报表'&&item.name!='设置';
        });
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
      addTab(title,href) {
        /* 判断是否存在这个路由 */
        for(let i=0;i<this.allTabs.length;i++) {
            if(this.allTabs[i].href==href) {
                this.activeTab = href;
                this.$router.push(href);
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
  .el-aside {
    overflow: visible;
  }
  .el-main {
    padding: 0;
  }
  .el-tabs--border-card>.el-tabs__content {
     padding: 0px;
  }
  .el-menu--collapse {
    width: 120px;
  }
  .el-menu--collapse>.el-menu-item span, .el-menu--collapse>.el-submenu>.el-submenu__title span {
    height: inherit;
    width: inherit;
    overflow: visible;
    visibility: visible;
    display: inline-block;
  }
</style>
