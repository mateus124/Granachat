import { IoMdSend } from "react-icons/io";
import styles from "./SendMessage.module.css";

const SendMessage = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="message"
        id="message"
        placeholder="Me fale sobre seus gastos..."
      />
      <button className={styles.submitButton} type="submit" aria-label="Enviar mensagem">
        <IoMdSend size={26} />
      </button>
    </form>
  );
};

export default SendMessage;
