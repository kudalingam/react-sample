import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    // this.ParentHandler = this.ParentHandler.bind(this);
  }
  ParentHandler(childName) {
    alert(`Welcome ${this.state.parentName} From ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent ParentHandler={() => this.ParentHandler("Child")} />
      </div>
    );
  }
}

export default ParentComponent;
