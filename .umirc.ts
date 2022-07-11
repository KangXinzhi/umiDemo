import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/home', component: '@/pages/Home' },
    { path: '/home/report', component: '@/pages/Home/Report' },
    { path: '/home/about', component: '@/pages/Home/About' },
  ],
  fastRefresh: {},
});
