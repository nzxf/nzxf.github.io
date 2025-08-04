import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, F as Fragment } from './astro/server_Blj49uai.mjs';
import { f as findImage, i as isUnpicCompatible, g as getImagesOptimized, u as unpicOptimizer, a as astroAsseetsOptimizer } from './Layout_N2fU7d_w.mjs';

const $$Astro = createAstro("https://nzxf.my.id");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://")) && isUnpicCompatible(_image)) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")} crossorigin="anonymous" referrerpolicy="no-referrer"${spreadAttributes(image.attributes)}>`}`;
}, "/home/zan/Code/nzxf.github.io/src/components/common/Image.astro", void 0);

export { $$Image as $ };
