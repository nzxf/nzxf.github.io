/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, b as renderComponent } from '../chunks/astro/server_CHXB-JrG.mjs';
import 'kleur/colors';
import { g as getCollection, A as ARTICLES_PER_PAGE, $ as $$MainLayout } from '../chunks/MainLayout_N0LbGWh1.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_ByADmOGc.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_CB3U__Az.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPage, totalPages, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPage - 1), "href")}${addAttribute(
    disablePrevious ? "inline-block pointer-events-none bg-gray-100 px-3 py-2 text-gray-400 rounded-lg" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg",
    "class"
  )}>
Previous
</a> <a${addAttribute("/articles?page=" + (currentPage + 1), "href")}${addAttribute(
    disableNext ? "inline-block pointer-events-none bg-gray-100 px-3 py-2 text-gray-400 rounded-lg" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg",
    "class"
  )}>
Next
</a> </div>`;
}, "/home/zan/Code/nzxf.github.io/src/components/Pagination.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);
  const articleForPage = allBlogArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">All Articles</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br>  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> <!-- Article Card --> ${articleForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div>  ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPages })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/articles/index.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
