import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.ParentHandler("Baby")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
