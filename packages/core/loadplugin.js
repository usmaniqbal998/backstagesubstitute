export function loadPlugin(scope, module) {
	console.log(scope);
	console.log(module);
	return async () => {
		await __webpack_init_sharing__('default');
		const container = window[scope];
		console.log(container);
		await container.init(__webpack_share_scopes__.default);
		const factory = await window[scope].get(module);
		const Module = factory();
		console.log(Module);
		return Module;
	};
}
