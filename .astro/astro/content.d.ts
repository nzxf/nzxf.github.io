declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"post": {
"blog/jendela.md": {
	id: "blog/jendela.md";
  slug: "blog/jendela";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"get-started-website-with-astro-tailwind-css.md": {
	id: "get-started-website-with-astro-tailwind-css.md";
  slug: "get-started-website-with-astro-tailwind-css";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"konstruksi/js001-desain-dan-bangun-rumah.md": {
	id: "konstruksi/js001-desain-dan-bangun-rumah.md";
  slug: "konstruksi/js001-desain-dan-bangun-rumah";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"konstruksi/js002-desain-dan-bangun-gudang.md": {
	id: "konstruksi/js002-desain-dan-bangun-gudang.md";
  slug: "konstruksi/js002-desain-dan-bangun-gudang";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"markdown-elements-demo-post.mdx": {
	id: "markdown-elements-demo-post.mdx";
  slug: "markdown-elements-demo-post";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".mdx"] };
"product/jj003 copy 2.md": {
	id: "product/jj003 copy 2.md";
  slug: "product/jj003-copy-2";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"product/jj003 copy 3.md": {
	id: "product/jj003 copy 3.md";
  slug: "product/jj003-copy-3";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"product/jj003 copy 4.md": {
	id: "product/jj003 copy 4.md";
  slug: "product/jj003-copy-4";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"product/jj003 copy 5.md": {
	id: "product/jj003 copy 5.md";
  slug: "product/jj003-copy-5";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"product/jj003 copy.md": {
	id: "product/jj003 copy.md";
  slug: "product/jj003-copy";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"product/jj003.md": {
	id: "product/jj003.md";
  slug: "product/jj003";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm001.md": {
	id: "property/rm001.md";
  slug: "property/rm001";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm002.md": {
	id: "property/rm002.md";
  slug: "property/rm002";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm003.md": {
	id: "property/rm003.md";
  slug: "property/rm003";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm004.md": {
	id: "property/rm004.md";
  slug: "property/rm004";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm005.md": {
	id: "property/rm005.md";
  slug: "property/rm005";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm006.md": {
	id: "property/rm006.md";
  slug: "property/rm006";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm007.md": {
	id: "property/rm007.md";
  slug: "property/rm007";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm008.md": {
	id: "property/rm008.md";
  slug: "property/rm008";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm009.md": {
	id: "property/rm009.md";
  slug: "property/rm009";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm010.md": {
	id: "property/rm010.md";
  slug: "property/rm010";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm011.md": {
	id: "property/rm011.md";
  slug: "property/rm011";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"property/rm012.md": {
	id: "property/rm012.md";
  slug: "property/rm012";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"service/pengurusan-pbg-slf copy.mdx": {
	id: "service/pengurusan-pbg-slf copy.mdx";
  slug: "service/pengurusan-pbg-slf-copy";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".mdx"] };
"service/sample-service-jasa.mdx": {
	id: "service/sample-service-jasa.mdx";
  slug: "service/sample-service-jasa";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
