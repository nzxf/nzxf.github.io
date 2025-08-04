const pagarJogja = new Proxy({"src":"/_astro/pagar-jogja.Dc_GLLOb.jpg","width":988,"height":1000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/pagar-jogja.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/pagar-jogja.jpg");
							return target[name];
						}
					});

export { pagarJogja as default };
