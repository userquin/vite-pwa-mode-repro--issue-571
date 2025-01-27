import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './style.css';

export function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(`index.tsx MODE ${import.meta.env}`)
		console.log(`index.tsx MODE ${import.meta.env.MODE}`)
		console.log(`index.tsx VITE_TEST ${import.meta.env.VITE_TEST}`)
	}, [])

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a>
			</div>
			<h1>Vite + Preact</h1>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/app.jsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">Click on the Vite and Preact logos to learn more</p>
		</>
	);
}

render(<App />, document.getElementById('app'));
