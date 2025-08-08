import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"spesifikasi\">SPESIFIKASI</h2>\n<ul>\n<li>Kusen 3”.</li>\n<li>Ukuran luar kusen 60x100.</li>\n<li>Finishing Full Sealant (anti bocor).</li>\n<li>Warna frame aluminium (Putih, Hitam atau Cokelat).</li>\n<li>Aksesoris komplit.</li>\n<li>Aluminium merk Alumas, Alko atau setara.</li>\n<li>Kaca Asahi 5mm (Bening, Blur dan Riben).</li>\n<li>Harga yang tertera adalah harga per unit jendela.</li>\n</ul>";

				const frontmatter = {"publishDate":"2023-07-12T00:00:00.000Z","author":"Zan","code":"GG005","title":"Pagar Besi Laser Cutting","price":1500000,"priceBefore":1750000,"priceTail":"/m²","image":"~/assets/images/produk/product1.png","category":"Pagar","tags":["pagar","besi"],"metadata":{"canonical":"https://mitrabangunkreasi.com/p/jj003"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/pagar/GG005.md";
				const url = undefined;
				function rawContent() {
					return "\n## SPESIFIKASI\n\n- Kusen 3\".\n- Ukuran luar kusen 60x100.\n- Finishing Full Sealant (anti bocor).\n- Warna frame aluminium (Putih, Hitam atau Cokelat).\n- Aksesoris komplit.\n- Aluminium merk Alumas, Alko atau setara.\n- Kaca Asahi 5mm (Bening, Blur dan Riben).\n- Harga yang tertera adalah harga per unit jendela.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"spesifikasi","text":"SPESIFIKASI"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
