import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"pilihan-besi-baja-struktural\">Pilihan Besi Baja Struktural</h2>\n<p>Jenis besi baja struktural yang bisa dipilih untuk digunakan sebagai keperluan struktural dan konstruksi gudang industri.</p>\n<ol>\n<li>Wide Flange (WF)</li>\n<li>U Channel atau Kanal U/UNP</li>\n<li>C Channel (Kanal C, CNP)</li>\n<li>Besi Hollow Besar / Rectangular Hollow Section</li>\n<li>Pipa Besi / Steel Pipe</li>\n</ol>";

				const frontmatter = {"publishDate":"2023-07-22T00:00:00.000Z","author":"Zan","code":"bg002","title":"Bangun Lapangan Futsal/Basket/Volley Indoor","excerpt":"Cocok untuk usaha rental lapangan olahraga","image":"~/assets/images/konstruksi/bg001b.png","category":"Konstruksi","price":35000,"priceBefore":37500,"priceTail":"/kg","tags":["bangun","gor","lapangan","olahraga"],"metadata":{"canonical":"https://mitrabangunkreasi.com/p/bg001-bangun-gudang-industrial"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/konstruksi/bg001-bangun-lapangan-olahraga-futsal-basket-volley.md";
				const url = undefined;
				function rawContent() {
					return "\n## Pilihan Besi Baja Struktural\n\nJenis besi baja struktural yang bisa dipilih untuk digunakan sebagai keperluan struktural dan konstruksi gudang industri.\n\n1. Wide Flange (WF)\n2. U Channel atau Kanal U/UNP\n3. C Channel (Kanal C, CNP)\n4. Besi Hollow Besar / Rectangular Hollow Section\n5. Pipa Besi / Steel Pipe";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"pilihan-besi-baja-struktural","text":"Pilihan Besi Baja Struktural"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
