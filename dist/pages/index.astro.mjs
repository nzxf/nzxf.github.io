import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_WpKuvie6.mjs';
import { $ as $$Hero } from '../chunks/Hero_DcxZd8gX.mjs';
import { $ as $$Features2 } from '../chunks/Features2_C02ynB8f.mjs';
import { $ as $$Steps } from '../chunks/Steps_DJ8YHRZm.mjs';
import { $ as $$BlogLatestPosts } from '../chunks/BlogLatestPosts_6-VsO7j2.mjs';
import { $ as $$Stats } from '../chunks/Stats_BJ8MGHa3.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CIis6kT8.mjs';
import { $ as $$Brands } from '../chunks/Brands_GRbAmH_O.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_BcIpfXA_.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_BkNQctyn.mjs';
import { $ as $$Button } from '../chunks/Button_C6SC4Iwt.mjs';
import { $ as $$Headline } from '../chunks/Headline_BOMbCEtY.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_BEeci8H8.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D0onLMt1.mjs';
import konstruksi from '../chunks/konstruksi_DngnIEv6.mjs';
import mez from '../chunks/mez_BckpPDIr.mjs';
import kanopi from '../chunks/kanopi_M6ZHQvXl.mjs';
import pagar from '../chunks/pagar_TEEuxaP1.mjs';
import partisi from '../chunks/partisi_CYkHKi17.mjs';
import pintu from '../chunks/pintu_DjxzC4QL.mjs';
import tangga from '../chunks/tangga_C29_CEWk.mjs';
import railing from '../chunks/railing_MVomeBAS.mjs';
import teralis from '../chunks/teralis_CKf3Aqje.mjs';
import logoBi from '../chunks/logoBi_bRPSLyZj.mjs';
import logoBni from '../chunks/logoBni_Sc555YJi.mjs';
import logoBri from '../chunks/logoBri_D7fjcg27.mjs';
import logoAngkasaPura from '../chunks/logoAngkasaPura_D3YNYXUI.mjs';
import logoUmy from '../chunks/logoUmy_IlkfniuL.mjs';
import logoPaBantul from '../chunks/logoPaBantul_kS51TOnz.mjs';
import logoRskbSinduadi from '../chunks/logoRskbSinduadi_tkSN2Oid.mjs';
import logoTarakanita from '../chunks/logoTarakanita_Dpa_Tbca.mjs';
import logoSangTimur from '../chunks/logoSangTimur_zt78EjeF.mjs';
import logoBaleTimoho from '../chunks/logoBaleTimoho_aztiUUfx.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://nzxf.my.id");
const $$Catalog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Catalog;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })}  ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-2 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, image, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => (
    // prices.map(({ title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => (
    renderTemplate`<div class="justify-center col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-100 dark:border-gray-900 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div> ${title2 && renderTemplate`<h3 class="text-center text-2xl lg:text-4xl font-extrabold uppercase leading-9 mb-2">${title2}</h3>`} <div class="flex justify-center my-4 rounded-md"> ${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt || "", "class": " max-w-full mx-auto rounded-md lg:rounded-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 700], "sizes": "(max-width: 700px) 400px, 700px", "width": 400, "height": 700, "loading": "eager", "decoding": "async", "format": "webp" })}`} </div> ${subtitle2 && renderTemplate`<span class="mt-2 font-bold text-muted sm:text-small text-black-400 dark:text-slate-400">${subtitle2}</span>`} <div> <div class="flex items-center justify-center text-center mb-1"> <span class="text 4xl font-bold text-muted">Rp</span> <span class="text-2xl font-bold lg:text-5xl">${price}</span> <span class="text 4xl font-bold text-muted">${period}</span> </div> </div> ${items && renderTemplate`<ul class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
      ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
    )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center my-4`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`
  ))} </div> </div> ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/components/widgets/Catalog.astro", void 0);

const $$Astro = createAstro("https://nzxf.my.id");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "Mitra Bangun Kreasi",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Tanya MBK",
      href: `https://wa.me/6285176712656?text=MBK,%20saya%20mau%20tanya%20...`,
      target: "_blank",
      icon: "tabler:message"
    },
    {
      variant: "primary",
      text: "Jadwalkan Survey",
      href: `https://wa.me/6285176712656?text=MBK,%20saya%20mau%20dijadwalkan%20survey,%20lokasi%20saya%20di...`,
      target: "_blank",
      icon: "tabler:calendar-plus"
    }
    // { text: 'Read More', href: '#features' },
  ] }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Konstruksi Bangunan Berkualitas
