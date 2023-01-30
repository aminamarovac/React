import './App.css';
import React,{useState} from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  const handleClick2 = () => {
    setCounter(counter - 1)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}><div class="app3">
      COUNTER</div>
      <div style={{
        fontSize: '140%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons"></div>
      <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'blue',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick1}><div class="app2">INCREMENT +</div></button>
        <button style={{
          fontSize: '70%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'blue',

          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}><div class="app">DECREMENT -</div></button>
      </div>
  )
}
 

export default Counter;
