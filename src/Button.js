import "./index.css";

export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
}
