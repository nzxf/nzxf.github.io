const mez = new Proxy({"src":"/_astro/mez.CTqzm0MW.png","width":1240,"height":1240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/katalog/mez.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/katalog/mez.png");
							return target[name];
						}
					});

export { mez as default };
