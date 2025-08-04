import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './ToggleTheme_BkNQctyn.mjs';
import { $ as $$Image } from './Image_DGeN89yJ.mjs';
import { $ as $$Headline } from './Headline_BOMbCEtY.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_BEeci8H8.mjs';

const $$Astro = createAstro("https://nzxf.my.id");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Brands;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-12 lg:gap-x-5"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center my-2 lg:my-1 py-1 px-3 rounded-md"> ${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt || "", "class": "rounded-md", "width": 150, "height": 150, "format": "webp" })} </div>`
  )} </div> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Brands.astro", void 0);

export { $$Brands as $ };
