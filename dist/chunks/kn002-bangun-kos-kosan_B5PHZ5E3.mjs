import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Blj49uai.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"deskripsi\">Deskripsi</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

				const frontmatter = {"publishDate":"2023-07-22T00:00:00.000Z","author":"Zan","code":"kn002","title":"Bangun Kos-kosan","excerpt":"Mau paket lengkap desain dan bangun kos-kosan anda?","image":"~/assets/images/konstruksi/kn002.webp","category":"Konstruksi","price":3499000,"priceBefore":4249000,"priceTail":"/m²","tags":["bangun","kos-kosan"],"metadata":{"canonical":"https://mitrabangunkreasi.com/p/kn002-bangun-kantor-modern"},"readingTime":1};
				const file = "/home/zan/Code/nzxf.github.io/src/content/post/konstruksi/kn002-bangun-kos-kosan.md";
				const url = undefined;
				function rawContent() {
					return "\n## Deskripsi\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"deskripsi","text":"Deskripsi"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
