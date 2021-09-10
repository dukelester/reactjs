import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/inline";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";



function App() {
  return (
    <div className="App">
        <Greet name="dukelester" age='20'> This is so awesome to learn a new tech language</Greet>
        <Greet name="Harb" heroName="Batman">
            <button type="submit" className="btn btn-primary font-weight-bold mt-3">Log in</button>

        </Greet>
      <Greet name="james" heroName="huo"/>

        <Welcome name="dukelester" age='20'>
            <button type="submit" className="btn btn-primary font-weight-bold mt-3">Log in</button>
        </Welcome>
        <Welcome name="james" heroName="huo"/>
    <Hello/>
    <Message/>

    <br/><br/><br/>
    <FunctionClick/>
    {/*//class compnent */}
    <ClassClick />
    <div>
        <EventBind />
    </div>
        <div>
            <ParentComponent />
        </div>
        <UserGreeting />
        <NameList />
        <Stylesheet />
        <Inline/>
        <Form />
        <LifecycleA/>

    </div>
  );
}

export default App;
