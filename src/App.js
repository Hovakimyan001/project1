import './App.css';
import { useRef, useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

function App() {
  const contentRef = useRef();
  // console.log(contentRef);
  const textRef = useRef();
  const [cash, setCash] = useState(1000);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Render Component');
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    document.body.style.background = `rgb(${r},${g},${b})`;
  }, [cash]);


  useEffect(() => {
    document.title = text;
  }, [text])


  return (
    <div className="App">
      <div className="content" ref={contentRef}></div>
      <span ref={textRef}>Armenia</span>
      <button onClick={(e) => {
        contentRef.current.style.background = 'orange';
        e.target.style.background = 'red';
        textRef.current.style.color = 'red';
      }}>Change</button>
      <span>{cash}</span>
      <button onClick={() => {
        // setCash(cash + +prompt());
        setCash(cash + 1);
      }}>Add Cash</button>
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }} />
      <span>{text}</span>
      <div className="post">
        <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" alt="" />
        <div className="bar">
          <FaHeart />
          <span>Likes : 0</span>
        </div>
      </div>
    </div>
  );
}
export default App;
