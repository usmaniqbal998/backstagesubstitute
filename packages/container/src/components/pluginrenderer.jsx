import React, { useEffect } from 'react';
import usePlugin from '../hooks/usePlugin';

const PluginRenderer = ({ url, scope, module }) => {
	const [pluginScript, setSystem] = React.useState({ url, scope, module });

	const { Component, errorLoading } = usePlugin(
		pluginScript.url,
		pluginScript.scope,
		pluginScript.module
	);

	return (
		<div>
			<React.Suspense fallback='Loading System'>
				{errorLoading
					? `Error loading module "${module}"`
					: Component && <Component />}
			</React.Suspense>
		</div>
	);
};

export default PluginRenderer;
