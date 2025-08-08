import { c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_WpKuvie6.mjs';
import { $ as $$Hero } from '../chunks/Hero_DcxZd8gX.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CIis6kT8.mjs';
export { renderers } from '../renderers.mjs';

const $$Testimoni = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Testimoni"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Testimoni", "image": {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Caos Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Donec efficitur, ipsum quis congue luctus, mauris magna convallis mauris, eu auctor nisi lectus non augue. Donec
      quis lorem non massa vulputate efficitur ac at turpis. Sed tincidunt ex a nunc convallis, et lobortis nisi tempus.
      Suspendisse vitae nisi eget tortor luctus maximus sed non lectus.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Elevate your online presence with our ${maybeRenderHead()}<br> <span class="text-accent dark:text-white highlight"> Beautiful Website Templates</span> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Testimoni", "subtitle": "Feedback dan testimoni dari pelanggan merupakan jalan kami untuk menjamin kepuasan, membangun kepercayaan, dan meningkatkan kualitas layanan kami.", "testimonials": [
    {
      "testimonial": "Wah, aku baru pakai Mitra Bangun Kreasi buat renovasi rumah. Hasilnya? Kualitasnya juara! Materialnya bagus banget, dan pengerjaannya sangat rapi. Bener-bener recommended!",
      "name": "Dewi Sari",
      "job": "Jl. Gejayan No. 17, Kota Yogyakarta, DI Yogyakarta",
      "image": {
        "src": "~/assets/images/product/product1.png",
        "alt": "Dewi Sari Image"
      }
    },
    {
      "testimonial": "Tim di MBK itu profesional banget! Dari awal sampai akhir, mereka komunikatif dan selalu kasih update. Pokoknya, kerjaan mereka mantap! \u{1F64C}",
      "name": "Budi Santoso",
      "job": "Jl. Panembahan Senopati No. 17, Ngupasan, Kota Yogyakarta, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Budi Santoso Image"
      }
    },
    {
      "testimonial": "Jujur, harga di Mitra Bangun Kreasi itu oke banget! Mereka kasih penawaran yang jelas tanpa biaya tersembunyi. Kerja cepat dan efisien, jadi nilai lebih buat dompet saya.",
      "name": "Rina Lestari",
      "job": "Jl. Prawirotaman No. 12, Kota Yogyakarta, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Rina Lestari Image"
      }
    },
    {
      "testimonial": "Saya seneng banget sama layanan pelanggan di MBK. Mereka ramah dan cepat tanggap! Gak nyangka bisa dapet pelayanan sebaik ini di dunia konstruksi.",
      "name": "Andi Prasetyo",
      "job": "Jl. Suryodiningratan No. 45, Kota Yogyakarta, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Andi Prasetyo Image"
      }
    },
    {
      "testimonial": "Proyek saya dengan Mitra Bangun Kreasi ini bener-bener bisa diandalkan. Selesai lebih cepat dari yang direncanakan! Mereka bisa adaptasi dengan baik saat ada masalah. Keren deh!",
      "name": "Siti Aminah",
      "job": "Jl. Cendana No. 33, Gunungkidul, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Siti Aminah Image"
      }
    },
    {
      "testimonial": "Hasil akhir dek baru saya itu cakep banget! Detailnya diperhatikan dengan baik. Temen-temen pada bilang, 'Wah, ini sih bikin betah nongkrong!' Terima kasih ya!",
      "name": "Rudi Hartono",
      "job": "Jl. Sugeng Riyadi No. 21, Bantul, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Rudi Hartono Image"
      }
    },
    {
      "testimonial": "Staf di Mitra Bangun Kreasi itu berpengalaman banget soal material dan teknik bangunan. Mereka bantu saya milih produk yang pas, jadi saya merasa yakin deh sama pilihan saya. \u{1F3E1}\u2728",
      "name": "Lina Widiastuti",
      "job": "Jl. Gejayan No. 15, Sleman, Kota Yogyakarta, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Lina Widiastuti Image"
      }
    },
    {
      "testimonial": "Saya merasa MBK itu terpercaya banget. Mereka datang tepat waktu dan kerja sesuai janji. Gak nyesel deh milih mereka!",
      "name": "Toni Nugroho",
      "job": "Jl. Tamansiswa No. 5, Kulon Progo, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Toni Nugroho Image"
      }
    },
    {
      "testimonial": "Saya butuh solusi kustom untuk ruang unik saya, dan Mitra Bangun Kreasi berhasil banget! Mereka dengerin ide-ide saya dan mewujudkannya dengan sempurna. Sumpah, puas banget!",
      "name": "Fani Nursyifa",
      "job": "Jl. Poncowinatan No. 15, Kulon Progo, DI Yogyakarta",
      "image": {
        "src": "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        "alt": "Fani Nursyifa Image"
      }
    }
  ] })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/testimoni.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/testimoni.astro";
const $$url = "/testimoni";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimoni,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
