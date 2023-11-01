import { useState } from "react";

function CardReact() {
	const [first, setfirst] = useState(0);
	return (
		<div>
			Card {first}
			<button onClick={() => setfirst(first + 1)}>Click Me</button>
		</div>
	);
}

export default CardReact;
