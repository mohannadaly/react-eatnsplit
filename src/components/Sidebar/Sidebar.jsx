import styles from "./styles.module.css";
import Friend from "./Friend";
import Button from "../ui/Button/Button";
import AddFriendForm from "../AddFriendForm/AddFriendForm";
import { useState } from "react";
export default function Sidebar({ children, addFriend }) {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  return (
    <div className={styles.sidebar}>
      <ul>{children}</ul>
      {showAddFriendForm && (
        <AddFriendForm
          addFriend={(friend) => {
            setShowAddFriendForm(false);
            addFriend(friend);
          }}
        />
      )}
      <Button onClick={() => setShowAddFriendForm((curr) => !curr)}>
        {showAddFriendForm ? "Close" : "Add"}
      </Button>
    </div>
  );
}
