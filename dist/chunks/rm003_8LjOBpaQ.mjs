import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"deskripsi\">Deskripsi</h2>\n<ul>\n<li>halaman depan ( tempat parkir/ bongkar muat barang )</li>\n<li>dapur ( kitchen set + stand kompor )</li>\n<li>listrik 4400</li>\n<li>2 rolling door</li>\n<li>lantai full granit ( 60x60 )</li>\n</ul>\n<h2 id=\"tambahan\">Tambahan</h2>\n<ul>\n<li>Toko Siap pakai untuk bermacam jenis usaha.</li>\n</ul>";

				const frontmatter = {"publishDate":"2023-11-26T00:00:00.000Z","author":"Zan","code":"rm003","title":"Toko Abu 3 Akses","excerpt":"Banguntapan, Bantul","space":90,"building":60,"price":350000000,"status":"terjual","image":"~/assets/images/properti/rm003.jpg","category":"Properti","metadata":{"canonical":"https://mitrabangunkreasi.com/b/bn001-rumah-modern-minimalis"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/properti/rm003.md";
				const url = undefined;
				function rawContent() {
					return "\n## Deskripsi\n\n- halaman depan ( tempat parkir/ bongkar muat barang )\n- dapur ( kitchen set + stand kompor )\n- listrik 4400\n- 2 rolling door\n- lantai full granit ( 60x60 )\n\n## Tambahan\n- Toko Siap pakai untuk bermacam jenis usaha.\n";
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
