/*
    douzone-hoon-math npm 모듈 테스트(모든 패키지: 로컬 배포)

    $ npm i ../douzone-hoon-math
    명령으로 설치후 테스트 할 것
*/

var dzMath = require('douzone-hoon-math');

console.log(dzMath.sum(10,20,30,40,50));
console.log(dzMath.max(10,20,30,40,50));
console.log(dzMath.min(10,20,30,40,50));