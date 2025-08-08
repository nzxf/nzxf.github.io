const mezaninJogja = new Proxy({"src":"/_astro/mezanin-jogja.Jj7nvUu3.jpg","width":2000,"height":1332,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/mezanin-jogja.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/zan/Code/nzxf.github.io/src/assets/images/blog/2024/mezanin-jogja.jpg");
							return target[name];
						}
					});

export { mezaninJogja as default };
