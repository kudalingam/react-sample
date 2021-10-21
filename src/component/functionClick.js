import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log(`Function Button Clicked`);
  }
  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default FunctionClick;
