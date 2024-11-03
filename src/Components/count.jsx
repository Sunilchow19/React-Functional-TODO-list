import { useState } from "react";

function Count() {
  let [state, setstate] = useState(0);

  // console.log([state,setstate]);

  function inc() {
    return setstate(state + 1);
  }

  function dec() {
    return setstate(state - 1);
  }

  return (
    <>
      <h1>Hello Sunil</h1>
      <h1>{state}</h1>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
}

export default Count;
