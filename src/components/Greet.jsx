import React from "react";

// function Greet() {
//   return <h1>Hello, World!</h1>
// }

// if we use export then we cannot be able to change the components real name in the App.js
const Greet = props => {
  const {name, heroname} = props
  return (
    <div>
      <h1>
        Hello {name} How's your {heroname} suit
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
