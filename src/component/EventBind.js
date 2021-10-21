import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.EventHandler = this.EventHandler.bind(this);
  }
  EventHandler = () => {
    this.setState({
      message: "Good Bye",
    });
  };
  Reset() {
    this.setState({
      message: "Welcome",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <br />
        {/* <button onClick={this.EventHandler.bind(this)}>Click 1</button> */}
        {/* <button onClick={() => this.EventHandler()}>Click 2</button> */}
        {/* <button onClick={this.EventHandler}>Click 3</button> */}
        <button onClick={this.EventHandler}>Click 4</button>
        <button onClick={() => this.Reset()}>Reset</button>
      </div>
    );
  }
}

export default EventBind;