` })}${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-red-600 highlight"> Renovasi Yang Berkelas </span> ` })}` })}    ${renderComponent($$result2, "Catalog", $$Catalog, { "title": "Katalog Produk & Jasa Unggulan MBK", "subtitle": "Kualitas Terdepan untuk Kebutuhan Hunian dan Kantor Anda", "tagline": "", "prices": [
    {
      title: "Konstruksi",
      image: {
        src: konstruksi,
        alt: "Image of Konstruksi Bangunan"
      },
      subtitle: "mulai dari",
      price: "3.500.000",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Konstruksi",
        href: "/kategori/konstruksi"
      }
    },
    {
      title: "Mezzanine",
      image: {
        src: mez,
        alt: "Image of Mezzanine"
      },
      subtitle: "mulai dari",
      price: "1.150.000",
      period: "/kg",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Mezzanine",
        href: "/kategori/mezzanine"
      }
    },
    {
      title: "Kanopi/Carport",
      image: {
        src: kanopi,
        alt: "Image of Kanopi/Carport"
      },
      subtitle: "mulai dari",
      price: "450.000",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Kanopi",
        href: "/kategori/kanopi"
      },
      hasRibbon: true,
      ribbonTitle: "Terlaris"
    },
    {
      title: "Pagar Besi",
      image: {
        src: pagar,
        alt: "Image of Pagar Besi"
      },
      subtitle: "mulai dari",
      price: "500.000",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Pagar",
        href: "/kategori/pagar"
      }
    },
    {
      title: "Pintu & Jendela",
      image: {
        src: pintu,
        alt: "Image of Pintu & Jendela"
      },
      subtitle: "mulai dari",
      price: "600.000",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Pintu & Jendela",
        href: "/tag/aluminium"
      }
    },
    {
      title: "Tangga Besi",
      image: {
        src: tangga,
        alt: "Image of Tangga Besi"
      },
      subtitle: "mulai dari",
      price: "1.500.000",
      period: "/m",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Tangga",
        href: "/kategori/tangga"
      }
    },
    {
      title: "Railing",
      image: {
        src: railing,
        alt: "Image of Railing"
      },
      subtitle: "mulai dari",
      price: "450.000",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Railing",
        href: "/kategori/railing"
      },
      hasRibbon: true
      // ribbonTitle: 'Termurah',
    },
    {
      title: "Teralis",
      image: {
        src: teralis,
        alt: "Image of Teralis"
      },
      subtitle: "mulai dari",
      price: "400.000",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Teralis",
        href: "/tag/teralis"
      }
    },
    {
      title: "Partisi & Plafon",
      image: {
        src: partisi,
        alt: "Image of Partisi/Sekat Dinding"
      },
      subtitle: "mulai dari",
      price: "124.500",
      period: "/m\xB2",
      callToAction: {
        target: "_blank",
        text: "Lihat Katalog Partisi",
        href: "/kategori/partisi"
      },
      hasRibbon: true
      // ribbonTitle: 'Termurah',
    }
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Our Valued Clients", "subtitle": "Kami Bangga Menjadi Bagian dari Perjalanan Mereka", "icons": [], "images": [
    {
      src: logoBi,
      alt: "Bank Indonesia"
    },
    {
      src: logoBni,
      alt: "Bank BNI"
    },
    {
      src: logoBri,
      alt: "Bank BRI"
    },
    {
      src: logoAngkasaPura,
      alt: "Angkasa Pura"
    },
    {
      src: logoUmy,
      alt: "Universitas Muhammadiyah Yogyakarta"
    },
    {
      src: logoPaBantul,
      alt: "Pengadilan Agama Bantul"
    },
    {
      src: logoRskbSinduadi,
      alt: "Rumah Sakit Khusus Bedah Sinduadi"
    },
    {
      src: logoTarakanita,
      alt: "Yayasan Tarakanita"
    },
    {
      src: logoSangTimur,
      alt: "Yayasan Sang Timur"
    },
    {
      src: logoBaleTimoho,
      alt: "Bale Timoho Resto"
    }
  ] })}          ${renderComponent($$result2, "Steps", $$Steps, { "title": "Tahapan Transaksi dengan Mitra Bangun Kreasi", "items": [
    {
      title: 'Step 1: <span class="font-medium">Konsultasi</span>',
      description: "Konsultasi via secara langsung maupun online dengan project manager MBK",
      icon: "tabler:brand-hipchat"
    },
    {
      title: 'Step 2: <span class="font-medium">Survey Lokasi</span>',
      description: "Pengecekan keadaan di lokasi dan pengukuran yang dilakukan oleh teknisi/tim ahli MBK.",
      icon: "tabler:map-2"
    },
    {
      title: 'Step 3: <span class="font-medium">Pembuatan RAB</span>',
      description: "Pembuatan surat dan isian rencana anggaran",
      icon: "tabler:checklist"
    },
    {
      title: 'Step 4: <span class="font-medium">Pembayaran</span>',
      description: "Sesuai dengan sistem dan tahapan pembayaran yang telah disepakati kedua belah pihak",
      icon: "tabler:cash"
    },
    {
      title: 'Step 5: <span class="font-medium">Pengerjaan</span>',
      description: "Proses pengerjaan project mulai dari fabrikasi, pengiriman dan instalasi.",
      icon: "tabler:crane"
    },
    {
      title: 'Step 5: <span class="font-medium">Done!</span>',
      icon: "tabler:rosette-discount-check"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Kenapa Mitra Bangun Kreasi (MBK)?", "subtitle": "Dengan pengalaman bertahun-tahun dalam industri konstruksi dan renovasi, kami selalu berkomitmen untuk memberikan hasil terbaik.", "tagline": "", "columns": 3, "items": [
    {
      title: "Katalog Lengkap & Banyak Model",
      description: "Tersedia banyak pilihan model pagar, kanopi, tangga, pintu, dan partisi yang bisa disesuaikan dengan gaya bangunan dan kebutuhan Anda.",
      icon: "flat-color-icons:gallery"
    },
    {
      title: "Harga Bersahabat",
      description: "Harga kompetitif dengan kualitas premium. Cocok untuk proyek pribadi maupun komersial dengan anggaran yang fleksibel.",
      icon: "flat-color-icons:currency-exchange"
    },
    {
      title: "Legal & Terdaftar",
      description: "Usaha kami resmi, memiliki legalitas yang jelas dan terdaftar \u2014 memberikan rasa aman dan kepercayaan penuh bagi setiap klien.",
      icon: "flat-color-icons:approval"
    },
    {
      title: "Pelayanan Profesional",
      description: "Tim yang komunikatif, ramah, dan detail membuat klien merasa nyaman dan percaya karena mendapatkan solusi sesuai kebutuhan.",
      icon: "flat-color-icons:advertising"
    },
    {
      title: "Terpercaya & Banyak Repeat Order",
      description: "Banyak klien puas dan kembali menggunakan jasa kami \u2014 mulai dari pemilik rumah hingga developer dan kantor profesional.",
      icon: "flat-color-icons:voice-presentation"
    },
    {
      title: "Fast Response",
      description: "Tim customer service kami siap merespons dengan cepat dan membantu setiap pertanyaan atau permintaan Anda tanpa menunggu lama.",
      icon: "flat-color-icons:business-contact"
    },
    {
      title: "Material Berkualitas",
      description: "Menggunakan material terbaik yang kuat, tahan lama, dan aman untuk penggunaan jangka panjang."
    },
    {
      title: "Pemasangan Cepat & Rapi",
      description: "Proses pengerjaan dilakukan dengan cepat, bersih, dan tepat waktu tanpa mengganggu lingkungan sekitar, memberikan hasil maksimal."
    },
    {
      title: "Pelayanan Profesional",
      description: "Tim yang komunikatif, ramah, dan detail membuat klien merasa nyaman dan percaya karena mendapatkan solusi sesuai kebutuhan."
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}    ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "Tahun Pengalaman", amount: "13" },
    { title: "Project Selesai", amount: "1739" },
    { title: "Total Review", amount: "481" },
    { title: "Variasi Produk", amount: "292" }
  ] })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Testimoni", "subtitle": "Feedback dan testimoni dari pelanggan merupakan jalan kami untuk menjamin kepuasan, membangun kepercayaan, dan meningkatkan kualitas layanan kami.", "testimonials": [
    {
      "testimonial": "Desain pagarnya minimalis dan rapi banget. Kualitas bahan terasa kokoh, dan finishing-nya terlihat premium. Proses pemasangannya juga cepat dan bersih. Puas banget hasilnya!",
      "name": "Bapak Arya S.",
      "job": "Pogung Baru, Sleman"
      // "image": {
      //   "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
      //   "alt": "Budi Santoso Image"
      // }
    },
    {
      "testimonial": "Kanopi alderon dari mereka benar-benar sesuai ekspektasi. Tidak hanya fungsional melindungi dari hujan dan panas, tapi tampilannya juga menyatu dengan desain rumah. Rekomended!",
      "name": "Mbak Rina",
      "job": "Bambanglipuro, Bantul"
    },
    {
      "testimonial": "Tangga custom yang mereka buat sangat presisi dan kuat. Desainnya modern, cocok banget untuk interior rumah kami yang minimalis. Timnya juga komunikatif dan detail.",
      "name": "Pak Dimas",
      "job": "Mantrijeron, Yogyakarta"
    },
    {
      "testimonial": "Pintu dan jendela aluminium kacanya kelihatan mewah tapi harganya gak bikin kaget. Pemasangan cepat dan rapi. Udara dan cahaya masuk maksimal, rumah jadi terasa lega dan terang.",
      "name": "Ibu Lestari",
      "job": "Maguwoharjo"
    },
    {
      "testimonial": "Partisi kaca tempered bikin ruangan kantor kami kelihatan lebih luas dan profesional. Materialnya tebal dan aman, tidak gampang pecah. Finishing sangat halus.",
      "name": "Bapak Johan ",
      "job": "Owner Kantor Konsultan"
    },
    {
      "testimonial": "Kami sudah beberapa kali pesan pagar, kanopi, dan kaca di sini. Selalu puas dengan kualitas dan pelayanan. Mereka benar-benar ngerti kebutuhan klien dan kasih solusi yang pas.",
      "name": "Pak Tommy",
      "job": "Developer Perumahan"
    }
  ] })}   ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "Cari Tahu Lebih Banyak Tentang Konstruksi", "information": `Kami akan terus mengupdate blog dan produk berdasarkan trend terbaru` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Hubungi MBK",
      href: "https://wa.me/6285176712656?text=MBK,%20saya%20punya%20budget%20sekitar...",
      target: "_blank",
      icon: "tabler:brand-whatsapp"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
MBK bisa bantu anda memaksimalkan penggunaan budget yang ada.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Punya budget terbatas?<br class="block sm:hidden"><span class="sm:whitespace-nowrap"></span> ` })}` })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/index.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
