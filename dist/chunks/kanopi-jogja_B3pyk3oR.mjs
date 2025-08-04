const kanopiJogja = new Proxy({"src":"/_astro/kanopi-jogja.DmDb7VXP.jpg","width":700,"height":700,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/kanopi-jogja.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/kanopi-jogja.jpg");
							return target[name];
						}
					});

export { kanopiJogja as default };
