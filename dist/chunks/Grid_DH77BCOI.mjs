import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Image } from './Image_DmGSLaf2.mjs';
import { a as getPermalink, d as dotByThousand, c as countDiscount } from './permalinks_C997oDUF.mjs';
import { f as findImage } from './Layout_DC-ZJu8v.mjs';

const $$Astro$1 = createAstro("https://nzxf.my.id");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  return renderTemplate`<!-- <article
  class="mb-6 transition intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"
>
  <div class="relative h-100 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">
    {
      image &&
        (link ? (
          <a href={link}>
            <Image
              src={image}
              class="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
              width={900}
              height={900}
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.title}
              aspectRatio="1:1"
              loading="lazy"
              decoding="async"
            />
          </a>
        ) : (
          <Image
            src={image}
            class="w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700"
            width={900}
            height={900}
            sizes="(max-width: 900px) 400px, 900px"
            alt={post.title}
            aspectRatio="1:1"
            layout="contained"
            loading="lazy"
            decoding="async"
          />
        ))
    }
  </div>

  <h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
    {
      link ? (
        <a class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200" href={link}>
          {post.title}
        </a>
      ) : (
        post.title
      )
    }
  </h3>

  <p class="text-muted dark:text-slate-400 text-lg">{post.excerpt}</p>

  <div class="flex-grow flex flex-col justify-end">
    {post.priceBefore && 
        <div class="mt-2 flex justify-center items-center">
          <span class="text-gray-500 text-center font-bold text-sm line-through">Rp</span>
          <span class="text-gray-500 text-center font-bold text-sm line-through">{dotByThousand(post.priceBefore)}</span>
          <span class="text-gray-500 text-center font-bold text-sm line-through">{post.priceTail}</span>
          {post.price && 
            <span class="text-center font-bold text-sm text-green-500 bg-gray-200 dark:bg-gray-800 ml-1 rounded px-1">{countDiscount(post.price, post.priceBefore)}%</span>
          }
        </div>
      }
      {post.price && 
        <div class="flex justify-center items-center">
          <span class="font-bold text-muted text-xl">Rp</span>
          <span class="font-bold text-2xl">{dotByThousand(post.price)}</span>
          <span class="font-bold text-muted text-xl">{post.priceTail}</span>
        </div>
      }  
  </div>
</article> -->${maybeRenderHead()}<article${addAttribute(`h-full gap-2 md:gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade`, "class")}> <div class="h-full flex flex-col text-center mt-1 rounded-lg backdrop-blur border border-gray-100 dark:border-gray-900 bg-white dark:bg-slate-900 shadow flex w-full max-w-sm"> <header> ${image && renderTemplate`<div class="relative h-0 pb-[100%] md:pb-[100%] md:h-72 lg:pb-[100%] overflow-hidden"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 object-contain w-full h-full mb-6 rounded-t-lg", "widths": [400, 700], "width": 700, "sizes": "(max-width: 700px) 400px, 700px", "alt": post.title, "aspectRatio": "1:1", "loading": "lazy", "decoding": "async", "format": "webp" })}`} ${post.status && renderTemplate`<div class="absolute inset-0 bg-gray-900 opacity-60 rounded-t-lg"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center"> <h2 class="text-gray-100 text-2xl font-extrabold">${post.category?.title.toUpperCase()}</h2> <h2 class="text-gray-100 text-2xl font-extrabold">${post.status.toUpperCase()}</h2> </div>`} </div>`} </header> <div class="grid grid-col px-2"> <h2 class="text-lg sm:text-2xl font-bold leading-tight font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="mt-3 inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h2> ${post.excerpt && renderTemplate`<p class="mb-2 text-muted dark:text-slate-400 text-base">${post.excerpt}</p>`} </div> <div class="flex-grow flex flex-col justify-end"> ${post.priceBefore && renderTemplate`<div class="mt-2 flex justify-center items-center"> <span class="text-gray-500 text-center font-bold text-sm line-through">Rp</span> <span class="text-gray-500 text-center font-bold text-sm line-through">${dotByThousand(post.priceBefore)}</span> <span class="text-gray-500 text-center font-bold text-sm line-through">${post.priceTail}</span> ${post.price && renderTemplate`<span class="text-center font-bold text-sm text-green-500 bg-gray-200 dark:bg-gray-800 ml-1 rounded px-1">${countDiscount(post.price, post.priceBefore)}%</span>`} </div>`} ${post.price && renderTemplate`<div class="flex justify-center items-center"> <span class="font-bold text-muted text-xl">Rp</span> <span class="font-bold text-2xl">${dotByThousand(post.price)}</span> <span class="font-bold text-muted text-xl">${post.priceTail}</span> </div>`} </div> <footer class="my-2"> <!-- {
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
}, "/home/zan/Code/nzxf.github.io/src/components/blog/GridItem.astro", void 0);

const $$Astro = createAstro("https://nzxf.my.id");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/home/zan/Code/nzxf.github.io/src/components/blog/Grid.astro", void 0);

export { $$Grid as $ };
