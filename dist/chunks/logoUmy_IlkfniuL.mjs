const logoUmy = new Proxy({"src":"/_astro/logoUmy.B67x9baI.png","width":450,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoUmy.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoUmy.png");
							return target[name];
						}
					});

export { logoUmy as default };
