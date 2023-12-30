import { useState } from "react";
import Button from "../ui/Button/Button";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
export default function AddFriendForm({ addFriend }) {
  const [newFriend, setNewFriend] = useState({
    id: uuidv4(),
    name: "",
    imgUrl: "",
    isActive: false,
    balance: 0,
    billValue: 0,
  });
  return (
    <form
      className={styles.formAddFriend}
      onSubmit={(e) => {
        e.preventDefault();
        addFriend(newFriend);
      }}
    >
      <label>🏷️ Friend Name</label>
      <input
        type="text"
        value={newFriend.name}
        onChange={(e) =>
          setNewFriend((friend) => ({ ...friend, name: e.target.value }))
        }
        required
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={newFriend.imgUrl}
        onChange={(e) =>
          setNewFriend((friend) => ({ ...friend, imgUrl: e.target.value }))
        }
        required
      />
      <Button buttonType="submit">Add</Button>
    </form>
  );
}
