/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_CHXB-JrG.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$MainLayout } from '../../chunks/MainLayout_N0LbGWh1.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_ByADmOGc.mjs';
import { $ as $$SearchForm } from '../../chunks/SearchForm_CB3U__Az.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResult = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Result" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-5 hover:bg-indigo-500 hover:text-white">All Articles</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <h1 class="text-2xl pb-3 mt-6">Result For <strong>${query}</strong></h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${searchResult.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/articles/search.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/articles/search.astro";
const $$url = "/articles/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
