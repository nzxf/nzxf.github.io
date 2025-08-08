const bangunRumahJogja = new Proxy({"src":"/_astro/bangun-rumah-jogja.YdFVd52i.jpg","width":626,"height":417,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/bangun-rumah-jogja.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/bangun-rumah-jogja.jpg");
							return target[name];
						}
					});

export { bangunRumahJogja as default };
