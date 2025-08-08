import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BEeci8H8.mjs';
import { $ as $$Headline } from './Headline_BOMbCEtY.mjs';
import { $ as $$Icon } from './ToggleTheme_BkNQctyn.mjs';
import { twMerge } from 'tailwind-merge';
import { $ as $$Button } from './Button_C6SC4Iwt.mjs';

const $$Astro$1 = createAstro("https://nzxf.my.id");
const $$ItemGrid2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div${addAttribute(twMerge(
    "relative flex flex-col intersect-once intersect-quarter intercept-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade",
    panelClass,
    itemClasses?.panel
  ), "class")}>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("mb-2 w-10 h-10", defaultIconClass, itemClasses?.icon) })}`}<div${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`)}</div>`}`;
}, "/home/zan/Code/nzxf.github.io/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro = createAstro("https://nzxf.my.id");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 2,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-5xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "text-center bg-page items-center p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Features2.astro", void 0);

export { $$Features2 as $ };
