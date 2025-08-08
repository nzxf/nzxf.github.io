const konstruksi = new Proxy({"src":"/_astro/bg001a.4Cbj4UHU.png","width":1280,"height":1280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/katalog/konstruksi.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/katalog/konstruksi.png");
							return target[name];
						}
					});

export { konstruksi as default };
