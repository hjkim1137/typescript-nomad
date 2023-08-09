let a: number[] = [1, 2];
let b: string[] = ['i1', '1'];
let c: boolean[] = [true];

// 아래와 같이 타입스크립트가 알아서 추론하게끔 할 수도 있다.(권장)
let d = [1, 2];
let e = ['i1', '1'];
let f = [true];

// optional type
const Player: {
  name: string;
  age?: number; //age 유무 옵션으로 두고 싶으면 '?'붙이기
} = {
  name: 'nico',
};

// alias(별칭) type
// 만약 player가 수만개 일때, 하나씩 일일히 만들어주면 비효율, 그럴 때 필요한게 alias

type Player = {
  name: string;
  age?: number;
};

const nico: Player = {
  name: 'nico',
};

const lynn: Player = {
  name: 'Lynn',
  age: 12,
};

// 이런식으로도 쓸 수 있다.
type Age = number;
type User = {
  name: string;
  age?: Age;
};

// 함수에서 사용하는 법(중요)
function playerMaker(name: string) {
  return {
    name: name, // name 이라고만 써도 된다
  };
}
const kate = playerMaker('kate');
kate.age = 12; // 이렇게 쓰면 동작하지 않는다. age 속성 없기 때문

// 이렇게 return 값에 대한 type(Player)을 명시해주면 된다.
// Player 타입을 리턴하는 함수
function playerMaker2(name: string): Player {
  return {
    name,
  };
}
const yuna = playerMaker2('yuna');
yuna.age = 12; // Player 타입을 정의해주었기 때문에 동작함

// 화살표 함수로 작성하는 법
const playerMaker3 = (name: string): Player => ({ name });
const june = playerMaker3('june');
june.age = 12;
