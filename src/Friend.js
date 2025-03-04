export default function Friend({ image, name, balance }) {
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 ? (
        <p className='red'>
          You awes {name} ${Math.abs(balance)}
        </p>
      ) : balance > 0 ? (
        <p className='green'>
          {name} awes you ${Math.abs(balance)}
        </p>
      ) : (
        <p>You and {name} are even</p>
      )}
      <button className='button'>Select</button>
    </li>
  );
}
