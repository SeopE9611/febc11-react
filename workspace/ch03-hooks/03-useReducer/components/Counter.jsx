import { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes ={
  children:PropTypes.string, // Number가아닌 string
}

function Counter({children = '0'}){
  const initCount = Number(children) // 형 변환


  // const [count, setCount] = useState(initCount);
  const [count, countDispatch] = useReducer(counterReducer, initCount)
  const [step, setStep] = useState(1)

  const handleDown = () => {
    countDispatch({type:'Down', value: step})
  };
  const handleUp = () => {
    countDispatch({type:'Up', value: step})
  };
  const handleReset = event => {
    countDispatch({type:'Reset', value: initCount})
  };
  
    useEffect(()=> {
    console.log('setup 함수 호출.');
    const timer = setInterval(()=>{
      console.log(new Date());
    },1000)

    return () => {
      clearInterval(timer)
    }
  },[]) 


  return (
    <div id="counter">
      <label htmlFor='step'>증감치</label>
      {/* 제어 컴포넌트 value, onClick 사용 */}
      <input id='step' type="number" style={{width: '40px'}} value={step} onChange={ e => setStep (Number(e.target.value))}/>
      <Button color="red" onclick={handleDown}>-</Button>
      <Button onclick={handleReset}>{initCount}</Button>
      <Button color="blue" onclick={handleUp}>+</Button>
      <span>{count}</span>
    </div>
  );
}

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수 - Reducer
// 로직은 컴포넌트 내부에서 직접 구현 하는게 아닌 외부에서 구현
// state: 이전 상태(useReducer 가 내부적으로 관리, 이전의 리턴값이 다음의 state로 전달)
// action: 동작을 정의한 객체(자유롭게 작성. 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴값: 새로운 상태
function counterReducer(state, action){ // (5, { type: 'Down', value : 3})
  let newState;

  switch(action.type){
    case 'Down':
      newState = state - action.value;
      break
    case 'Up':
      newState = state + action.value;
      break
    case 'Reset':
      newState = action.value;
      break
    default:
      newState = state;

  }

  return newState;
}
export default Counter;