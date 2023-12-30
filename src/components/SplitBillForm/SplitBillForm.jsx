import { useState } from "react";
import styles from "./styles.module.css";
export default function SplitBillForm({ activeFriend, splitBill }) {
  const [payload, setPayload] = useState({
    id: activeFriend.id,
    balance: activeFriend.balance,
    billValue: activeFriend.billValue,
  });
  return (
    <form className={styles.formSplitBill}>
      <h2>SPLIT A BILL WITH {activeFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" required value={payload.billValue} />

      <label>🕴️ Your Expense</label>
      <input type="text" required />

      <label>🧑‍🤝‍🧑 Bill Value</label>
      <input type="text" required />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="0">You</option>
        <option value="1">{activeFriend.name}</option>
      </select>
    </form>
  );
}
