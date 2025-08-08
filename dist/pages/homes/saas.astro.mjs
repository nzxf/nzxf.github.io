import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { a as $$Header, h as headerData, $ as $$PageLayout } from '../../chunks/PageLayout_WpKuvie6.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_CS9fzQ9I.mjs';
import { $ as $$BlogLatestPosts } from '../../chunks/BlogLatestPosts_6-VsO7j2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://nzxf.my.id");
const $$Saas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Saas;
  const metadata = {
    title: "Kanopi & Carport"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "MBK - KK009", "actions": [
    { variant: "primary", target: "_blank", text: "Pesan Sekarang", href: "https://wa.me/6285176712656?text=MBK,%20saya%20mau%20pesan%20KK009" }
  ], "image": {
    src: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/9/3/edd2e1d6-7992-40a6-9ed0-4dad23fb4638.png",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span>Rp<strong>600.000</strong>/m2</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Kanopi/Carport <br>Rangka Besi Hollow 40x60 <br>Atap Alderon Double Layer
` })}` })} ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "SaaS Web Demo", "actions": [
    { variant: "primary", target: "_blank", text: "Get Started", href: "https://github.com/onwidget/astrowind" },
    { text: "Learn more", href: "#features" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <span class="hidden sm:inline">
Elevate your website creation process with <span class="font-semibold">AstroWind</span>'s SaaS solutions.</span>
Seamlessly blend the power of Astro 4.0 and Tailwind CSS to craft websites that resonate with your brand and audience.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Simplify web design with Astrowind: <br> your ultimate <span class="text-accent dark:text-white highlight">SaaS</span> companion<br> ` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Stay informed with AstroWind's blog", "information": `Explore our collection of articles, guides, and tutorials on web development, design trends, and using AstroWind effectively for your projects.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { ...headerData, "actions": [
    {
      variant: "secondary",
      text: "Login",
      href: "#"
    },
    {
      variant: "primary",
      text: "Sign Up",
      href: "#"
    }
  ], "isSticky": true })} ` })}` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/homes/saas.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/homes/saas.astro";
const $$url = "/homes/saas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Saas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
