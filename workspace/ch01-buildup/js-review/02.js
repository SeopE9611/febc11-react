var itemList = [
  { no: 1, todo: "두부", done: true },
  { no: 2, todo: "계란", done: false },
  { no: 3, todo: "라면", done: true },
];

console.log(itemList[0]);
console.log(itemList[1]);

var [first, second] = itemList;
console.log(first);
console.log(second);

// var state = useState(0);
// console.log(state[0]);
// console.log(state[1](state[0] + 1));

// var [count, setstate] = useState(0);
// console.log(count);
// console.log(setstate[1](count + 1));

console.log(second.no, second.todo);

const no = 100;
var { todo, no: number, hello } = second;
console.log(number, todo, hello);

function Button(props) {}

function Button({ color, type, onClick }) {}
