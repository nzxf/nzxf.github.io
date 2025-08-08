import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, a as renderComponent, u as unescapeHTML, F as Fragment } from './astro/server_Blj49uai.mjs';
import { $ as $$Image } from './Image_DmGSLaf2.mjs';
import { $ as $$Button } from './Button_C6SC4Iwt.mjs';

const $$Astro = createAstro("https://nzxf.my.id");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image"),
    id,
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"> ${renderSlot($$result, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(bg)}` })}` : null} `)} </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8"> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter">${unescapeHTML(title)}</h1>`} ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} <div class="max-w-3xl mx-auto lg:max-w-none"> ${subtitle && renderTemplate`<p class="text-centered text-xl mb-3 dark:text-slate-300 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter">${unescapeHTML(subtitle)}</p>`} </div> </div> <!-- <div class="basis-1/2"> --> ${image && renderTemplate`<div class="relative m-auto max-w-5xl intersect-once intercept-no-queue motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 600, ...image })}`} </div>`} <!-- </div> --> ${actions && renderTemplate`<div class="my-10 max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> </div> </section>`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Hero2.astro", void 0);

export { $$Hero2 as $ };
