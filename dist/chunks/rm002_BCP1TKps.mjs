const rm002 = new Proxy({"src":"/_astro/rm002.C_vthtxE.png","width":1024,"height":682,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/property/rm002.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/property/rm002.png");
							return target[name];
						}
					});

export { rm002 as default };
