const logoAngkasaPura = new Proxy({"src":"/_astro/logoAngkasaPura.C_WM40xK.png","width":450,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoAngkasaPura.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/klien/logoAngkasaPura.png");
							return target[name];
						}
					});

export { logoAngkasaPura as default };
