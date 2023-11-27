import styles from "./Form.module.css";

const Form = () => {
	return (
		<form action="/" className={styles.form}>
			<div className={styles["field-wrap"]}>
				<div className={styles["label-wrap"]}>
					<label htmlFor="messageTo">To</label>
				</div>
				<div className={styles["input-wrap"]}>
					<input type="text" name="messageTo" id="messageTo" />
				</div>
			</div>
			<div className={styles["field-wrap"]}>
				<div className={styles["label-wrap"]}>
					<label htmlFor="messageText">Message</label>
				</div>
				<div className={styles["input-wrap"]}>
					<textarea
						name="messageText"
						id="messageText"
						cols="30"
						rows="10"
					></textarea>
				</div>
			</div>
			<div className={styles["field-wrap"]}>
				<div className={styles["label-wrap"]}>
					<label htmlFor="messageFrom">From</label>
				</div>
				<div className={styles["input-wrap"]}>
					<input type="text" name="messageFrom" id="messageFrom" />
				</div>
			</div>
			{/* @TODO: add checkboxes */}
			<div className="submit-wrap">
				<button type="submit" className="button">
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
