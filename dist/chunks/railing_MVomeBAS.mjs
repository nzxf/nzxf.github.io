const railing = new Proxy({"src":"/_astro/railing.BTYYYPoc.png","width":1480,"height":1480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/katalog/railing.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/katalog/railing.png");
							return target[name];
						}
					});

export { railing as default };
