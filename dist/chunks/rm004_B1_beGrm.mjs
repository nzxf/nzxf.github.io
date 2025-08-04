const rm004 = new Proxy({"src":"/_astro/rm004.C_CIfN4Y.jpg","width":4608,"height":3456,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/property/rm004.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/property/rm004.jpg");
							return target[name];
						}
					});

export { rm004 as default };
