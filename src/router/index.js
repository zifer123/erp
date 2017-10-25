import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index/Index.vue'
import yuyueruku from '@/page/yuyueruku/yuyueruku.vue'
import yuyuerukuList from '@/page/yuyueruku/yuyuerukuList.vue'
import cangkuruku from '@/page/cangkuruku/cangkuruku.vue'
import cangkurukuList from '@/page/cangkuruku/cangkurukuList.vue'
import cangkushangjia from '@/page/cangkushangjia/cangkushangjia.vue'
import cangkushangjiaList from '@/page/cangkushangjia/cangkushangjiaList.vue'
import yuyuechuku from '@/page/yuyuechuku/yuyuechuku.vue'
import yuyuechukuList from '@/page/yuyuechuku/yuyuechukuList.vue'
import cangkuchuku from '@/page/cangkuchuku/cangkuchuku.vue'
import cangkuchukuList from '@/page/cangkuchuku/cangkuchukuList.vue'
import teshuchuku from '@/page/cangkuchuku/teshuchuku.vue'
import teshuchukuList from '@/page/cangkuchuku/teshuchukuList.vue'
import cangkuguanli from '@/page/cangkuguanli/cangkuguanli.vue'
import pandian from '@/page/cangkuguanli/pandian.vue'
import pandianList from '@/page/cangkuguanli/pandianList.vue'



Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/yuyueruku',
    name: 'yuyueruku',
    component: yuyueruku
  },
  {
    path: '/yuyuerukuList',
    name: 'yuyuerukuList',
    component: yuyuerukuList
  },
  {
    path: '/cangkuruku',
    name: 'cangkuruku',
    component: cangkuruku
  },
  {
    path: '/cangkurukuList',
    name: 'cangkurukuList',
    component: cangkurukuList
  },
  {
    path: '/cangkushangjia',
    name: 'cangkushangjia',
    component: cangkushangjia
  },
  {
    path: '/cangkushangjiaList',
    name: 'cangkushangjiaList',
    component: cangkushangjiaList
  },
  {
    path: '/yuyuechuku',
    name: 'yuyuechuku',
    component: yuyuechuku
  },
  {
    path: '/yuyuechukuList',
    name: 'yuyuechukuList',
    component: yuyuechukuList
  },
  {
    path: '/cangkuchuku',
    name: 'cangkuchuku',
    component: cangkuchuku
  },
  {
    path: '/cangkuchukuList',
    name: 'cangkuchukuList',
    component: cangkuchukuList
  },
  {
    path: '/teshuchuku',
    name: 'teshuchuku',
    component: teshuchuku
  },
  {
    path: '/teshuchukuList',
    name: 'teshuchukuList',
    component: teshuchukuList
  },
  {
    path: '/cangkuguanli',
    name: 'cangkuguanli',
    component: cangkuguanli
  },
  {
    path: '/pandian',
    name: 'pandian',
    component: pandian
  },
  {
    path: '/pandianList',
    name: 'pandianList',
    component: pandianList
  }
];

export default new Router({
  routes
})
