import { useState } from "react";

export const Counter = () => {
  console.log(2)
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count)=>count+1)}>
      {count}
    </button>
  )
}
