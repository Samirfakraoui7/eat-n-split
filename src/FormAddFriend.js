import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ friends, setFriends }) {
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendBalance, setNewFriendBalnce] = useState("");
  const [newFriendImage, setNewFriendImage] = useState("");

  function handleFriendBalanceInput(e) {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setNewFriendBalnce(Number(value));
    }
  }
  function handleFriendImageInput(e) {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setNewFriendImage(Number(value));
    }
  }

  function handleAddFriend(e) {
    e.preventDefault();

    const friendItem = {
      id: Date.now(),
      name: newFriendName,
      image: `https://i.pravatar.cc/48?u=${newFriendImage}`,
      balance: newFriendBalance,
    };
    if (!newFriendName) alert("please fill in the new friend name");
    else if (!newFriendBalance) alert("please fill in the new friend balance");
    else if (!newFriendImage) alert("please fill in the new friend image id");
    else setFriends((friends) => [...friends, friendItem]);
    setNewFriendName("");
    setNewFriendBalnce("");
    setNewFriendImage("");
  }

  // ;
  return (
    <form className='form-add-friend' onSubmit={handleAddFriend}>
      <label> 👯‍♀️ Friend name</label>
      <input
        type='text'
        value={newFriendName}
        name='name'
        placeholder='Friend name'
        onChange={(e) => setNewFriendName(e.target.value)}
      />

      <label> 💰 Friend balance</label>
      <input
        type='text'
        name='balance'
        value={newFriendBalance}
        placeholder='Friend balance'
        onChange={(e) => handleFriendBalanceInput(e)}
      />
      <label> 🎇 Friend image</label>
      <input
        type='text'
        name='image'
        value={newFriendImage}
        placeholder='Friend image id'
        onChange={(e) => handleFriendImageInput(e)}
      />

      <Button>Add</Button>
    </form>
  );
}
