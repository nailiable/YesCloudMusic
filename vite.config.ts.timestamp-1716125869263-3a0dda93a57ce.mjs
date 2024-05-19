// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/vite@5.2.11_@types+node@16.18.11_less@4.2.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.2.11_vue-router@4.3.2_vue@3.4.27/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-components@0.27.0_rollup@4.17.2_vue@3.4.27/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.9.0_rollup@4.17.2/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.17.2_vite@5.2.11/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueMacros from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-macros@2.9.2_@vueuse+core@10.9.0_rollup@4.17.2_typescript@5.4.5_vite@5.2.11_vue@3.4.27/node_modules/unplugin-vue-macros/dist/vite.mjs";
import VueI18n from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.17.2_vue-i18n@9.13.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/vite-plugin-pwa@0.20.0_vite@5.2.11_workbox-build@7.1.0_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import VueDevTools from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/vite-plugin-vue-devtools@7.2.0_rollup@4.17.2_vite@5.2.11_vue@3.4.27/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import LinkAttributes from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unocss@0.60.2_postcss@8.4.38_rollup@4.17.2_vite@5.2.11/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/@shikijs+markdown-it@1.5.2/node_modules/@shikijs/markdown-it/dist/index.mjs";
import WebfontDownload from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.2.11/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-router@0.8.6_rollup@4.17.2_vue-router@4.3.2_vue@3.4.27/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-router@0.8.6_rollup@4.17.2_vue-router@4.3.2_vue@3.4.27/node_modules/unplugin-vue-router/dist/index.mjs";
import { setup } from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/@css-render+vue3-ssr@0.15.14_vue@3.4.27/node_modules/@css-render/vue3-ssr/lib/index.js";
import VueJsx from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-jsx@0.3.1_rollup@4.17.2_vue@3.4.27/node_modules/unplugin-vue-jsx/dist/vite.mjs";
import { NaiveUiResolver } from "file:///Users/guhuan/Profiles/Naily/University/Projects/Music/v2/node_modules/.pnpm/unplugin-vue-components@0.27.0_rollup@4.17.2_vue@3.4.27/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "/Users/guhuan/Profiles/Naily/University/Projects/Music/v2";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  server: {
    host: "0.0.0.0"
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
          template: {
            compilerOptions: {
              isCustomElement: (tag) => tag.startsWith("mdui-")
            }
          }
        }),
        vueJsx: VueJsx()
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typed-router.d.ts"
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        },
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar"
          ]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores",
        "src/apis"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
      dirs: [
        "src/components",
        "src/libs"
      ],
      resolvers: [NaiveUiResolver()]
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    // https://github.com/unplugin/unplugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(
          await Shiki({
            defaultColor: false,
            themes: {
              light: "vitesse-light",
              dark: "vitesse-dark"
            }
          })
        );
      }
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Yes Cloud Music",
        short_name: "YCM",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom"
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    },
    async onBeforePageRender(route, indexHTML, appCtx) {
      const { collect } = setup(appCtx.app);
      appCtx.__collectStyle = collect;
      return void 0;
    },
    async onPageRendered(route, renderedHTML, appCtx) {
      return renderedHTML.replace(
        /<\/head>/,
        `${appCtx.__collectStyle()}</head>`
      );
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/, "naive-ui", "vueuc", "date-fns"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ3VodWFuL1Byb2ZpbGVzL05haWx5L1VuaXZlcnNpdHkvUHJvamVjdHMvTXVzaWMvdjJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ndWh1YW4vUHJvZmlsZXMvTmFpbHkvVW5pdmVyc2l0eS9Qcm9qZWN0cy9NdXNpYy92Mi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZ3VodWFuL1Byb2ZpbGVzL05haWx5L1VuaXZlcnNpdHkvUHJvamVjdHMvTXVzaWMvdjIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYXJrZG93bi92aXRlJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBTaGlraSBmcm9tICdAc2hpa2lqcy9tYXJrZG93bi1pdCdcbmltcG9ydCBXZWJmb250RG93bmxvYWQgZnJvbSAndml0ZS1wbHVnaW4td2ViZm9udC1kbCdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IHsgc2V0dXAgfSBmcm9tICdAY3NzLXJlbmRlci92dWUzLXNzcidcbmltcG9ydCBWdWVKc3ggZnJvbSAndW5wbHVnaW4tdnVlLWpzeC92aXRlJ1xuaW1wb3J0IHsgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICB9LFxuICB9LFxuXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgfSxcblxuICBwbHVnaW5zOiBbXG4gICAgVnVlTWFjcm9zKHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgdnVlOiBWdWUoe1xuICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogdGFnID0+IHRhZy5zdGFydHNXaXRoKCdtZHVpLScpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdnVlSnN4OiBWdWVKc3goKSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBleHRlbnNpb25zOiBbJy52dWUnLCAnLm1kJ10sXG4gICAgICBkdHM6ICdzcmMvdHlwZWQtcm91dGVyLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBhZGQgYW55IG90aGVyIGltcG9ydHMgeW91IHdlcmUgcmVseWluZyBvblxuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICduYWl2ZS11aSc6IFtcbiAgICAgICAgICAgICd1c2VEaWFsb2cnLFxuICAgICAgICAgICAgJ3VzZU1lc3NhZ2UnLFxuICAgICAgICAgICAgJ3VzZU5vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICAndXNlTG9hZGluZ0JhcicsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogW1xuICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgJ3NyYy9zdG9yZXMnLFxuICAgICAgICAnc3JjL2FwaXMnLFxuICAgICAgXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuICAgICAgZGlyczogW1xuICAgICAgICAnc3JjL2NvbXBvbmVudHMnLFxuICAgICAgICAnc3JjL2xpYnMnLFxuICAgICAgXSxcbiAgICAgIHJlc29sdmVyczogW05haXZlVWlSZXNvbHZlcigpXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vY3NzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5wbHVnaW4vdW5wbHVnaW4tdnVlLW1hcmtkb3duXG4gICAgLy8gRG9uJ3QgbmVlZCB0aGlzPyBUcnkgdml0ZXNzZS1saXRlOiBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZXNzZS1saXRlXG4gICAgTWFya2Rvd24oe1xuICAgICAgd3JhcHBlckNsYXNzZXM6ICdwcm9zZSBwcm9zZS1zbSBtLWF1dG8gdGV4dC1sZWZ0JyxcbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgICAgYXN5bmMgbWFya2Rvd25JdFNldHVwKG1kKSB7XG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBtZC51c2UoXG4gICAgICAgICAgYXdhaXQgU2hpa2koe1xuICAgICAgICAgICAgZGVmYXVsdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICBsaWdodDogJ3ZpdGVzc2UtbGlnaHQnLFxuICAgICAgICAgICAgICBkYXJrOiAndml0ZXNzZS1kYXJrJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnWWVzIENsb3VkIE11c2ljJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1lDTScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZlYXQtYWdlbmN5L3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcbiAgICBXZWJmb250RG93bmxvYWQoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJmYW5zcGx6L3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1xuICAgIFZ1ZURldlRvb2xzKCksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0XG4gIHRlc3Q6IHtcbiAgICBpbmNsdWRlOiBbJ3Rlc3QvKiovKi50ZXN0LnRzJ10sXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gIH0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gICAgY3JpdHRlcnNPcHRpb25zOiB7XG4gICAgICByZWR1Y2VJbmxpbmVTdHlsZXM6IGZhbHNlLFxuICAgIH0sXG4gICAgb25GaW5pc2hlZCgpIHtcbiAgICAgIGdlbmVyYXRlU2l0ZW1hcCgpXG4gICAgfSxcbiAgICBhc3luYyBvbkJlZm9yZVBhZ2VSZW5kZXIocm91dGUsIGluZGV4SFRNTCwgYXBwQ3R4KSB7XG4gICAgICBjb25zdCB7IGNvbGxlY3QgfSA9IHNldHVwKGFwcEN0eC5hcHApXG4gICAgICA7KGFwcEN0eCBhcyBhbnkpLl9fY29sbGVjdFN0eWxlID0gY29sbGVjdFxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0sXG4gICAgYXN5bmMgb25QYWdlUmVuZGVyZWQocm91dGUsIHJlbmRlcmVkSFRNTCwgYXBwQ3R4KSB7XG4gICAgICByZXR1cm4gcmVuZGVyZWRIVE1MLnJlcGxhY2UoXG4gICAgICAgIC88XFwvaGVhZD4vLFxuICAgICAgICBgJHsoYXBwQ3R4IGFzIGFueSkuX19jb2xsZWN0U3R5bGUoKX08L2hlYWQ+YCxcbiAgICAgIClcbiAgICB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuLywgJ25haXZlLXVpJywgJ3Z1ZXVjJywgJ2RhdGUtZm5zJ10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VixPQUFPLFVBQVU7QUFDOVcsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8scUJBQXFCO0FBQzVCLE9B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dUJBQXVCO0FBQUEsTUFDdEQsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxLQUFLLFFBQVEsa0NBQVcsWUFBWSxDQUFDO0FBQUEsSUFDakQsQ0FBQztBQUFBO0FBQUEsSUFHRCxnQkFBZ0I7QUFBQTtBQUFBLElBR2hCLFlBQVk7QUFBQSxFQUNkO0FBQUE7QUFBQSxFQUdBLE1BQU07QUFBQSxJQUNKLFNBQVMsQ0FBQyxtQkFBbUI7QUFBQSxJQUM3QixhQUFhO0FBQUEsRUFDZjtBQUFBO0FBQUEsRUFHQSxZQUFZO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixpQkFBaUI7QUFBQSxNQUNmLG9CQUFvQjtBQUFBLElBQ3RCO0FBQUEsSUFDQSxhQUFhO0FBQ1gsc0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBLE1BQU0sbUJBQW1CLE9BQU8sV0FBVyxRQUFRO0FBQ2pELFlBQU0sRUFBRSxRQUFRLElBQUksTUFBTSxPQUFPLEdBQUc7QUFDbkMsTUFBQyxPQUFlLGlCQUFpQjtBQUNsQyxhQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsTUFBTSxlQUFlLE9BQU8sY0FBYyxRQUFRO0FBQ2hELGFBQU8sYUFBYTtBQUFBLFFBQ2xCO0FBQUEsUUFDQSxHQUFJLE9BQWUsZUFBZSxDQUFDO0FBQUEsTUFDckM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsS0FBSztBQUFBO0FBQUEsSUFFSCxZQUFZLENBQUMsa0JBQWtCLFlBQVksWUFBWSxTQUFTLFVBQVU7QUFBQSxFQUM1RTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
