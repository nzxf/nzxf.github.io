/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BF0ez7UC.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$MainLayout } from '../chunks/MainLayout_Dyc3A9y7.mjs';
import '@astrojs/internal-helpers/path';
export { renderers } from '../renderers.mjs';

const error = new Proxy({"src":"/_astro/error-404.Ox42KQdE.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/astro-mbk/src/images/error-404.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/astro-mbk/src/images/error-404.png");
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7"> ${renderComponent($$result2, "Image", $$Image, { "src": error, "alt": "404", "height": 250, "width": 250, "class:list": "mt-10" })} <h1 class="text-5xl">Page Not Found</h1> <p class="text-2xl mb-10">
Sorry, we couldn't find the page you were looking for.
</p> <a href="/" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Go Back Home</a> </div> ` })}`;
}, "/home/zan/Code/astro-mbk/src/pages/404.astro", void 0);

const $$file = "/home/zan/Code/astro-mbk/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
