import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_C02ynB8f.mjs';
import { $ as $$Features3 } from '../chunks/Features3_m1YqT_mI.mjs';
import { $ as $$Hero } from '../chunks/Hero_DcxZd8gX.mjs';
import { $ as $$Stats } from '../chunks/Stats_BJ8MGHa3.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_BkNQctyn.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_BEeci8H8.mjs';
import { $ as $$Headline } from '../chunks/Headline_BOMbCEtY.mjs';
import { $ as $$Button } from '../chunks/Button_C6SC4Iwt.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_WpKuvie6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nzxf.my.id");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Steps2.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "About us"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "About us", "image": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Caos Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Donec efficitur, ipsum quis congue luctus, mauris magna convallis mauris, eu auctor nisi lectus non augue. Donec
      quis lorem non massa vulputate efficitur ac at turpis. Sed tincidunt ex a nunc convallis, et lobortis nisi tempus.
      Suspendisse vitae nisi eget tortor luctus maximus sed non lectus.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Elevate your online presence with our ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> Beautiful Website Templates</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics about us", "stats": [
    { title: "Offices", amount: "4" },
    { title: "Employees", amount: "248" },
    { title: "Templates", amount: "12" },
    { title: "Awards", amount: "24" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Our templates", "subtitle": "Etiam scelerisque, enim eget vestibulum luctus, nibh mauris blandit nulla, nec vestibulum risus justo ut enim. Praesent lacinia diam et ante imperdiet euismod.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Educational",
      description: "Morbi faucibus luctus quam, sit amet aliquet felis tempor id. Cras augue massa, ornare quis dignissim a, molestie vel nulla.",
      icon: "tabler:template"
    },
    {
      title: "Interior Design",
      description: "Vivamus porttitor, tortor convallis aliquam pretium, turpis enim consectetur elit, vitae egestas purus erat ac nunc nulla.",
      icon: "tabler:template"
    },
    {
      title: "Photography",
      description: "Duis sed lectus in nisl vehicula porttitor eget quis odio. Aliquam erat volutpat. Nulla eleifend nulla id sem fermentum.",
      icon: "tabler:template"
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "E-commerce",
      description: "Rutrum non odio at vehicula. Proin ipsum justo, dignissim in vehicula sit amet, dignissim id quam. Sed ac tincidunt sapien.",
      icon: "tabler:template"
    },
    {
      title: "Blog",
      description: "Nullam efficitur volutpat sem sed fringilla. Suspendisse et enim eu orci volutpat laoreet ac vitae libero.",
      icon: "tabler:template"
    },
    {
      title: "Business",
      description: "Morbi et elit finibus, facilisis justo ut, pharetra ipsum. Donec efficitur, ipsum quis congue luctus, mauris magna.",
      icon: "tabler:template"
    },
    {
      title: "Branding",
      description: "Suspendisse vitae nisi eget tortor luctus maximus sed non lectus. Cras malesuada pretium placerat. Nullam venenatis dolor a ante rhoncus.",
      icon: "tabler:template"
    },
    {
      title: "Medical",
      description: "Vestibulum malesuada lacus id nibh posuere feugiat. Nam volutpat nulla a felis ultrices, id suscipit mauris congue. In hac habitasse platea dictumst.",
      icon: "tabler:template"
    },
    {
      title: "Fashion Design",
      description: "Maecenas eu tellus eget est scelerisque lacinia et a diam. Aliquam velit lorem, vehicula id fermentum et, rhoncus et purus.",
      icon: "tabler:template"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Colorful Image"
  } })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Our values", "subtitle": "Maecenas eu tellus eget est scelerisque lacinia et a diam. Aliquam velit lorem, vehicula id fermentum et, rhoncus et purus. Nulla facilisi. Vestibulum malesuada lacus.", "items": [
    {
      title: "Customer-centric approach",
      description: "Donec id nibh neque. Quisque et fermentum tortor. Fusce vitae dolor a mauris dignissim commodo. Ut eleifend luctus condimentum."
    },
    {
      title: "Constant Improvement",
      description: "Phasellus laoreet fermentum venenatis. Vivamus dapibus pulvinar arcu eget mattis. Fusce eget mauris leo."
    },
    {
      title: "Ethical Practices",
      description: "Vestibulum imperdiet libero et lectus molestie, et maximus augue porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Achievements", "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla.", "isReversed": true, "callToAction": {
    text: "See more",
    href: "/"
  }, "items": [
    {
      title: "Global reach",
      description: "Nam malesuada urna in enim imperdiet tincidunt. Phasellus non tincidunt nisi, at elementum mi.",
      icon: "tabler:globe"
    },
    {
      title: "Positive customer feedback and reviews",
      description: "Cras semper nulla leo, eget laoreet erat cursus sed. Praesent faucibus massa in purus iaculis dictum.",
      icon: "tabler:message-star"
    },
    {
      title: "Awards and recognition as industry experts",
      description: "Phasellus lacinia cursus velit, eu malesuada magna pretium eu. Etiam aliquet tellus purus, blandit lobortis ex rhoncus vitae.",
      icon: "tabler:award"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Our locations", "tagline": "Find us", "columns": 4, "items": [
    {
      title: "EE.UU",
      description: "1234 Lorem Ipsum St, 12345, Miami"
    },
    {
      title: "Spain",
      description: "5678 Lorem Ipsum St, 56789, Madrid"
    },
    {
      title: "Australia",
      description: "9012 Lorem Ipsum St, 90123, Sydney"
    },
    {
      title: "Brazil",
      description: "3456 Lorem Ipsum St, 34567, S\xE3o Paulo"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Technical Support", "tagline": "Contact us", "columns": 2, "items": [
    {
      title: "Chat with us",
      description: "Integer luctus laoreet libero, auctor varius purus rutrum sit amet. Ut nec molestie nisi, quis eleifend mi.",
      icon: "tabler:messages"
    },
    {
      title: "Call us",
      description: "Mauris faucibus finibus orci, in posuere elit viverra non. In hac habitasse platea dictumst. Cras lobortis metus a hendrerit congue.",
      icon: "tabler:headset"
    }
  ] })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/about.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
