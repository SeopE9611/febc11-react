import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes ={
  children:PropTypes.string, // Number가아닌 string
}

function Counter({children = '0'}){
  const initCount = Number(children) // 형 변환
  const [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1)

  const handleDown = () => {
    setCount(count - step);
  };
  const handleUp = () => {
    setCount(count + step);
  };
  const handleReset = event => {
    setCount(initCount);
  };

// 1초 후에 자동으로 값 한번 증가 useEffect
// 증가 시키고 싶었는데 무한 렌더링 발생
  // setTimeout(()=> {
  //   handleUp();
  // },1000);
  // console.log('1초에 한번씩 Couter 랜더링');

  // mount 된 후에 최초 한번만 값 증가
  // useEffect(()=> {
  //   setTimeout(()=> {
  //     handleUp();
  //   },1000);
  //        // dependencies에 빈 배열을 지정하면 컴포넌트가 마운트 된 후에 한번만 호출됨(업데이트 후 호출 X)
  // }, []) // 만약 dependencies 지정하지 않으면 ([]배열 삭제) 컴포넌트가 마운트 된 후와 업데이트 된 후에 호출 됨 (또다시 무한 루트)

  useEffect(()=> {
    setTimeout(()=> {
      handleUp();
    },1000);
         // dependencies에 값을 지정하면 컴포넌트가 업데이트 될 때 지정한 값중 하나라도 수정되었을 경우 호출됨 
  }, [step]) // 즉 증감치를 올릴 경우 증가함

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

export default Counter;