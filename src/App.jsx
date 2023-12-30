import { useReducer } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Friend from "./components/Sidebar/Friend";
import SplitBillForm from "./components/SplitBillForm/SplitBillForm";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const matching = state.filter(
        (friend) =>
          friend.name.toLowerCase() === action.payload.name.toLowerCase()
      ).length;
      if (matching) {
        window.alert(`${action.payload.name} is already added.`);
        return state;
      }
      return [...state, action.payload];
    }
    case "updateBalance":
      return state.map((friend) =>
        friend.id !== action.payload.id
          ? friend
          : {
              ...friend,
              balance: action.payload.balance,
              billValue: action.payload.billValue,
              isActive: false,
            }
      );
    case "setActive":
      return state.map((friend) =>
        friend.id !== action.payload
          ? { ...friend, isActive: false }
          : {
              ...friend,
              isActive: !friend.isActive,
            }
      );
    default:
      throw new Error("Invalid Action");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const activeFriends = state.filter((friend) => friend.isActive);
  return (
    <div className="app">
      <Sidebar
        addFriend={(friend) => dispatch({ type: "add", payload: friend })}
      >
        {state.map((item) => (
          <Friend
            key={item.id}
            friend={item}
            setActive={() => dispatch({ type: "setActive", payload: item.id })}
            className={`${item.isActive && "selected"}`}
          />
        ))}
      </Sidebar>
      {activeFriends.length > 0 && (
        <SplitBillForm
          splitBill={(updatedFriend) =>
            dispatch({ type: "updateBalance", payload: updatedFriend })
          }
          activeFriend={activeFriends[0]}
        />
      )}
    </div>
  );
}
