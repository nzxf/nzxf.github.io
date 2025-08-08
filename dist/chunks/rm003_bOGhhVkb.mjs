const rm003 = new Proxy({"src":"/_astro/rm003.DMPsUnxs.jpg","width":3456,"height":4608,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/properti/rm003.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/properti/rm003.jpg");
							return target[name];
						}
					});

export { rm003 as default };
