import Login from './Login';
import Button from './components/Button';

// 첫번째 방법 : import 해서 css 사용
function App(){
  return (
    <>
      <h1>CSS import 사용</h1>
      <div className='container'>
      <Button>그냥 버튼</Button>
      <Button bg='blue' color='red'>파란 배경의 빨간 글자</Button>
      <Button bg='yellow' color='red'>노란 배경의 빨간 글자</Button>
      <Button bg='gray' color='blue'>회색 배경의 파란 글자</Button>
      </div>

      <Login/>
    </>
  );
}

export default App;