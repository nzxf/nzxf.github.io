import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DC-ZJu8v.mjs';
import { g as getHomePermalink } from '../chunks/permalinks_C997oDUF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `Error 404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Error</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Maaf, laman yang anda cari sedang dalam proses konstruksi</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
Sila kembali ke halaman utama
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Kembali ke Homepage MBK</a> </div> </div> </section> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/404.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
