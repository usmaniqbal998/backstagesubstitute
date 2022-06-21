import React from 'react';
import useScript from './useScript';
import { loadPlugin } from '@pandora/core';

const componentCache = new Map();

export const usePlugin = (remoteUrl, scope, module) => {
	const key = `${remoteUrl}-${scope}-${module}`;
	const [Component, setComponent] = React.useState(null);

	const { ready, errorLoading } = useScript(remoteUrl);
	React.useEffect(() => {
		if (Component) setComponent(null);
		// Only recalculate when key changes
	}, [key]);

	React.useEffect(() => {
		if (ready && !Component) {
			const Comp = React.lazy(loadPlugin(scope, module));
			componentCache.set(key, Comp);
			setComponent(Comp);
		}
		// key includes all dependencies (scope/module)
	}, [Component, ready, key]);

	return { errorLoading, Component };
};

export default usePlugin;