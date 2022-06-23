import React from 'react';

function App() {
	return (
		<>
			<h1>Plugin B</h1>
			<button
				onClick={() => {
					const customEvent = new CustomEvent('eventFromMfe', {
						detail: { name: 'Usman' },
					});
					window.dispatchEvent(customEvent);
				}}
			>
				Fire Event
			</button>
		</>
	);
}

export default App;
