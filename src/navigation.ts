// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink } from './utils/permalinks';

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
      text: 'Katalog Produk',
      links: [
        {
          text: 'Konstruksi',
          href: getPermalink('/kategori/konstruksi')
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
          text: 'Mezzanine',
          href: getPermalink('/kategori/mezzanine')
        },
        {
          text: 'Rangka',
          href: getPermalink('/kategori/rangka')
        },
        {
          text: 'Partisi',
          href: getPermalink('/kategori/partisi')
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
        { text: 'Rumah', href: '#' },
        { text: 'Kos-kosan', href: '#' },
        { text: 'Gudang', href: '#' },
        { text: 'GOR', href: '#' },
        { text: 'Kantor', href: '#' },
      ],
    },
    {
      title: 'Produk',
      links: [
        { text: 'Kanopi/carport', href: '/kategori/kanopi' },
        { text: 'Pagar Besi', href: '/kategori/pagar' },
        { text: 'Mezzanine', href: '/kategori/mezzanine' },
        { text: 'Rangka Atap', href: '/kategori/rangka' },
        { text: 'Sekat/Partisi', href: '/kategori/partisi' },
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
      title: 'Properti',
      links: [
        { text: 'Rumah', href: '#' },
        { text: 'Toko', href: '#' },
        { text: 'Ruko', href: '#' },
        { text: 'Gazebo', href: '#' },
        { text: 'Gudang', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/mbangunkreasi' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mitrabangunkreasi/' },
    { ariaLabel: 'Tiktok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@mitrabangunkreasi' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'http://www.youtube.com/@mitrabangunkreasi' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://m.facebook.com/people/Mitra-Bangun-Kreasi/61564505944795/' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  Made by <a class="text-blue-600 underline dark:text-muted" href="https://nzxf.my.id/"> nzxf </a> · All rights reserved.
  `,
};

// <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>