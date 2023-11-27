import styles from "./Form.module.css";

const Form = () => {
	return (
		<form action="/" className={styles.form}>
			<div className={styles["field-wrap"]}>
				<div className={styles["label-wrap"]}>
					<label htmlFor="messageTo">To</label>
				</div>
				<div className={styles["input-wrap"]}>
					<input
						type="text"
						name="messageTo"
						id="messageTo"
						required
						aria-required="true"
					/>
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
						rows="8"
						required
						aria-required="true"
					></textarea>
				</div>
			</div>
			<div className={styles["field-wrap"]}>
				<div className={styles["label-wrap"]}>
					<label htmlFor="messageFrom">From</label>
				</div>
				<div className={styles["input-wrap"]}>
					<input
						type="text"
						name="messageFrom"
						id="messageFrom"
						required
						aria-required="true"
					/>
				</div>
			</div>
			<fieldset className={styles["field-wrap"]}>
				<div className={styles["label-wrap"]}>
					<legend>Additional options</legend>
				</div>
				<div className={styles["input-wrap--checkbox"]}>
					<input type="checkbox" name="loveFrom" id="loveFrom" />
					<label htmlFor="loveFrom">Include love</label>
				</div>
				<div className={styles["input-wrap--checkbox"]}>
					<input type="checkbox" name="addKisses" id="addKisses" />
					<label htmlFor="addKisses">Include kisses</label>
				</div>
			</fieldset>
			<div className="submit-wrap">
				<button type="submit" className="button">
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
