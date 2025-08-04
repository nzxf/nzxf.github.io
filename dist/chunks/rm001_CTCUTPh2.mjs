const rm001 = new Proxy({"src":"/_astro/rm001.dlozBaL9.jpeg","width":1280,"height":1066,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/property/rm001.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/property/rm001.jpeg");
							return target[name];
						}
					});

export { rm001 as default };
