// import { getBlogPermalink } from './utils/permalinks';
import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
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
      text: 'Home',
      href: getPermalink('/')
    },
    // {
    //   text: 'Jasa',
    //   href: getPermalink('/kategori/jasa')
    // },
    {
      text: 'Katalog',
      links: [
        {
          text: 'Konstruksi',
          href: getPermalink('/kategori/konstruksi')
        },
        {
          text: 'Mezzanine',
          href: getPermalink('/kategori/mezzanine')
        },
        {
          text: 'Kanopi',
          href: getPermalink('/kategori/kanopi')
        },
        {
          text: 'Pagar',
          href: getPermalink('/kategori/pagar')
        },
        {
          text: 'Pintu & Jendela',
          href: getPermalink('/kategori/pintu-and-jendela')
        },
        {
          text: 'Tangga',
          href: getPermalink('/kategori/tangga')
        },
        {
          text: 'Teralis',
          href: getPermalink('/kategori/teralis')
        },
        {
          text: 'Railing',
          href: getPermalink('/kategori/railing')
        },
        {
          text: 'Partisi',
          href: getPermalink('/kategori/partisi')
        },
        {
          text: 'Plafon',
          href: getPermalink('/kategori/plafon')
        },
        {
          text: 'Fasad',
          href: getPermalink('/kategori/fasad')
        },
        {
          text: 'Interior',
          href: getPermalink('/kategori/interior')
        },
        {
          text: 'Semua Katalog',
          href: getPermalink('/katalog')
        },
        
      ]
    },
    {
      text: 'Properti',
      href: getPermalink('/kategori/properti')
    },
    {
      text: 'Blog',
      href: getPermalink('/kategori/blog')
    },
    {
      text: 'Tentang Kami',
      href: getPermalink('/tentang-kami')
    }
    // {
    //   text: 'Tentang',
    //   links: [
    //     {
    //       text: 'Kontak',
    //       href: getPermalink('/kontak')
    //     },
    //     {
    //       text: 'Alamat',
    //       href: getPermalink('/alamat')
    //     },
    //     {
    //       text: 'Sosial Media',
    //       href: getPermalink('/sosial')
    //     },
    //     {
    //       text: 'Testimoni',
    //       href: getPermalink('/testimoni')
    //     },
    //     {
    //       text: 'Klien',
    //       href: getPermalink('/klien')
    //     },
        
    //   ]
    // },
  ],
  actions: [{ text: 'Whatsapp', href: 'https://wa.me/6285176712656', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Konstruksi',
      links: [
        { text: 'Rumah', href: '/kategori/konstruksi' },
        { text: 'Kos-kosan', href: '/kategori/konstruksi' },
        { text: 'Gudang', href: '/kategori/konstruksi' },
        { text: 'Pabrik', href: '/kategori/konstruksi' },
        { text: 'Lapangan', href: '/kategori/konstruksi' },
      ],
    },
    {
      title: 'Besi',
      links: [
        { text: 'Kanopi/carport', href: '/kategori/kanopi' },
        { text: 'Pagar Besi', href: '/kategori/pagar' },
        { text: 'Mezzanine', href: '/kategori/mezzanine' },
        { text: 'Tangga', href: '/kategori/tangga' },
        { text: 'Teralis', href: '/kategori/teralis' },
      ],
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
      title: 'Aluminium',
      links: [
        { text: 'Pintu', href: '/kategori/pintu-and-jendela' },
        { text: 'Jendela', href: '/kategori/pintu-and-jendela' },
        { text: 'Kaca Mati', href: '/kategori/pintu-and-jendela' },
        { text: 'Partisi', href: '/kategori/pintu-and-jendela' },
        { text: 'Ventilasi', href: '/kategori/pintu-and-jendela' },
      ],
    },
    {
      title: 'Stainless',
      links: [
        { text: 'Pagar', href: '/tag/stainless-steel' },
        { text: 'Teralis', href: '/kategori/stainless-steel' },
        { text: 'Partisi', href: '/kategori/stainless-steel' },
        { text: 'Kanopi', href: '/kategori/stainless-steel' },
        { text: 'Pintu', href: '/kategori/stainless-steel' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/6285176712656' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mitrabangunkreasi/' },
    { ariaLabel: 'Tiktok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@mitrabangunkreasi' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'http://www.youtube.com/@mitrabangunkreasi' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://m.facebook.com/people/Mitra-Bangun-Kreasi/61564505944795/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/mbangunkreasi' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  Made by <a class="text-blue-600 underline dark:text-muted"> Zan </a> · All rights reserved.
  `,
};

// <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>