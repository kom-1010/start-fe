let a = 'aa';
const b = 'bb';
console.log(a, b);

//템플릿 표현식

//es5
var cp = 'ssully';
var url1 = 'https://1boon.kakao.com/' + cp;
console.log(url1);

//es6
const url2 = `https://1boon.kakao.com/${cp}`
console.log(url2)

var str = `aaaaaa \
 sdasd`;
const s = `aaaaa
cccc
ddd`
console.log(str, s);

//기본매개변수
function sum(x, y = 2){
    return x + y;
}
console.log(sum(1));

//화살표 함수
const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);
console.log(newArr);

document.getElementById('box').addEventListener('click', event => console.log(1))

//전개 구문
function sumArr(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sumArr(...numbers));

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

const obj = {
    a: 1,
    b: 2,
};
const newObj = { ...obj };
console.log(newObj);

//Rest 파라미터
function func(...param) {
    console.log(param);
}
func(1, 2, 3);
  
// es5
function foo() {
    console.log(arguments);
}
foo(1, 2, 3);

//구조 분해 할당
//es5
// var team = obj.team;
// var area = obj.area;

// var col1 = cols[0];
// var col2 = cols[1];

//es6
// const { team, area } = obj;
// const [col1, col2] = cols;
// const [, cols2] = cols;

// es5
// function getArea(options) {
//   return options.width * options.height;
// }

// es6
// function getArea({ width, height }) {
//   return width * height;
// }

//향상된 객체 리터럴
const number = 1234;

const student = {
  // number: number
  number,
};
console.log(student.number);

const student2 = {
    number,
    // playGame:function(){
    // },
    playGame() {
      console.log('play');
    },
};
student2.playGame()