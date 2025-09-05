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
"blog/2024/bangun rumah jogja.md": {
	id: "blog/2024/bangun rumah jogja.md";
  slug: "blog/2024/bangun-rumah-jogja";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"blog/2024/kanopi murah jogja.md": {
	id: "blog/2024/kanopi murah jogja.md";
  slug: "blog/2024/kanopi-murah-jogja";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"blog/2024/mezzanine jogja.md": {
	id: "blog/2024/mezzanine jogja.md";
  slug: "blog/2024/mezzanine-jogja";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"blog/2024/pagar besi jogja.md": {
	id: "blog/2024/pagar besi jogja.md";
  slug: "blog/2024/pagar-besi-jogja";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"kanopi/Kanopi Baja Ringan Atap Galvalum.md": {
	id: "kanopi/Kanopi Baja Ringan Atap Galvalum.md";
  slug: "kanopi/kanopi-baja-ringan-atap-galvalum";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"kanopi/Kanopi Baja Ringan Atap Polycarbonate Gelombang.md": {
	id: "kanopi/Kanopi Baja Ringan Atap Polycarbonate Gelombang.md";
  slug: "kanopi/kanopi-baja-ringan-atap-polycarbonate-gelombang";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"kanopi/Kanopi Besi Hollow Atap Kaca Tempered.md": {
	id: "kanopi/Kanopi Besi Hollow Atap Kaca Tempered.md";
  slug: "kanopi/kanopi-besi-hollow-atap-kaca-tempered";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"kanopi/Kanopi Besi Hollow Atap Polycarbonate Solid.md": {
	id: "kanopi/Kanopi Besi Hollow Atap Polycarbonate Solid.md";
  slug: "kanopi/kanopi-besi-hollow-atap-polycarbonate-solid";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"kanopi/Kanopi Besi Hollow Atap uPVC Double.md": {
	id: "kanopi/Kanopi Besi Hollow Atap uPVC Double.md";
  slug: "kanopi/kanopi-besi-hollow-atap-upvc-double";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"kanopi/Kanopi Besi Hollow Atap uPVC Single.md": {
	id: "kanopi/Kanopi Besi Hollow Atap uPVC Single.md";
  slug: "kanopi/kanopi-besi-hollow-atap-upvc-single";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"konstruksi/Bangun Gudang Industrial Serba Guna.md": {
	id: "konstruksi/Bangun Gudang Industrial Serba Guna.md";
  slug: "konstruksi/bangun-gudang-industrial-serba-guna";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"konstruksi/Bangun Hunian Kos Kosan.md": {
	id: "konstruksi/Bangun Hunian Kos Kosan.md";
  slug: "konstruksi/bangun-hunian-kos-kosan";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"konstruksi/Bangun Hunian Rumah 1 Lantai.md": {
	id: "konstruksi/Bangun Hunian Rumah 1 Lantai.md";
  slug: "konstruksi/bangun-hunian-rumah-1-lantai";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"konstruksi/Bangun Hunian Rumah 2 Lantai.md": {
	id: "konstruksi/Bangun Hunian Rumah 2 Lantai.md";
  slug: "konstruksi/bangun-hunian-rumah-2-lantai";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"konstruksi/Bangun Lapangan Olahraga Indoor atau Semi Outdoor.md": {
	id: "konstruksi/Bangun Lapangan Olahraga Indoor atau Semi Outdoor.md";
  slug: "konstruksi/bangun-lapangan-olahraga-indoor-atau-semi-outdoor";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"konstruksi/Bangun Tempat Parkir Semi Indoor.md": {
	id: "konstruksi/Bangun Tempat Parkir Semi Indoor.md";
  slug: "konstruksi/bangun-tempat-parkir-semi-indoor";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"mezzanine/loft bed.md": {
	id: "mezzanine/loft bed.md";
  slug: "mezzanine/loft-bed";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"mezzanine/mezzanine dak balkon.md": {
	id: "mezzanine/mezzanine dak balkon.md";
  slug: "mezzanine/mezzanine-dak-balkon";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"mezzanine/mezzanine plafon.md": {
	id: "mezzanine/mezzanine plafon.md";
  slug: "mezzanine/mezzanine-plafon";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Ekspanda Metal.md": {
	id: "pagar/Pagar Besi Ekspanda Metal.md";
  slug: "pagar/pagar-besi-ekspanda-metal";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Ekspanda.md": {
	id: "pagar/Pagar Besi Ekspanda.md";
  slug: "pagar/pagar-besi-ekspanda";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Hollow Minimalis.md": {
	id: "pagar/Pagar Besi Hollow Minimalis.md";
  slug: "pagar/pagar-besi-hollow-minimalis";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Hollow dan Plat.md": {
	id: "pagar/Pagar Besi Hollow dan Plat.md";
  slug: "pagar/pagar-besi-hollow-dan-plat";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Laser Cutting Kombinasi.md": {
	id: "pagar/Pagar Besi Laser Cutting Kombinasi.md";
  slug: "pagar/pagar-besi-laser-cutting-kombinasi";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Laser Cutting.md": {
	id: "pagar/Pagar Besi Laser Cutting.md";
  slug: "pagar/pagar-besi-laser-cutting";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Lisplank Motif.md": {
	id: "pagar/Pagar Besi Lisplank Motif.md";
  slug: "pagar/pagar-besi-lisplank-motif";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Lisplank Rongga.md": {
	id: "pagar/Pagar Besi Lisplank Rongga.md";
  slug: "pagar/pagar-besi-lisplank-rongga";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Lisplank.md": {
	id: "pagar/Pagar Besi Lisplank.md";
  slug: "pagar/pagar-besi-lisplank";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Perforated Kombinasi.md": {
	id: "pagar/Pagar Besi Perforated Kombinasi.md";
  slug: "pagar/pagar-besi-perforated-kombinasi";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Besi Perforated.md": {
	id: "pagar/Pagar Besi Perforated.md";
  slug: "pagar/pagar-besi-perforated";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Stainless Steel Kombinasi.md": {
	id: "pagar/Pagar Stainless Steel Kombinasi.md";
  slug: "pagar/pagar-stainless-steel-kombinasi";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pagar/Pagar Stainless Steel.md": {
	id: "pagar/Pagar Stainless Steel.md";
  slug: "pagar/pagar-stainless-steel";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"partisi/partisi-sekat-dinding-gypsum-1-sisi.md": {
	id: "partisi/partisi-sekat-dinding-gypsum-1-sisi.md";
  slug: "partisi/partisi-sekat-dinding-gypsum-1-sisi";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"partisi/partisi-sekat-dinding-gypsum-2-sisi.md": {
	id: "partisi/partisi-sekat-dinding-gypsum-2-sisi.md";
  slug: "partisi/partisi-sekat-dinding-gypsum-2-sisi";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"partisi/partisi-sekat-kamar-mandi-shower-kaca-temper.md": {
	id: "partisi/partisi-sekat-kamar-mandi-shower-kaca-temper.md";
  slug: "partisi/partisi-sekat-kamar-mandi-shower-kaca-temper";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"partisi/partisi-sekat-kantor-toko-resto-bank-kaca-temper-.md": {
	id: "partisi/partisi-sekat-kantor-toko-resto-bank-kaca-temper-.md";
  slug: "partisi/partisi-sekat-kantor-toko-resto-bank-kaca-temper-";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"partisi/partisi-sekat-ruko-kantor-toko-resto-bank-aluminium-dan-kaca.md": {
	id: "partisi/partisi-sekat-ruko-kantor-toko-resto-bank-aluminium-dan-kaca.md";
  slug: "partisi/partisi-sekat-ruko-kantor-toko-resto-bank-aluminium-dan-kaca";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Jendela Aluminium Kaca Model Jungkit.md": {
	id: "pintuJendela/Jendela Aluminium Kaca Model Jungkit.md";
  slug: "pintujendela/jendela-aluminium-kaca-model-jungkit";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Jendela Aluminium Kaca Model Swing.md": {
	id: "pintuJendela/Jendela Aluminium Kaca Model Swing.md";
  slug: "pintujendela/jendela-aluminium-kaca-model-swing";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Jendela Aluminium dan Kaca Geser Sliding.md": {
	id: "pintuJendela/Jendela Aluminium dan Kaca Geser Sliding.md";
  slug: "pintujendela/jendela-aluminium-dan-kaca-geser-sliding";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Jendela Aluminium dan Kaca Model Sudut.md": {
	id: "pintuJendela/Jendela Aluminium dan Kaca Model Sudut.md";
  slug: "pintujendela/jendela-aluminium-dan-kaca-model-sudut";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Jendela Aluminium dan Kaca Ventilasi.md": {
	id: "pintuJendela/Jendela Aluminium dan Kaca Ventilasi.md";
  slug: "pintujendela/jendela-aluminium-dan-kaca-ventilasi";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Pintu Aluminium Isi Aluminium Spandrel.md": {
	id: "pintuJendela/Pintu Aluminium Isi Aluminium Spandrel.md";
  slug: "pintujendela/pintu-aluminium-isi-aluminium-spandrel";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Pintu Aluminium Kaca Es Frozen Buram.md": {
	id: "pintuJendela/Pintu Aluminium Kaca Es Frozen Buram.md";
  slug: "pintujendela/pintu-aluminium-kaca-es-frozen-buram";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"pintuJendela/Pintu Aluminium Panel ACP.md": {
	id: "pintuJendela/Pintu Aluminium Panel ACP.md";
  slug: "pintujendela/pintu-aluminium-panel-acp";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"plafon/plafon-grc.md": {
	id: "plafon/plafon-grc.md";
  slug: "plafon/plafon-grc";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"plafon/plafon-gypsum.md": {
	id: "plafon/plafon-gypsum.md";
  slug: "plafon/plafon-gypsum";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"plafon/plafon-pvc.md": {
	id: "plafon/plafon-pvc.md";
  slug: "plafon/plafon-pvc";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"properti/rm001.md": {
	id: "properti/rm001.md";
  slug: "properti/rm001";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"properti/rm002.md": {
	id: "properti/rm002.md";
  slug: "properti/rm002";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"properti/rm003.md": {
	id: "properti/rm003.md";
  slug: "properti/rm003";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"properti/rm004.md": {
	id: "properti/rm004.md";
  slug: "properti/rm004";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing besi bulat.md": {
	id: "railing/railing besi bulat.md";
  slug: "railing/railing-besi-bulat";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing besi ekspanda.md": {
	id: "railing/railing besi ekspanda.md";
  slug: "railing/railing-besi-ekspanda";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing besi hollow.md": {
	id: "railing/railing besi hollow.md";
  slug: "railing/railing-besi-hollow";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing besi laser cutting.md": {
	id: "railing/railing besi laser cutting.md";
  slug: "railing/railing-besi-laser-cutting";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing besi plat perforated.md": {
	id: "railing/railing besi plat perforated.md";
  slug: "railing/railing-besi-plat-perforated";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing kaca temper.md": {
	id: "railing/railing kaca temper.md";
  slug: "railing/railing-kaca-temper";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"railing/railing stainless steel.md": {
	id: "railing/railing stainless steel.md";
  slug: "railing/railing-stainless-steel";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"tangga/tangga-besi-llipat.md": {
	id: "tangga/tangga-besi-llipat.md";
  slug: "tangga/tangga-besi-llipat";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"tangga/tangga-besi-rebah.md": {
	id: "tangga/tangga-besi-rebah.md";
  slug: "tangga/tangga-besi-rebah";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
"tangga/tangga-besi-spiral.md": {
	id: "tangga/tangga-besi-spiral.md";
  slug: "tangga/tangga-besi-spiral";
  body: string;
  collection: "post";
  data: InferEntrySchema<"post">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
