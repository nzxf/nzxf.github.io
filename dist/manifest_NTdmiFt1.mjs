import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_BF0ez7UC.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/zan/Code/astro-mbk/","adapterName":"","routes":[{"file":"file:///home/zan/Code/astro-mbk/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/zan/Code/astro-mbk/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/zan/Code/astro-mbk/dist/articles/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/search","isIndex":false,"type":"page","pattern":"^\\/articles\\/search\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/search.astro","pathname":"/articles/search","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/zan/Code/astro-mbk/dist/articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/zan/Code/astro-mbk/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/layouts/MainLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/articles/search.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/search@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/articles/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/zan/Code/astro-mbk/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/articles/search@_@astro":"pages/articles/search.astro.mjs","\u0000@astro-page:src/pages/articles/tag/[...tag]@_@astro":"pages/articles/tag/_---tag_.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_NTdmiFt1.mjs","/home/zan/Code/astro-mbk/src/content/blog/best-laptops-for-developers.md?astroContentCollectionEntry=true":"chunks/best-laptops-for-developers_BMU5Vggv.mjs","/home/zan/Code/astro-mbk/src/content/blog/cannon-excellence.md?astroContentCollectionEntry=true":"chunks/cannon-excellence_BZpwMV__.mjs","/home/zan/Code/astro-mbk/src/content/blog/cutting-edge-tablets.md?astroContentCollectionEntry=true":"chunks/cutting-edge-tablets_C4eDbmsf.mjs","/home/zan/Code/astro-mbk/src/content/blog/elevate-your-mobile-experience.md?astroContentCollectionEntry=true":"chunks/elevate-your-mobile-experience_Sk7IZPCH.mjs","/home/zan/Code/astro-mbk/src/content/blog/guardian-of-the-digital-realm.md?astroContentCollectionEntry=true":"chunks/guardian-of-the-digital-realm_rZGJr28Q.mjs","/home/zan/Code/astro-mbk/src/content/blog/immerse-in-the-virtual-world.md?astroContentCollectionEntry=true":"chunks/immerse-in-the-virtual-world_B386tw31.mjs","/home/zan/Code/astro-mbk/src/content/blog/world-of-drones.md?astroContentCollectionEntry=true":"chunks/world-of-drones_BYuK-RaR.mjs","/home/zan/Code/astro-mbk/src/content/blog/best-laptops-for-developers.md?astroPropagatedAssets":"chunks/best-laptops-for-developers_BKaOVEu3.mjs","/home/zan/Code/astro-mbk/src/content/blog/cannon-excellence.md?astroPropagatedAssets":"chunks/cannon-excellence_BpNHATc8.mjs","/home/zan/Code/astro-mbk/src/content/blog/cutting-edge-tablets.md?astroPropagatedAssets":"chunks/cutting-edge-tablets_DOSFqCsm.mjs","/home/zan/Code/astro-mbk/src/content/blog/elevate-your-mobile-experience.md?astroPropagatedAssets":"chunks/elevate-your-mobile-experience_CNLgEOrI.mjs","/home/zan/Code/astro-mbk/src/content/blog/guardian-of-the-digital-realm.md?astroPropagatedAssets":"chunks/guardian-of-the-digital-realm_D-W5-qL_.mjs","/home/zan/Code/astro-mbk/src/content/blog/immerse-in-the-virtual-world.md?astroPropagatedAssets":"chunks/immerse-in-the-virtual-world_CnN1_VLk.mjs","/home/zan/Code/astro-mbk/src/content/blog/world-of-drones.md?astroPropagatedAssets":"chunks/world-of-drones_BLyusljs.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/zan/Code/astro-mbk/src/content/blog/best-laptops-for-developers.md":"chunks/best-laptops-for-developers_CDez_-uz.mjs","/home/zan/Code/astro-mbk/src/content/blog/cannon-excellence.md":"chunks/cannon-excellence_TRqrHyLm.mjs","/home/zan/Code/astro-mbk/src/content/blog/cutting-edge-tablets.md":"chunks/cutting-edge-tablets_Cl5ELSBB.mjs","/home/zan/Code/astro-mbk/src/content/blog/elevate-your-mobile-experience.md":"chunks/elevate-your-mobile-experience_BPU-AM0G.mjs","/home/zan/Code/astro-mbk/src/content/blog/guardian-of-the-digital-realm.md":"chunks/guardian-of-the-digital-realm_CCWlB4JW.mjs","/home/zan/Code/astro-mbk/src/content/blog/immerse-in-the-virtual-world.md":"chunks/immerse-in-the-virtual-world_qAVOMpq6.mjs","/home/zan/Code/astro-mbk/src/content/blog/world-of-drones.md":"chunks/world-of-drones_Coi0boeU.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/zan/Code/astro-mbk/dist/404.html","/file:///home/zan/Code/astro-mbk/dist/about/index.html","/file:///home/zan/Code/astro-mbk/dist/articles/search/index.html","/file:///home/zan/Code/astro-mbk/dist/articles/index.html","/file:///home/zan/Code/astro-mbk/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"vibYIK7b7JrL8/0yP7pWQnV9rPvVqq9s3oMdTOadaG8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
