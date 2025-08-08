import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"deskripsi\">Deskripsi</h2>\n<ul>\n<li>Kaca Temper 10mm</li>\n<li>Aksesoris Stainless Steel / Atau Aluminium</li>\n<li>Sealant Anti Bocor</li>\n</ul>\n<h2 id=\"tambahan\">Tambahan</h2>\n<ul>\n<li>Jika mempunyai desain atau preferensi model sendiri, silahkan dikonsultasikan ke kami.</li>\n</ul>";

				const frontmatter = {"publishDate":"2023-01-25T00:00:00.000Z","author":"Zan","code":"pt003","title":"Partisi Sekat Dinding Gypsum","price":350000,"priceBefore":400000,"priceTail":"/m²","image":"~/assets/images/produk/partisi/partisiGypsum.png","category":"Partisi","tags":["gypsum","baja ringan","kantor","toko","ruko","resto","bank"],"metadata":{"canonical":"https://mitrabangunkreasi.com/p/jj003"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/partisi/partisi-sekat-dinding-gypsum-grc-interior.md";
				const url = undefined;
				function rawContent() {
					return "\n## Deskripsi\n\n- Kaca Temper 10mm\n- Aksesoris Stainless Steel / Atau Aluminium\n- Sealant Anti Bocor\n\n## Tambahan\n- Jika mempunyai desain atau preferensi model sendiri, silahkan dikonsultasikan ke kami.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"deskripsi","text":"Deskripsi"},{"depth":2,"slug":"tambahan","text":"Tambahan"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
