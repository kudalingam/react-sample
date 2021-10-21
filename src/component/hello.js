import React from "react";

const Hello = () => {
    // return (
    // <div>
    //     <h1>
    // Hello  Lingam
    //     </h1>
    // </div>
    // )
    return React.createElement('div',{id:"hello",className:"dummyClass"},
    React.createElement('h1',null,'Hello Lingam'))
}

export default Hello;