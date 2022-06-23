import React from 'react';
import useScript from './useScript';
import { loadPlugin } from '@pandora/core';

const componentCache = new Map();

export const usePlugin = (remoteUrl, scope, module) => {
	const key = `${remoteUrl}-${scope}-${module}`;
	console.log(key);
	const [Component, setComponent] = React.useState(null);

	const { ready, errorLoading } = useScript(remoteUrl);
	React.useEffect(() => {
		if (Component) setComponent(null);
	}, [key]);

	React.useEffect(() => {
		if (ready && !Component) {
			const Comp = React.lazy(loadPlugin(scope, module));
			componentCache.set(key, Comp);
			setComponent(Comp);
		}
	}, [Component, ready, key]);

	return { errorLoading, Component };
};

export default usePlugin;
