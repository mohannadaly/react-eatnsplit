import { useState, useRef } from "react";
import styles from "./styles.module.css";
import Button from "../ui/Button/Button";
export default function SplitBillForm({ activeFriend, splitBill }) {
  const [billSplit, setBillSplit] = useState({
    billValue: 0,
    yourExpense: 0,
    friendExpense: 0,
  });
  const payer = useRef("0");
  return (
    <form
      className={styles.formSplitBill}
      onSubmit={(e) => {
        e.preventDefault();
        const payload = { id: activeFriend.id, balance: billSplit.billValue };
        switch (payer.current.value) {
          case "0": {
            splitBill({ ...payload, balance: billSplit.friendExpense * -1 });
            break;
          }
          case "1": {
            splitBill({ ...payload, balance: billSplit.yourExpense });
            break;
          }
        }
      }}
    >
      <h2>SPLIT A BILL WITH {activeFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="number"
        min="0"
        required
        value={billSplit.billValue}
        onChange={(e) => {
          setBillSplit((curr) => ({ ...curr, billValue: e.target.value }));
        }}
      />

      <label>🕴️ Your Expense</label>
      <input
        type="number"
        min="0"
        required
        value={billSplit.yourExpense}
        onChange={(e) => {
          setBillSplit((curr) => ({
            ...curr,
            yourExpense: e.target.value,
            friendExpense: curr.billValue - e.target.value,
          }));
        }}
      />

      <label>🧑‍🤝‍🧑 Friend Expense</label>
      <input
        type="number"
        min="0"
        required
        value={billSplit.friendExpense}
        onChange={(e) => {
          setBillSplit((curr) => ({
            ...curr,
            friendExpense: e.target.value,
            yourExpense: curr.billValue - e.target.value,
          }));
        }}
      />

      <label>🤑 Who is paying the bill?</label>
      <select ref={payer}>
        <option value="0">You</option>
        <option value="1">{activeFriend.name}</option>
      </select>
      <Button buttonType="submit">Split Bill</Button>
    </form>
  );
}
