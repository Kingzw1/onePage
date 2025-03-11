import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    // 扩展自定义元字段类型
    title?: string;
    requiresAuth?: boolean;
    icon?: string;
  }
}

// 动态路由组件类型声明（Vite 环境）
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}