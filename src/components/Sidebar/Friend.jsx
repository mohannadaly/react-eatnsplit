import styles from "./styles.module.css";
import Button from "../ui/Button/Button";
export default function Friend({ friend, setActive }) {
  return (
    <li>
      <img src={friend.imgUrl} alt={friend.id} />
      <h3>{friend.name}</h3>
      <p
        className={`
        ${friend.balance < 0 && styles.green}
        ${friend.balance > 0 && styles.red}
        `}
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even.`
          : friend.balance < 0
          ? `${friend.name} owes you $${friend.balance}.`
          : `You owe ${friend.name} $${friend.balance}`}
      </p>
      <Button onClick={setActive}>
        {friend.isActive ? "Close" : "Select"}
      </Button>
    </li>
  );
}
