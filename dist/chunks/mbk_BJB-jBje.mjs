const mbk = new Proxy({"src":"/_astro/mbk.CeowlSiA.png","width":1825,"height":1888,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/mbk.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/mbk.png");
							return target[name];
						}
					});

export { mbk as default };
