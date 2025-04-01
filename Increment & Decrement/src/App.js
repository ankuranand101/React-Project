import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incHandler = () => {
    setCount(count + 1);
  };
  const decHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center bg-[#344151] items-center flex-col gap-10">
      <div className='text-[#0398d4] text-4xl font-bold'>
        Incrementer & Decrementer
      </div>
      <div className='bg-white flex justify-center items-center gap-10 w-[300px] h-[100px] rounded-lg text-4xl'>
        <button onClick={decHandler}className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
        <div>{count} </div>
        <button onClick={incHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
        
    </div>
  );
}

export default App;
