const logoSangTimur = new Proxy({"src":"/_astro/logoSangTimur.CIDRatvP.png","width":450,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoSangTimur.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoSangTimur.png");
							return target[name];
						}
					});

export { logoSangTimur as default };
