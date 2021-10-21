import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
    };
  }
  changeCount() {
    // this.setState({
    //   Count: this.state.Count + 10,
    // });
    this.setState((prevState) => ({
      Count: prevState.Count + 1,
    }));
  }
  incrementFive() {
    for (let index = 0; index < 5; index++) {
      this.changeCount();
    }
  }
  reset() {
    this.setState({
      Reset: (this.state.Count = 0),
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.Count}</h1>
        <button onClick={() => this.incrementFive()}> Increment</button>
        <br />
        <button onClick={() => this.reset()}> Reset</button>
      </div>
    );
  }
}

export default Count;
