import styles from "./styles.module.css";
export default function Button({ children, onClick, buttonType = "button" }) {
  return (
    <button className={styles.button} onClick={onClick} type={buttonType}>
      {children}
    </button>
  );
}
