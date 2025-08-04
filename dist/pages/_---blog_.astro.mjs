import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead, b as addAttribute, e as renderSlot, u as unescapeHTML } from '../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import merge from 'lodash.merge';
import { $ as $$PageLayout } from '../chunks/PageLayout_CIBne1CM.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_BkNQctyn.mjs';
import { $ as $$Image } from '../chunks/Image_DGeN89yJ.mjs';
import { a as getPermalink, e as getFormattedDate, d as dotByThousand, c as countDiscount, b as getBlogPermalink, A as APP_BLOG, f as getCanonical } from '../chunks/permalinks_C997oDUF.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_BcIpfXA_.mjs';
import { i as findPostsByIds, j as getRelatedPosts, k as blogPostRobots, l as getStaticPathsBlogPost } from '../chunks/blog_iHAGWjLZ.mjs';
import { f as findImage } from '../chunks/Layout_N2fU7d_w.mjs';
import { $ as $$Grid } from '../chunks/Grid_CyxcUXiI.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_BEeci8H8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://nzxf.my.id");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, class: className = "text-sm", title = void 0, isCategory = false } = Astro2.props;
  return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${title !== void 0 && renderTemplate`${maybeRenderHead()}<span class="align-super font-normal underline underline-offset-4 decoration-2 dark:text-slate-400">${title}</span>`}` })}<ul${addAttribute(className, "class")}>${tags.map((tag) => renderTemplate`<li class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 rtl:mr-0 rtl:ml-2 mb-2 py-0.5 px-2 lowercase font-medium">${renderTemplate`<a${addAttribute(getPermalink(tag.slug, isCategory ? "category" : "tag"), "href")} class="text-muted dark:text-slate-300 hover:text-primary dark:hover:text-gray-200">${tag.title}</a>`}</li>`)}</ul>` })}`}`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/Tags.astro", void 0);

