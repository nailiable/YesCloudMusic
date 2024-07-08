/// <reference types="vite/client" />
/// <reference types="../auto-imports.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
