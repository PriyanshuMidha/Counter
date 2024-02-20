import { useState } from "react";
import "./App.css";

function App() {
const[count,setCount] = useState(0);
  function decHandler(){
    setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0) ;
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

      <div className="text-[#0398d4] font-medium text-2xl">inccrement and decrement</div>
      <div className="bg-white flex justify-center gap-12 rounded-sm py-3 text-[25px] text-[#344151] ">

        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div>{count}</div>
        <button onClick={incHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 rounded-sm text-lg " >reset</button>
    </div>

  );
}

export default App;
