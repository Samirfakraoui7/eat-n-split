import Friend from "./Friend";
import "./index.css";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend {...friend} key={friend.id} />
      ))}
    </ul>
  );
}
