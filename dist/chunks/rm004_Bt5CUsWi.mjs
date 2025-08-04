import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"deskripsi\">Deskripsi</h2>\n<ul>\n<li>halaman depan ( tempat parkir/ bongkar muat barang )</li>\n<li>dapur ( kitchen set + stand kompor )</li>\n<li>listrik 4400</li>\n<li>lantai keramik ( 50x50 )</li>\n</ul>\n<h2 id=\"tambahan\">Tambahan</h2>\n<ul>\n<li>Gazebo siap pakai untuk restaurant atau tempat meeting.</li>\n</ul>";

				const frontmatter = {"publishDate":"2023-11-26T00:00:00.000Z","author":"Zan","code":"rm004","title":"Gazebo Resto Parkiran Luas","excerpt":"Palagan, Sleman","space":110,"building":40,"price":595000000,"priceBefore":625000000,"image":"~/assets/images/property/rm004.jpg","category":"Properti","metadata":{"canonical":"https://mitrabangunkreasi.com/b/bn001-rumah-modern-minimalis"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/properti/rm004.md";
				const url = undefined;
				function rawContent() {
					return "\n## Deskripsi\n\n- halaman depan ( tempat parkir/ bongkar muat barang )\n- dapur ( kitchen set + stand kompor )\n- listrik 4400\n- lantai keramik ( 50x50 )\n\n## Tambahan\n- Gazebo siap pakai untuk restaurant atau tempat meeting.\n";
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
