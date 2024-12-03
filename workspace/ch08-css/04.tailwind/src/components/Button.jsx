import PropTypes from 'prop-types'

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf(['blue','red','black','white']), // 글자색은 이 4개중 하나 사용 - oneOf
  bg: PropTypes.oneOf(['blue','red','yellow','gray']), // 배경색은 이 4개중 하나 사용 - oneOf
  size: PropTypes.oneOf(['sm','md','lg']),
  onClick: PropTypes.func, // 클릭이벤트 대비
}
export default function Button({ children, bg="gray", color="black", size="md", type='button', onClick:clickHandler }) {
  let bgColor = {
    gray: 'bg-gray-400',
    blue: 'bg-blue-400',
    red: 'bg-red-400',
    yellow: 'bg-yellow-400',
  }

  let textColor = {
    black:'text-black',
    white:'text-white',
    blue:'text-blue-500',
    red:'text-red-500',
  }

  let btnSize = {
    sm :'py-1 px-2 text-sm',
    md :'py-2 px-4 text-base',
    lg :'py-2 px-6 text-lg',
  }
  return <button className={`${bgColor[bg]} ${textColor[color]} ${btnSize[size]} m-1 rounded-md`} type={type} onClick={clickHandler}>{children}</button>
  
}