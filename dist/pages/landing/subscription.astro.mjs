import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_Blj49uai.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from '../../chunks/LandingLayout_DryqVA6r.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_CS9fzQ9I.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_BcIpfXA_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Subscription = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Subscription Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Subscription Landing Demo", "title": "Subscription Landing Page: Turn Casual Browsers into Loyal Subscribers!", "subtitle": "Unlock the formula for a Subscription Landing Page that keeps your audience coming back for more.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Ironic image associated with canceling a subscription. Subscription Landing Page Demo"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/home/zan/Code/nzxf.github.io/src/pages/landing/subscription.astro", void 0);

const $$file = "/home/zan/Code/nzxf.github.io/src/pages/landing/subscription.astro";
const $$url = "/landing/subscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Subscription,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
