import Button from "./Button";

export default function Friend({ selectedFriend, onSelectFriend, friend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className='red'>
          You awes {friend.name} ${Math.abs(friend.balance)}
        </p>
      ) : friend.balance > 0 ? (
        <p className='green'>
          {friend.name} awes you ${Math.abs(friend.balance)}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}

      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "selected"}
      </Button>
    </li>
  );
}
