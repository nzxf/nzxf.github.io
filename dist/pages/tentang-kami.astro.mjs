import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_C02ynB8f.mjs';
import { $ as $$Hero } from '../chunks/Hero_DcxZd8gX.mjs';
import { $ as $$Stats } from '../chunks/Stats_BJ8MGHa3.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_WpKuvie6.mjs';
export { renderers } from '../renderers.mjs';

const $$TentangKami = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "About us"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Tentang Kami" }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Mitra Bangun Kreasi (MBK) adalah perusahaan asal Yogyakarta yang telah berpengalaman lebih dari belasan tahun di bidang konstruksi. Selama perjalanan kami, MBK telah berhasil menyelesaikan ratusan proyek konstruksi, baik di wilayah Yogyakarta maupun di berbagai daerah lainnya. Kami didukung oleh tim profesional yang ahli dan berpengalaman di bidangnya masing-masing, sehingga mampu memberikan hasil kerja yang optimal dan berkualitas.
${maybeRenderHead()}<br> ` })}${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <br> <span class="text-accent dark:text-white highlight">Dalam setiap pelaksanaan proyek, MBK selalu berkomitmen untuk menjalankan operasional sesuai dengan standar regulasi pemerintah, khususnya dalam hal kesehatan, keselamatan, dan keamanan kerja (K3), demi terciptanya lingkungan kerja yang aman dan bertanggung jawab.</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Mitra Bangun Kreasi  – <br> <span class="text-accent dark:text-white highlight">Profesionalisme dalam Konstruksi Selama Lebih dari 13 Tahun</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistik Kami", "stats": [
    { title: "Kantor & Workshop", amount: "4" },
    { title: "Teknisi", amount: "23" },
    { title: "Produk", amount: "292" },
    { title: "Project Selesai", amount: "1739" }
  ] })} ${renderComponent($$result2, "Features2", $$Features2, { "title": "Lokasi Kami", "tagline": "Find us", "columns": 4, "items": [
    {
      title: "Kantor Utama (Buka)",
      description: "Lantai II, RT 003 RW 000 Trukan, Sriharjo, Bantul, D.I. Yogyakarta"
    },
    {
      title: "Workshop (Buka)",
      description: "Trukan, Sriharjo, Bantul, D.I. Yogyakarta"
    },
    {
      title: "Kantor Representatif (Under maintenance)",
      description: "Pleret, Banguntapan, Bantul, D.I. Yogyakarta"
    },
    {
      title: "Kantor Pemasaran (Temporarily Closed)",
      description: "Pogung Lor, Sinduadi, Mlati, Sleman, D.I. Yogyakarta"
    }
  ] })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Layanan Pelanggan", "tagline": "Contact us", "columns": 2, "items": [
    {
      title: "Whatsapp",
      description: "0851 7671 2656",
      icon: "tabler:brand-whatsapp"
    },
    {
      title: "Instagram",
      description: "@mitrabangunkreasi",
      icon: "tabler:brand-instagram"
    },
    {
      title: "Tiktok",
      description: "@mitrabangunkreasi",
      icon: "tabler:brand-tiktok"
    },
    {
      title: "Youtube",
      description: "@mitrabangunkreasi",
      icon: "tabler:brand-youtube"
    },
    {
      title: "Facebook",
      description: "@mitrabangunkreasi",
      icon: "tabler:brand-facebook"
    },
    {
      title: "Website",
      description: "mitrabangunkreasi.com",
      icon: "tabler:world-www"
    }
  ] })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/tentang-kami.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/tentang-kami.astro";
const $$url = "/tentang-kami";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TentangKami,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
