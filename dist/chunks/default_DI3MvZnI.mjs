const _default = new Proxy({"src":"/_astro/default.Bz_jklyS.png","width":874,"height":861,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/default.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/default.png");
							return target[name];
						}
					});

export { _default as default };
