import PropTypes from 'prop-types'
import './Button.css'


Button.proptype = {
  children :PropTypes.node.isRequired,
  aaa: PropTypes.string,
  onClick: PropTypes.func,
  choiceColor:PropTypes.string,  
}

export default function Button({ children, aaa='button', onclick: bbb, choiceColor }) { //type안에 생략되어있다면 버튼으로 기본 지정
  // return <button>버튼</button>
  return <button className="rounded-button" style={{ backgroundColor: choiceColor }} type={ aaa } onClick={ bbb }>{ children }</button>
  
}

