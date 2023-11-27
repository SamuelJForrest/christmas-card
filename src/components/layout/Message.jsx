import styles from "./Message.module.css";

const Message = ({
	messageTo,
	messageText,
	messageFrom,
	loveFrom,
	addKisses,
}) => {
	const checkForDieHard = (text) => {
		if (text.replace(/\s/g, "").toLowerCase().includes("diehard")) {
			return "I would like to use this message to show my deepest appreciation for the greatest Christmas movie of all time, Die Hard. ";
		}

		return text;
	};

	return (
		<div className={styles.message}>
			<p>To {messageTo},</p>
			<p>{checkForDieHard(messageText)}</p>
			<p>
				{loveFrom && "Love"} From {messageFrom}
			</p>
			{addKisses && <p>XXX</p>}

			<div className={styles["message-buttons"]}>
				<a href="/" className="button">
					New Message
				</a>
				<a href="/" className="button">
					Share this message
				</a>
			</div>
		</div>
	);
};

export default Message;
