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
    //       href: getPermalink('tutorials', 'category'),
    //     },
    //     {
    //       text: 'Kategori: Produk & Jasa',
    //       href: getPermalink('produk-and-jasa', 'category'),
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
    //       href: getPermalink('category/article')
    //     },
    //     {
    //       text: 'Jasa',
    //       href: getPermalink('category/service')
    //     },
    //     {
    //       text: 'Produk',
    //       href: getPermalink('category/product')
    //     },
    //     {
    //       text: 'Properti',
    //       href: getPermalink('category/property')
    //     },
    //   ]
    // },
    // {
    //   text: 'Produk & Jasa',
    //   href: getPermalink('/category/produk-and-jasa'),
    // },
    // {
    //   text: 'Blog',
    //   href: getPermalink('/category/blog'),
    // },
    {
      text: 'Home',
      href: getPermalink('/')
    },
    {
      text: 'Jasa',
      href: getPermalink('category/jasa')
    },
    {
      text: 'Produk',
      links: [
        {
          text: 'Kanopi',
          href: getPermalink('/produk/kanopi')
        },
        {
          text: 'Pagar',
          href: getPermalink('/produk/kanopi')
        },
        {
          text: 'Rangka Atap',
          href: getPermalink('/produk/kanopi')
        },
        {
          text: 'Partisi',
          href: getPermalink('/produk/kanopi')
        },
        
      ]
    },
    {
      text: 'Properti',
      href: getPermalink('category/properti')
    },
    {
      text: 'Blog',
      href: getPermalink('category/blog')
    },
    {
      text: 'Tentang',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Whatsapp', href: 'https://wa.me/6285176712656', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
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