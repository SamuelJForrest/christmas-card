import Snowfall from "react-snowfall";
import Card from "./components/UI/Card";
import Form from "./components/UI/Form";

function App() {
	return (
		<>
			<div className="snowfall">
				<Snowfall />
			</div>
			<Card>
				<h1>Christmas message generator</h1>
				<Form />
			</Card>
		</>
	);
}

export default App;
