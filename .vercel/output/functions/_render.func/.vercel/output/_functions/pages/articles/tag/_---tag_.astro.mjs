/* empty css                                       */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../../chunks/astro/server_CHXB-JrG.mjs';
import 'kleur/colors';
import { g as getCollection, c as capitalize, $ as $$MainLayout } from '../../../chunks/MainLayout_N0LbGWh1.mjs';
import { $ as $$ArticleCard } from '../../../chunks/ArticleCard_ByADmOGc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  if (tag === void 0) {
    throw new Error("Tag is required");
  }
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const tagArticles = allBlogArticles.filter((article) => article.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a> <h1 class="text-4xl pb-3">#${capitalize(tag)}</h1>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> <!-- Article Card --> ${tagArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/articles/tag/[...tag].astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/articles/tag/[...tag].astro";
const $$url = "/articles/tag/[...tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
