const kn003 = new Proxy({"src":"/_astro/kn003.CFPl1j7D.jpg","width":1000,"height":667,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/konstruksi/kn003.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/konstruksi/kn003.jpg");
							return target[name];
						}
					});

export { kn003 as default };
