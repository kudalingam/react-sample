import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Message: "Welcome Visitors",
    };
  }
  changeMessage() {
    this.setState({
      Message: "Thank you for visiting",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}> Logout</button>
      </div>
    );
  }
}

export default Message;
