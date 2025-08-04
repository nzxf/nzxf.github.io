import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"deskripsi\">Deskripsi</h2>\n<ul>\n<li>4 kamar tidur ( 1 kamar asisten )</li>\n<li>4 kamar mandi ( water hitter, shower, closet duduk )</li>\n<li>halaman depan dan belakang ( taman )</li>\n<li>ruang tamu dan keluarga</li>\n<li>dapur ( kitchen set + stand kompor )</li>\n<li>ruang makan</li>\n<li>ruang cuci jemur</li>\n<li>carport 2 mobil</li>\n<li>listrik 4400</li>\n<li>kusen dan daun pintu jendela jati perhutani</li>\n<li>lantai full granit ( 60x60 )</li>\n<li>sumur bor, jet pump, tandon dan pendorong</li>\n</ul>\n<h2 id=\"tambahan\">Tambahan</h2>\n<ul>\n<li>Rumah Baru Siap Huni dalam Cluster Di Gedongkuning Yogyakarta. Akses mudah, Dekat pusat kota jogja, wilayah nyaman, Akses jalan lebar, One gate sistem, Pos satpam, dan CCTV</li>\n</ul>";

				const frontmatter = {"publishDate":"2023-01-26T00:00:00.000Z","author":"Zan","code":"rm002","title":"Rumah Sudut Lengkung","excerpt":"Maguwoharjo, Sleman","bedroom":3,"bathroom":2,"space":150,"building":90,"price":550000000,"status":"terjual","image":"~/assets/images/property/rm002.png","category":"Properti","metadata":{"canonical":"https://mitrabangunkreasi.com/b/bn001-rumah-modern-minimalis"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/properti/rm002.md";
				const url = undefined;
				function rawContent() {
					return "\n## Deskripsi\n\n- 4 kamar tidur ( 1 kamar asisten )\n- 4 kamar mandi ( water hitter, shower, closet duduk )\n- halaman depan dan belakang ( taman )\n- ruang tamu dan keluarga\n- dapur ( kitchen set + stand kompor )\n- ruang makan\n- ruang cuci jemur\n- carport 2 mobil\n- listrik 4400\n- kusen dan daun pintu jendela jati perhutani\n- lantai full granit ( 60x60 )\n- sumur bor, jet pump, tandon dan pendorong\n\n## Tambahan\n- Rumah Baru Siap Huni dalam Cluster Di Gedongkuning Yogyakarta. Akses mudah, Dekat pusat kota jogja, wilayah nyaman, Akses jalan lebar, One gate sistem, Pos satpam, dan CCTV\n";
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
