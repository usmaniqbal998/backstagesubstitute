import React, { useEffect } from 'react';
import usePlugin from './hooks/usePlugin';

const App = () => {
	const [{ module, scope, url }, setSystem] = React.useState({});
	const { Component, errorLoading } = usePlugin(url, scope, module);

	useEffect(() => {
		setSystem({
			url: 'http://localhost:8000/remoteEntry.js',
			scope: 'cards_plugin',
			module: './App',
		});
	}, []);

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

export default App;
