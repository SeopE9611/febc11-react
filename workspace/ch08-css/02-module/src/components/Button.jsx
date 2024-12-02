import PropTypes from 'prop-types'
import './Button.css'

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(['blue','red','yellow','gray']), // 글자색은 이 4개중 하나 사용 - oneOf
  bg: PropTypes.oneOf(['blue','red','yellow','gray']), // 배경색은 이 4개중 하나 사용 - oneOf
  onClick: PropTypes.func, // 클릭이벤트 대비
}
export default function Button({ children, type='button', bg, color, onClick:clickHandler }) {
  return <button className={`button color-${bg}-${color}`} type={type} onClick={clickHandler}>{children}</button>
  
}