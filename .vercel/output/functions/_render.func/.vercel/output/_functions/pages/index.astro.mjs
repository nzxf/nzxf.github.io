/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as createAstro, b as renderComponent } from '../chunks/astro/server_CHXB-JrG.mjs';
import 'kleur/colors';
import { f as formatDate, c as capitalize, g as getCollection, H as HOMEPAGE_ARTICLE_LIMIT, $ as $$MainLayout } from '../chunks/MainLayout_N0LbGWh1.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_CB3U__Az.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_ByADmOGc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$MostRecentArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MostRecentArticle;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-full sm:w-auto cursor-pointer rounded-2xl"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-2xl"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"> <div> <h2 class="text-2xl font-semibold sm:text-3xl"> ${article.data.title} </h2> <p class="text-xl mt-4">${formatDate(article.data.pubDate)}</p> <!-- Tags with rounded border --> <div class="flex mt-4 justify-center"> ${article.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 border text-white rounded-full text-xs mr-2">#${capitalize(tag)}</span>`)} </div> </div> </div> </a> </div>`;
}, "/home/zan/Code/nzxf.github.io/src/components/MostRecentArticle.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const mostRecentArticle = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div> <h1 class="text-5xl font-bold mt-4 mb-8 leading-tight xl:text-6xl">
Articles, Stories & Tutorials for Tech People
</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> ${renderComponent($$result2, "MostRecentArticle", $$MostRecentArticle, { "article": mostRecentArticle })} </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/index.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
