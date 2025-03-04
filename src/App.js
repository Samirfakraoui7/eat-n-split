import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendList from "./FriendList";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriendButton() {
    setShowAddFriend((show) => !show);
  }

  function handleShowAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriendButton();
  }
  function handleSelectedFriend(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectedFriend}
          friends={friends}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleShowAddFriend} />}
       
        <Button onClick={handleShowAddFriendButton}>
          {showAddFriend ? "close" : " Add Friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>}
    </div>
  );
}

export default App;
