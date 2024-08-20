import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet.jsx";
import Welcome from "./components/Welcome.jsx";
import Hello from "./components/Hello.jsx";
import Message from "./components/Message.jsx";
import Counter from "./components/Counter.jsx";
import FunctionClick from './components/FunctionClick.jsx';
import ClassClick from './components/ClassClick.jsx';
import EventBind from './components/EventBind.jsx';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting.jsx';
import NameList from './components/NameList.jsx';
import StyleSheet from './components/StyleSheet.jsx';
import Inline from './components/Inline.jsx';
import './appStyles.css';
import styles from './appStyles.module.css';


export default function App() {
  return (
    <div className="App">
      
      <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>

      <Inline />

      {/*<StyleSheet primary = {true}/>*/}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}

      {/* <FunctionClick /> */
      /* <ClassClick /> */
      /* <EventBind /> */}

      {/* <Counter /> */}

      {/* <Message/> */}

      {/* <Greet name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Henry" heroname="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Chris" heroname="Captain America" /> */}
      
      {/*<Welcome name="Bruce" heroname="Batman"/>
      <Welcome name="Henry" heroname="Superman"/> */}
      {/* <Welcome name="Chris" heroname="Captain America" /> */}
       
      {/* <Hello/> */}
    </div>
  );
}
