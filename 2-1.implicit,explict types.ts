# 타입시스템

[타입추론 | implicit]
let a = 'hello'; // string
a = 'bye'; // string
a = 1; // string -> number x

[명시적 정의 | explicit, 권장하지 않음]
let b: boolean = 'x'; // boolan 타입에 string 할당 불가
let b: boolean = 'false';

// let c = [1, 2, 3]; // number[]
let c: number[] = [];
c.push('1'); // string을 number에 할당 불가
