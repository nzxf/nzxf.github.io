import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './ToggleTheme_BkNQctyn.mjs';
import { $ as $$Image } from './Image_DmGSLaf2.mjs';
import { a as getPermalink, d as dotByThousand, c as countDiscount } from './permalinks_C997oDUF.mjs';
import { f as findImage } from './Layout_DC-ZJu8v.mjs';
import 'clsx';
import { $ as $$Button } from './Button_C6SC4Iwt.mjs';

const $$Astro$3 = createAstro("https://nzxf.my.id");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  return renderTemplate`<!-- class={\`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade \${image ? 'md:grid-cols-2' : ''}\`} -->${maybeRenderHead()}<article${addAttribute(`h-full gap-2 md:gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade`, "class")}> <div class="h-full flex flex-col text-center mt-1 rounded-lg backdrop-blur border border-gray-100 dark:border-gray-900 bg-white dark:bg-slate-900 shadow flex w-full max-w-sm"> <!-- <header>
      <div class="mb-2">
        <span class="text-sm">
          <Icon name="tabler:clock" class="w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" />
          <time datetime={String(post.publishDate)} class="inline-block">{getFormattedDate(post.publishDate)}</time>
          {
            post.author && (
              <>
                <Icon name="tabler:user" class="w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" />
                <span>{post.author.replaceAll('-', ' ')}</span>
              </>
            )
          }
          {
            post.category && (
              <>
                {' '}
                ·{' '}
                <Icon name="tabler:category" class="w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" />
                <a class="hover:underline" href={getPermalink(post.category.slug, 'category')}>
                  {post.category.title}
                </a>
              </>
            )
          }
          {
            post.code && (
              <>
                {' '}
                ·{' '}
                <Icon name="tabler:id" class="w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" />
                <span>{post.code?.toUpperCase()}</span>
              </>
            )
          }
        </span>
      </div>
    </header> --> <header> ${image && renderTemplate`<div class="relative h-0 pb-[100%] md:pb-[100%] md:h-72 lg:pb-[100%] overflow-hidden"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 object-contain w-full h-full mb-6 rounded-t-lg", "widths": [400, 700], "width": 700, "sizes": "(max-width: 700px) 400px, 700px", "alt": post.title, "aspectRatio": "1:1", "loading": "lazy", "decoding": "async", "format": "webp" })}`} ${post.status && renderTemplate`<div class="absolute inset-0 bg-gray-900 opacity-60 rounded-t-lg"></div>
                  <div class="absolute inset-0 flex flex-col items-center justify-center"> <h2 class="text-gray-100 text-2xl font-extrabold">${post.category?.title.toUpperCase()}</h2> <h2 class="text-gray-100 text-2xl font-extrabold">${post.status.toUpperCase()}</h2> </div>`} </div>`} </header> <div class="grid grid-col px-2"> <h2 class="text-lg sm:text-2xl font-bold leading-tight font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="mt-3 inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h2> ${post.excerpt && renderTemplate`<p class="mb-2 text-muted dark:text-slate-400 text-base">${post.excerpt}</p>`} </div> <!-- 
          {
            post.tags && Array.isArray(post.tags) ? (
              <span class="mt-2">
                <PostTags tags={post.tags} />
              </span>
            ) : (
              <Fragment />
            )
          } --> ${post.building && renderTemplate`<div class="h-full text-muted flex flex-col justify-center"> ${post.space && renderTemplate`<span class="text-sm"> ${" "} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:shape", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <span>Luas Tanah ${post.space} &#13217;</span> </span>`} ${post.building && renderTemplate`<span class="text-sm"> ${" "} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:home-2", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <span>Luas Bangunan ${post.building} &#x33A1;</span> </span>`} ${post.bedroom && renderTemplate`<span class="text-sm"> ${" "} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:bed", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <span>${post.bedroom} Kamar Tidur</span> </span>`} ${post.bathroom && renderTemplate`<span class="text-sm"> ${" "} ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:bath", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <span>${post.bathroom} Kamar Tidur</span> </span>`} </div>`} <div class="flex-grow flex flex-col justify-end"> ${post.priceBefore && renderTemplate`<div class="mt-2 flex justify-center items-center"> <span class="text-gray-500 text-center font-bold text-sm line-through">Rp</span> <span class="text-gray-500 text-center font-bold text-sm line-through">${dotByThousand(post.priceBefore)}</span> <span class="text-gray-500 text-center font-bold text-sm line-through">${post.priceTail}</span> ${post.price && renderTemplate`<span class="text-center font-bold text-sm text-green-500 bg-gray-200 dark:bg-gray-800 ml-1 rounded px-1">${countDiscount(post.price, post.priceBefore)}%</span>`} </div>`} ${post.price && renderTemplate`<div class="flex justify-center items-center"> <span class="font-bold text-muted text-xl">Rp</span> <span class="font-bold text-2xl">${dotByThousand(post.price)}</span> <span class="font-bold text-muted text-xl">${post.priceTail}</span> </div>`} </div> <footer class="my-2"> <!-- {
        post.code && (
          <div class="mt-4 mb-3 mx-2 grid grid-cols-2 gap-1">
            <Button
              class="text-sm m-0 p-2 rounded-xl"
              text="Lihat Detail"
              href={link}
              variant="primary">
            </Button>
            <Button
              class="text-sm p-0 rounded-xl"
              text="Tanyakan Ini" 
              href={\`https://wa.me/6285176712656?text=MBK,%20mau%20tanya%20tentang%20\` + \`\${post.code.toUpperCase()}: \` + post.title}>
            </Button>
          </div>
        )
      } --> </footer> <a${addAttribute(link ?? "javascript:void(0)", "href")} class="bg-sky-500 hover:bg-sky-700 before:absolute before:inset-0"></a> </div> </article>`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/ListItem.astro", void 0);

const $$Astro$2 = createAstro("https://nzxf.my.id");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$List;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="mb-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"> ${posts.map((post) => renderTemplate`<li> ${renderComponent($$result, "Item", $$ListItem, { "post": post })} </li>`)} </ul>`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/List.astro", void 0);

const $$Astro$1 = createAstro("https://nzxf.my.id");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Headline;
  const { title = await Astro2.slots.render("default"), subtitle = await Astro2.slots.render("subtitle") } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mb-8 md:mb-16 text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${unescapeHTML(title)}</h1> ${subtitle && renderTemplate`<div class="mt-2 md:mt-3 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">${unescapeHTML(subtitle)}</div>`} </header>`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/Headline.astro", void 0);

const $$Astro = createAstro("https://nzxf.my.id");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "Sebelumnya", nextText = "Selanjutnya" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex"><div class="flex flex-row mx-auto container justify-between">${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `md:px-3 px-3 mr-2 ${!prevUrl ? "invisible" : ""}`, "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${prevText}</p>` })}${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `md:px-3 px-3 ${!nextUrl ? "invisible" : ""}`, "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}` })}</div></div>`}`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/Pagination.astro", void 0);

export { $$Headline as $, $$List as a, $$Pagination as b };
