const partisi = new Proxy({"src":"/_astro/partisi.DNNw-3FD.png","width":1120,"height":1120,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/katalog/partisi.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/katalog/partisi.png");
							return target[name];
						}
					});

export { partisi as default };
