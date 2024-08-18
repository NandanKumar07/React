import React from "react";

// function Greet() {
//   return <h1>Hello, World!</h1>
// }

// if we use export then we cannot be able to change the components real name in the App.js
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} How's your {props.heroname} suit
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
