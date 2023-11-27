import Snowfall from "react-snowfall";
import Message from "./components/layout/Message";
import Card from "./components/UI/Card";
import Form from "./components/UI/Form";

function App() {
	const URLValues = window.location.search;
	const params = new URLSearchParams(URLValues);
	const messageTo = params.get("messageTo");
	const messageText = params.get("messageText");
	const messageFrom = params.get("messageFrom");
	const loveFrom = params.get("loveFrom");
	const addKisses = params.get("addKisses");
	const renderCondition = messageTo || messageText || messageFrom;

	return (
		<>
			<div className="snowfall">
				<Snowfall />
			</div>
			<Card>
				{!renderCondition && (
					<>
						<h1>Christmas message generator</h1>
						<p className="subtitle">
							Complete the form to see your own personalised
							Christmas message!
						</p>
						<Form />
					</>
				)}

				{renderCondition && (
					<Message
						messageTo={messageTo}
						messageText={messageText}
						messageFrom={messageFrom}
						loveFrom={loveFrom}
						addKisses={addKisses}
					/>
				)}
			</Card>
		</>
	);
}

export default App;
