var arr = [10, 20, 30];

// 각 요소의 제곱값으로 구성된 새로운 배열 생성
var arr2 = [100, 400, 900];

//for
var arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * arr[i]);
}

//for of (ES6)
var arr2 = [];
for (let item of arr) {
  arr2.push(item * item);
}

//Array.prototype.forEach(), ES5
var arr2 = [];
arr.forEach(function (item) {
  arr2.push(item * item);
});

//Array.prototype.map(), ES6
var arr2 = arr.map(function (item) {
  return item * item;
});

//Arrow function, ES6
var arr2 = [];
arr.forEach((item) => {
  arr2.push(item * item);
});

var arr2 = arr.map((item) => {
  return item * item;
});

console.log(arr2); // [100, 400, 900]
