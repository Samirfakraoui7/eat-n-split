import Friend from "./Friend";
import "./index.css";

export default function FriendList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <div className='sidebar'>
      <ul>
        {friends.map((friend) => (
          <Friend {...friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
