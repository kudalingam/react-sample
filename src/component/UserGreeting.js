import React, { Component } from "react";
import Message from "./message";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Method 5
    return this.state.isLoggedIn && <h1>Welcome User</h1>;

    // // Method 4
    // let Message;
    // if (this.state.isLoggedIn) return (Message = <h1>Welcome User</h1>);
    // else return (Message = <h1>Welcome Quest</h1>);

    // //Method 3
    // return this.state.isLoggedIn ? (
    //   <h1>Welcome User</h1>
    // ) : (
    //   <h1>Welcome Quest</h1>
    // );

    // //Method 2
    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome User</h1>;
    // } else {
    //   return <h1>Welcome Quest</h1>;
    // }

    //  //Method 1
    // if (this.state.isLoggedIn)
    //   return (
    //     <div>
    //       <h1>Welcome User</h1>
    //     </div>
    //   );
    // else {
    //   return (
    //     <div>
    //       <h1>Welcome Quest</h1>
    //     </div>
    //   );
    // }
  }
}

export default UserGreeting;
