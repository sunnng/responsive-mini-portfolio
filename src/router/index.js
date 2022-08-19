import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/password',
    name: 'show-hide-password',
    component: () =>
      import('../components/show-hide-password/PasswordInput.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../components/download-button/DownloadButton.vue')
  },
  {
    path: '/qr-code',
    name: 'qr-code-generator',
    component: () => import('../components/QRCodeGenerator.vue')
  }
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router
