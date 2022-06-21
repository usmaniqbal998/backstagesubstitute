import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import ButtonAppBar from './components/appbar';
import PluginRenderer from './components/pluginrenderer';

const App = () => {
	return (
		<div>
			<ButtonAppBar />
			<Routes>
				<Route
					path='/Plugin_A'
					element={
						<PluginRenderer
							url='http://localhost:8000/remoteEntry.js'
							scope='cards_plugin'
							module='./App'
							key='cards_plugin'
						/>
					}
				/>

				<Route
					path='/Plugin_B'
					element={
						<PluginRenderer
							url='http://localhost:8001/remoteEntry.js'
							scope='template_plugin'
							module='./App'
							key='template_plugin'
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
