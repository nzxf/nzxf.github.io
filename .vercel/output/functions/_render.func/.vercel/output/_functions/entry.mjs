import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CNL4VP3e.mjs';
import { manifest } from './manifest_D2xCGI3U.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/articles/search.astro.mjs');
const _page4 = () => import('./pages/articles/tag/_---tag_.astro.mjs');
const _page5 = () => import('./pages/articles.astro.mjs');
const _page6 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/articles/search.astro", _page3],
    ["src/pages/articles/tag/[...tag].astro", _page4],
    ["src/pages/articles/index.astro", _page5],
    ["src/pages/articles/[...slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a494fdae-2896-493a-bddd-ecd57150e2b1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
