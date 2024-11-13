import React from "react";
import Button from "./Button";

function Counter(){
  let [count, setCount] = React.useState(0);

  const handleDown = () => {
    setCount(count - 1);
  };
  const handleUp = () => {
    setCount(count + 1);
  };
  const handleReset = event => {
    setCount(0);
  };

  return (
    <div id="counter">

      <Button choiceColor='red' aaa='submit' bbb={ handleDown }>-</Button><br></br>
      <Button choiceColor='red' className="rounded-button" type='button' onClick={ handleDown }>-</Button>

      {/* aaa 지움 - 이미 button.jsx에 설정했기 때문 */}
      <Button choiceColor='#123123' bbb={ (event) => handleReset(event) }>0</Button>
      <Button choiceColor='blue' aaa='button' bbb={ handleUp }>+</Button>
      <span>{ count }</span>
    </div>
  );
}

export default Counter;