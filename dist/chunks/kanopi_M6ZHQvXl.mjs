const kanopi = new Proxy({"src":"/_astro/kanopi.DPMDBwbb.png","width":1152,"height":1152,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/katalog/kanopi.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/katalog/kanopi.png");
							return target[name];
						}
					});

export { kanopi as default };
