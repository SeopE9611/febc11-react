// Array.prototype.find(callback) : 배열의 각 요소에 대해 콜백 함수를 실행
// callback(elem, index)
// true를 반환하는 첫번쨰 콜백 함수에 전달된 요소를 반환
// true를 반환하는 콜백 함수가 없을 경우 undefined 반환

// 배열 요소 중 2와 3의 최소 공배수 구하기
var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];
// -를 반환할 경우 a, b 정렬
// +를 반환할 경우 b, a 정렬
// =을 반활할 경우 그대로
array.sort((a, b) => a - b); // 오름차순
array.sort((a, b) => b - b); // 내림차순
console.log(array);

var result = array.find((num) => num % 2 === 0 && num % 3 === 0);

console.log(result); // 6
