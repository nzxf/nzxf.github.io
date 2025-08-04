import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, s as spreadAttributes, a as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_N2fU7d_w.mjs';
import { $ as $$Icon, a as $$ToggleTheme } from './ToggleTheme_BkNQctyn.mjs';
import { $ as $$Logo } from './Logo_uAg2_iVI.mjs';
import 'clsx';
import { t as trimSlash, g as getHomePermalink, S as SITE, a as getPermalink } from './permalinks_C997oDUF.mjs';

const $$Astro$3 = createAstro("https://nzxf.my.id");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/home/zan/Code/nzxf.github.io/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$2 = createAstro("https://nzxf.my.id");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    // actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    // showRssFeed = true,
    showWhatsapp = true,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full",
    {
      "md:flex md:justify-between": position !== "center"
    },
    {
      "md:grid md:grid-cols-3 md:items-center": position === "center"
    },
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full justify-self-start md:w-auto hidden md:flex md:mx-5 text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-start" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button type="button" class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"> ${text}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showWhatsapp && renderTemplate`<a href="https://wa.me/6285176712656?text=MBK,%20saya%20mau%20survey%20..." class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-5 h-5" })} </a>`} <!-- {
            showRssFeed && (
              <a
                class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                aria-label="RSS Feed"
                href={getAsset('/rss.xml')}
              >
                <Icon name="tabler:rss" class="w-5 h-5" />
              </a>
            )
          } --> </div> <!-- Download Button --> <!-- {
          actions?.length ? (
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
              {actions.map((btnProps) => (
                <Button {...btnProps} class="ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" />
              ))}
            </span>
          ) : (
            ''
          )
        } --> </div> </div> </div> </header>`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Header.astro", void 0);

const $$Astro$1 = createAstro("https://nzxf.my.id");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300 intersect-once intersect-quarter intercept-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}>${SITE?.name}</a> </div> <div class="text-sm text-muted flex gap-1"> ${secondaryLinks.map(({ text, href }, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index !== 0 ? " \xB7 " : ""}<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"${addAttribute(href, "href")}>${unescapeHTML(text)}</a> ` })}`)} </div> </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")}> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Footer.astro", void 0);

const headerData = {
  links: [
    // {
    //   text: 'Home',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Product',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Portofolio',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Service',
    //   links: [
    //     {
    //       text: 'Semua Post',
    //       href: getBlogPermalink(),
    //     },
    //     {
    //       text: 'Kategori: Blog',
    //       href: getPermalink('tutorials', 'kategori'),
    //     },
    //     {
    //       text: 'Kategori: Produk & Jasa',
    //       href: getPermalink('produk-and-jasa', 'kategori'),
    //     },
    //     {
    //       text: 'Article',
    //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    //     },
    //     {
    //       text: 'Article (with MDX)',
    //       href: getPermalink('markdown-elements-demo-post', 'post'),
    //     },
    //     {
    //       text: 'Tag Page',
    //       href: getPermalink('astro', 'tag'),
    //     },
    //   ],
    // },
    // {
    //   text: "Kategori",
    //   links: [
    //     {
    //       text: 'Article',
    //       href: getPermalink('kategori/article')
    //     },
    //     {
    //       text: 'Jasa',
    //       href: getPermalink('kategori/service')
    //     },
    //     {
    //       text: 'Produk',
    //       href: getPermalink('kategori/product')
    //     },
    //     {
    //       text: 'Properti',
    //       href: getPermalink('kategori/property')
    //     },
    //   ]
    // },
    // {
    //   text: 'Produk & Jasa',
    //   href: getPermalink('/kategori/produk-and-jasa'),
    // },
    // {
    //   text: 'Blog',
    //   href: getPermalink('/kategori/blog'),
    // },
    {
      text: "Home",
      href: getPermalink("/")
    },
    // {
    //   text: 'Jasa',
    //   href: getPermalink('/kategori/jasa')
    // },
    {
      text: "Katalog Produk",
      links: [
        {
          text: "Konstruksi",
          href: getPermalink("/kategori/konstruksi")
        },
        {
          text: "Kanopi",
          href: getPermalink("/kategori/kanopi")
        },
        {
          text: "Pagar",
          href: getPermalink("/kategori/pagar")
        },
        {
          text: "Mezzanine",
          href: getPermalink("/kategori/mezzanine")
        },
        {
          text: "Rangka",
          href: getPermalink("/kategori/rangka")
        },
        {
          text: "Partisi",
          href: getPermalink("/kategori/partisi")
        }
      ]
    },
    {
      text: "Properti",
      href: getPermalink("/kategori/properti")
    },
    {
      text: "Blog",
      href: getPermalink("/kategori/blog")
    },
    {
      text: "Tentang",
      links: [
        {
          text: "Kontak",
          href: getPermalink("/kontak")
        },
        {
          text: "Alamat",
          href: getPermalink("/alamat")
        },
        {
          text: "Sosial Media",
          href: getPermalink("/sosial")
        },
        {
          text: "Testimoni",
          href: getPermalink("/testimoni")
        },
        {
          text: "Klien",
          href: getPermalink("/klien")
        }
      ]
    }
  ],
  actions: [{ text: "Whatsapp", href: "https://wa.me/6285176712656", target: "_blank" }]
};
const footerData = {
  links: [
    {
      title: "Konstruksi",
      links: [
        { text: "Rumah", href: "#" },
        { text: "Kos-kosan", href: "#" },
        { text: "Gudang", href: "#" },
        { text: "GOR", href: "#" },
        { text: "Kantor", href: "#" }
      ]
    },
    {
      title: "Produk",
      links: [
        { text: "Kanopi/carport", href: "/kategori/kanopi" },
        { text: "Pagar Besi", href: "/kategori/pagar" },
        { text: "Mezzanine", href: "/kategori/mezzanine" },
        { text: "Rangka Atap", href: "/kategori/rangka" },
        { text: "Sekat/Partisi", href: "/kategori/partisi" }
      ]
    },
    // {
    //   title: 'Jasa',
    //   links: [
    //     { text: 'PBG', href: '#' },
    //     { text: 'SLF', href: '#' },
    //     { text: 'KRK', href: '#' },
    //   ],
    // },
    {
      title: "Properti",
      links: [
        { text: "Rumah", href: "#" },
        { text: "Toko", href: "#" },
        { text: "Ruko", href: "#" },
        { text: "Gazebo", href: "#" },
        { text: "Gudang", href: "#" }
      ]
    }
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") }
  ],
  socialLinks: [
    { ariaLabel: "X", icon: "tabler:brand-x", href: "https://x.com/mbangunkreasi" },
    { ariaLabel: "Instagram", icon: "tabler:brand-instagram", href: "https://www.instagram.com/mitrabangunkreasi/" },
    { ariaLabel: "Tiktok", icon: "tabler:brand-tiktok", href: "https://www.tiktok.com/@mitrabangunkreasi" },
    { ariaLabel: "Youtube", icon: "tabler:brand-youtube", href: "http://www.youtube.com/@mitrabangunkreasi" }
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://m.facebook.com/people/Mitra-Bangun-Kreasi/61564505944795/' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  Made by <a class="text-blue-600 underline dark:text-muted" href="https://nzxf.my.id/"> nzxf </a> · All rights reserved.
  `
};

const $$Astro = createAstro("https://nzxf.my.id");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showToggleTheme": true })} <!-- <Header {...headerData} isSticky showRssFeed showToggleTheme /> --> `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, $$Header as a, headerData as h };
