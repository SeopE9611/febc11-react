import './Button.css'
export default function Button({ children, aaa='button', bbb, choiceColor }) { //type안에 생략되어있다면 버튼으로 기본 지정
  // return <button>버튼</button>
  return <button className="rounded-button" style={{ backgroundColor: choiceColor }} type={ aaa } onClick={ bbb }>{ children }</button>
  
}