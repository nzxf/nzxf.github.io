import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { b as getBlogPermalink, A as APP_BLOG } from './permalinks_C997oDUF.mjs';
import { $ as $$Grid } from './Grid_CyxcUXiI.mjs';
import { h as findLatestPosts } from './blog_iHAGWjLZ.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BEeci8H8.mjs';
import './Button_C6SC4Iwt.mjs';

const $$Astro = createAstro("https://nzxf.my.id");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "Lihat Semua",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-xl"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2></div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm">${unescapeHTML(information)}</p>`}${APP_BLOG.list.isEnabled}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/BlogLatestPosts.astro", void 0);

export { $$BlogLatestPosts as $ };
