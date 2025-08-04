const logoBni = new Proxy({"src":"/_astro/logoBni.Dj6f4VPR.png","width":450,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoBni.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoBni.png");
							return target[name];
						}
					});

export { logoBni as default };
