//import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/greet";
import Welcome from "./component/welcome";
import Hello from "./component/hello";
import Message from "./component/message";
import Count from "./component/count";
import ClassClick from "./component/classClick";
import FunctionClick from "./component/functionClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreeting from "./component/UserGreeting";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Lingam">
        <p>This is Mine</p>
      </Greet>
      <Greet name="Ankita">
        <p>This is My Baby</p>
      </Greet>
      <Greet name="Ankikuda">
        <button>Join Together</button>
      </Greet>

      <Welcome name="AnkiLingam" />
      <Greet name="Ankita" />
      <Hello name="Ankikuda" />
      {/* <Message /> */}
      {/* <Count /> */}
      {/* <ClassClick />
      <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
