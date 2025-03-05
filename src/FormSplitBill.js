import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [payedByUser, setPayedByUser] = useState("");
  const payedByFriend = bill ? bill - payedByUser : "";
  const [whoisPaying, setsetWhoIsPaying] = useState("user");

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!bill) alert("please fill in the bill input");
    else if (!payedByUser) alert("please fill in the payed by user input");
    else onSplitBill(whoisPaying === "user" ? payedByFriend : -payedByUser);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmitForm}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label> 💰 Bill value</label>
      <input
        type='number'
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label> 🕺 Your expense</label>
      <input
        type='number'
        value={payedByUser}
        onChange={(e) =>
          setPayedByUser(
            Number(e.target.value) > bill ? payedByUser : Number(e.target.value)
          )
        }
      />

      <label> 👯‍♀️ {selectedFriend.name}'s expense</label>
      <input type='text' value={payedByFriend} disabled />

      <label> 💰 Who is paying the bill</label>
      <select
        value={whoisPaying}
        onChange={(e) => setsetWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
