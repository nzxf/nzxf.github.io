const kn001 = new Proxy({"src":"/_astro/kn001.NoNPgYJd.png","width":910,"height":867,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/konstruksi/kn001.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/konstruksi/kn001.png");
							return target[name];
						}
					});

export { kn001 as default };
