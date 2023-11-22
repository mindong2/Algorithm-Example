/*
    * 입력코드는 블로그 참고하여 작성 실행은 node 경로
    문제
    N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

    입력
    첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

    출력
    첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

    예제 입력 1 
    5
    5
    4
    3
    2
    1
    예제 출력 1 
    1
    2
    3
    4
    5
*/


let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(+input[i]);
  }
}

numbers.sort((a, b) => a - b);
numbers = numbers.map(v => v + '\n')
console.log(numbers.join(''));