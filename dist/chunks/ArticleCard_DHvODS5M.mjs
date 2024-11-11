import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from './astro/server_BF0ez7UC.mjs';
import 'kleur/colors';
import { f as formatDate } from './MainLayout_Dyc3A9y7.mjs';
import { $ as $$Tags } from './Tags_BeQ2EZYp.mjs';

const $$Astro = createAstro();
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md mx-auto mt-10"> <div class="bg-white rounded-lg overflow-hidden shadow-lg"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-48 object-cover hover:opacity-75 transition duration-300 ease-in-out"> </a> <div class="p-6"> <h2 class="text-2xl font-semibold mb-2"> <a${addAttribute("/article/" + article.slug, "href")}> ${article.data.title} </a> </h2> <p class="text-gray-600 text-sm mb-4">${formatDate(article.data.pubDate)}</p> ${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })} </div> </div> </div> `;
}, "/home/zan/Code/astro-mbk/src/components/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
