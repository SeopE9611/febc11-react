import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo(props){
  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={ props.addItem } />
            {/* <TodoList itemList={ props.itemList } toggleDone={ props.toggleDone } deleteItem={ props.deleteItem } /> */}
            {/* {귀찮아서 propos를 다 전달하기는 했지만 TodoList에서 addItem 함수를 호출해서 item을 추가하면 나중에 상태 관리자가 되지 않아 문제가 될 수 있기 때문에 절대 사용하면 안됨} */}
            <TodoList {...props}/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;