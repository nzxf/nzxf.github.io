const teralis = new Proxy({"src":"/_astro/teralis.BGdxGt78.png","width":1280,"height":1280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/katalog/teralis.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/katalog/teralis.png");
							return target[name];
						}
					});

export { teralis as default };
