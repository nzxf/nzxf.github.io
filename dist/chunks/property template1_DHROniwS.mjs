const property_template1 = new Proxy({"src":"/_astro/property template1.B59tS-3P.png","width":1360,"height":1360,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/property/property template1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/property/property template1.png");
							return target[name];
						}
					});

export { property_template1 as default };
