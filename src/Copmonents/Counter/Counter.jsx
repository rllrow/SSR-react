import React, {useState} from 'react';
import "./Counter.styles.scss"

const Counter = () => {
  const [count,setCount] = useState(1)
  return (
    <div className='counter__wrapper'>
      <div className='count__content'>{count}</div>
      <button onClick={()=> {
        setCount(count + 1)
      }} disabled={count >= 3}>+1</button>
    </div>
  );
}

export default Counter;