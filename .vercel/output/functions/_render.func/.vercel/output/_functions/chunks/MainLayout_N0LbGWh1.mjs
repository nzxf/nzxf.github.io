import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, u as unescapeHTML, a as addAttribute, i as renderSlot, j as renderHead, d as createAstro } from './astro/server_CHXB-JrG.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_BTSe9nkA.mjs';
import 'clsx';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_XoVqVOaB.mjs';
import * as devalue from 'devalue';

const SITE_TITLE = "Mitra Bangun Kreasi";
const SITE_DESCRIPTION = "Solusi Bangun & Renovasi Rumah Anda";
const HOMEPAGE_ARTICLE_LIMIT = 6;
const ARTICLES_PER_PAGE = 6;

const logo = new Proxy({"src":"/_astro/logo.CaZGDSfV.svg","width":2433,"height":2517,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/images/logo.svg";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-900 text-white"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "class": "h-14", "alt": "TechPeople Logo", "width": 55, "height": 55 })} <span class="self-center text-3xl font-semibold whitespace-nowrap">MITRA<span class="text-red-500">BANGUN</span>KREASI</span> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default"> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 text-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700"> <li> <a href="/" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400" aria-current="page">Home</a> </li> <li> <a href="/articles/" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400">All Articles</a> </li> <li> <a href="/about/" class="block py-2 px-3 text-white rounded md:p-0 hover:text-indigo-400">About</a> </li> </ul> </div> </div> </nav>`;
}, "/home/zan/Code/nzxf.github.io/src/components/Navbar.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/best-laptops-for-developers.md": () => import('./best-laptops-for-developers_C2tCmgIv.mjs'),"/src/content/blog/cannon-excellence.md": () => import('./cannon-excellence_BnTgQ88T.mjs'),"/src/content/blog/cutting-edge-tablets.md": () => import('./cutting-edge-tablets_C88ATRy-.mjs'),"/src/content/blog/elevate-your-mobile-experience.md": () => import('./elevate-your-mobile-experience_CZJZpZcS.mjs'),"/src/content/blog/guardian-of-the-digital-realm.md": () => import('./guardian-of-the-digital-realm_CndjauYV.mjs'),"/src/content/blog/immerse-in-the-virtual-world.md": () => import('./immerse-in-the-virtual-world_B8MrV0nm.mjs'),"/src/content/blog/world-of-drones.md": () => import('./world-of-drones_tk3SWmG5.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"the-best-laptops-for-developers-in-2024":"/src/content/blog/best-laptops-for-developers.md","capturing-lifes-moments-with-canon-excellence":"/src/content/blog/cannon-excellence.md","unleash-creativity-with-these-cutting-edge-tablets":"/src/content/blog/cutting-edge-tablets.md","elevate-your-mobile-experience-with-samsung":"/src/content/blog/elevate-your-mobile-experience.md","guardian-of-the-digital-realm-web-security":"/src/content/blog/guardian-of-the-digital-realm.md","immerse-in-the-virtual-world-vr-development":"/src/content/blog/immerse-in-the-virtual-world.md","soaring-to-new-heights-the-world-of-drones":"/src/content/blog/world-of-drones.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/best-laptops-for-developers.md": () => import('./best-laptops-for-developers_CIqAaCoW.mjs'),"/src/content/blog/cannon-excellence.md": () => import('./cannon-excellence_CY5tlP8H.mjs'),"/src/content/blog/cutting-edge-tablets.md": () => import('./cutting-edge-tablets_DJUVpGyB.mjs'),"/src/content/blog/elevate-your-mobile-experience.md": () => import('./elevate-your-mobile-experience_pPCuO3A9.mjs'),"/src/content/blog/guardian-of-the-digital-realm.md": () => import('./guardian-of-the-digital-realm_DzKTZrxg.mjs'),"/src/content/blog/immerse-in-the-virtual-world.md": () => import('./immerse-in-the-virtual-world_DZFOhdum.mjs'),"/src/content/blog/world-of-drones.md": () => import('./world-of-drones_BUZ2lZ-l.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(void 0, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = await getCollection("blog");
  const tags = allBlogArticles.flatMap((article) => article.data.tags);
  const uniqueTags = [...new Set(tags)];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-indigo-900 text-white"> <div class="container mx-auto mt-10 max-w-screen-xl px-8"> <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4"> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">About</h3> <p class="text-white text-sm">
TechPeople is a blog for tech enthusiasts. We publish articles,
            stories and tutorials about the latest technology trends and
            advancements.
</p> </div> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">Categories</h3> <ul class="text-white text-sm"> ${uniqueTags.map((tag) => renderTemplate`<li class="mb-2"> <a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a> </li>`)} </ul> </div> <div class="mt-10"> <h3 class="text-xl font-semibold mb-4">Contact</h3> <ul class="text-white text-sm"> <li class="mb-2"> <a href="#">Email</a> </li> <li class="mb-2"> <a href="#">Twitter</a> </li> <li class="mb-2"> <a href="#">Facebook</a> </li> <li class="mb-2"> <a href="#">Instagram</a> </li> </ul> </div></div></div></footer>`;
}, "/home/zan/Code/nzxf.github.io/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Solusi Bangun & Renovasi Rumah Anda" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet"><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><title>', " - ", "</title>", '</head> <body class=""> ', ' <section class="container mx-auto max-w-screen-xl mt-10 px-8"> ', " </section> ", " </body></html>"])), addAttribute(SITE_DESCRIPTION, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/zan/Code/nzxf.github.io/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, ARTICLES_PER_PAGE as A, HOMEPAGE_ARTICLE_LIMIT as H, getEntry as a, capitalize as c, formatDate as f, getCollection as g };
