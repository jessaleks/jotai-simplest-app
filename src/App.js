import { atom, useAtom } from 'jotai';

import './App.css';

const countAtom = atom(0);
const countAtom2 = atom(0);

const Counter1 = () => {
	const [count, setCount] = useAtom(countAtom);
	return (
		<div>
			{count}
			<button onClick={() => setCount((c) => c + 1)}>+1</button>
		</div>
	);
};

const Counter2 = () => {
	const [count, setCount] = useAtom(countAtom2);
	return (
		<div>
			{count}
			<button onClick={() => setCount((c) => c + 1)}>+1</button>
		</div>
	);
};

function App() {
	return (
		<div>
			<Counter1 />
			<Counter2 />
		</div>
	);
}

export default App;
