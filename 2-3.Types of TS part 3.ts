//1. unknown type
let a: unknown;

let b = a + 1; // unknown 이므로 이렇게는 오류

// 이렇게 해야 정상 동작
if (typeof a === 'number') {
  let b = a + 1;
}

if (typeof a === 'string') {
  let b = a.toUpperCase();
}

// 2.void: 아무것도 return 하지 않는 함수
// void를 따로 지정해줄 필요는 없다.
function hello() {
  console.log('x');
}

// 3.never 타입(거의 사용하지는 않음)
// never는 함수가 절대(예외없이) return 하지 않을 때 발생함.
function bye(): never {
  throw new Error('xxx');
}

function hi(name: string | number) {
  if (typeof name === 'string') {
    name; //string
  } else if (typeof name === 'number') {
    name; //number
  } else {
    name; //never (절대 실행되지 않는 코드)
  }
}