const $$Astro$4 = createAstro("https://nzxf.my.id");
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-slate-500 dark:text-slate-400">Share:</span> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-x", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <!-- <button
    class="ml-2 rtl:ml-0 rtl:mr-2"
    title="Linkedin Share"
    data-aw-social-share="linkedin"
    data-aw-url={url}
    data-aw-text={text}
    ><Icon
      name="tabler:brand-linkedin"
      class="w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
    />
  </button> --> <!-- <button
    class="ml-2 rtl:ml-0 rtl:mr-2"
    title="Email Share"
    data-aw-social-share="mail"
    data-aw-url={url}
    data-aw-text={text}
    ><Icon
      name="tabler:mail"
      class="w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
    />
  </button> --> </div>`;
}, "/home/zan/Code/nzxf.github.io/src/components/common/SocialShare.astro", void 0);

const $$Astro$3 = createAstro("https://nzxf.my.id");
const $$SinglePost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { post, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-16 lg:py-20 mx-auto"> <article> <header${addAttribute(post.image ? "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" : "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade", "class")}> <div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:calendar", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;·&nbsp;
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <span class="inline-block">${post.author}</span> ` })}`} ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;·&nbsp;
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:category", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <a class="hover:underline inline-block"${addAttribute(getPermalink(post.category.slug, "category"), "href")}> ${post.category.title} </a> ` })}`} ${post.code && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;·&nbsp;
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:id", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <span class="inline-block">${post.code.toUpperCase()}</span> ` })}`} ${post.price ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;·&nbsp;
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <span>Waktu Baca ${post.readingTime}</span> menit
` })}`} </p> </div> ${post.image ? renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post?.title || "", "class": "max-w-full lg:max-w-[1200px] mx-auto mb-6 rounded-md sm:rounded-lg bg-gray-400 dark:bg-slate-700", "sizes": "(max-width: 1200px) 600px, 1200px", "width": 900, "height": 900, "aspectRatio": "1:1", "loading": "eager", "decoding": "async", "format": "webp" })} ${post.status && renderTemplate`<div class="absolute inset-0 bg-gray-900 opacity-80 rounded-t-lg"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center"> <h2 class="text-gray-100 text-3xl lg:text-4xl font-extrabold">${post.category?.title.toUpperCase()}</h2> <h2 class="text-gray-100 text-3xl lg:text-4xl font-extrabold">${post.status.toUpperCase()}</h2> </div>`} </div> </div>` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${post.title}</h1> <p class="max-w-3xl mx-auto mt-4 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify">${post.excerpt}</p> </header> <div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-md lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-2 prose-headings:scroll-mt-[80px] prose-li:my-0"> <div class="flex flex-col"> ${post.price && renderTemplate`<h2>HARGA</h2>`} ${post.priceBefore && renderTemplate`<div class="pl-3 flex"> <span class="text-gray-500 font-bold text-lg line-through">Rp</span> <span class="text-gray-500 font-bold text-lg line-through">${dotByThousand(post.priceBefore)}</span> ${post.price && renderTemplate`<span class="text-center font-bold text-lg text-green-500 bg-gray-200 dark:bg-gray-800 ml-1 rounded px-1">-${countDiscount(post.price, post.priceBefore)}%</span>`} </div>`} ${post.price && renderTemplate`<div class="pl-3 flex"> <span class="font-bold text-2xl">Rp</span> <span class="pl-1 font-bold text-2xl">${dotByThousand(post.price)}</span> <span class="font-bold text-2xl">${post.priceTail}</span> </div>`} </div> ${post.building ? renderTemplate`<div class="flex flex-col"> <h2>Detail</h2> <span class="pl-3"> ${post.space && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:shape", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })}
                  <span class="pl-1">Luas Tanah ${post.space} &#13217;</span>`} </span> <span class="pl-3"> ${post.building && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:home-2", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })}
                  <span class="pl-1">Luas Bangunan ${post.building} &#x33A1;</span>`} </span> <span class="pl-3"> ${post.bedroom && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:bed", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })}
                <span class="pl-1">${post.bedroom} Kamar Tidur</span>`} </span> <span class="pl-3"> ${post.bathroom && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:bath", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })}
                <span class="pl-1">${post.bathroom} Kamar Mandi</span>`} </span> </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} ${renderSlot($$result, $$slots["default"])} ${post.code && (post.code && post.status ? renderTemplate`${renderComponent($$result, "CallToAction", $$CallToAction, {}, { "subtitle": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result3) => renderTemplate`
Mohon maaf ${post.category?.title.toLowerCase()} sudah ${post.status.toLowerCase()}` })}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`
Tertarik dengan ${post.category?.title.toLowerCase()} ini?<br class="block sm:hidden"><span class="sm:whitespace-nowrap"></span> ` })}` })}` : renderTemplate`${renderComponent($$result, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Jadwalkan Survey",
      href: "https://wa.me/6285176712656?text=MBK,%20saya%20mau%20jadwalkan%20survey%20untuk%20" + post.code.toUpperCase() + ": " + post.title,
      target: "_blank",
      icon: "tabler:calendar-plus"
    },
    {
      variant: "primary",
      text: "Tanyakan ini",
      href: "https://wa.me/6285176712656?text=MBK,%20saya%20mau%20tanya%20tentang%20" + post.code.toUpperCase() + ": " + post.title,
      target: "_blank",
      icon: "tabler:message"
    }
  ] }, { "subtitle": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result3) => renderTemplate`
Tunggu apa lagi, langsung klik tombol di bawah.
` })}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`
Tertarik dengan ${post.category?.title.toLowerCase()} ini?<br class="block sm:hidden"><span class="sm:whitespace-nowrap"></span> ` })}` })}`)} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" })} ${renderComponent($$result, "SocialShare", $$SocialShare, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" })} </div> </article> </section>`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/SinglePost.astro", void 0);

const $$Astro$2 = createAstro("https://nzxf.my.id");
const $$BlogHighlightedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHighlightedPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    postIds = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findPostsByIds(postIds) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/BlogHighlightedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://nzxf.my.id");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  const relatedPosts = post.tags ? await getRelatedPosts(post, 8) : [];
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPosts, { "classes": {
    container: "pt-0 lg:pt-0 md:pt-0 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
  }, "title": "Rekomendasi MBK", "linkText": "Lihat Semua", "linkUrl": getBlogPermalink(), "postIds": relatedPosts.map((post2) => post2.id) })}` }`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/RelatedPosts.astro", void 0);

const $$Astro = createAstro("https://nzxf.my.id");
const prerender = true;
const getStaticPaths = async () => {
  return await getStaticPathsBlogPost();
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge(
    {
      title: post.title,
      description: post.excerpt,
      robots: {
        index: blogPostRobots?.index,
        follow: blogPostRobots?.follow
      },
      openGraph: {
        type: "article",
        ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
      }
    },
    { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url }, { "default": ($$result3) => renderTemplate`${post.Content ? renderTemplate`${renderComponent($$result3, "post.Content", post.Content, {})}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(post.content || "")}` })}`}` })}  ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "post": post })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/[...blog]/index.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/[...blog]/index.astro";
const $$url = "/[...blog]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
