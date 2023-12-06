// 간단한 그리디 예제

let K = 10;
let M = 4790;

let arr = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

let answer = 0;
arr.reverse();

arr.forEach((money) => {
  while (M - money >= 0) {
    M -= money;
    answer++;
    if (M === 0) return;
  }
});

console.log(answer);
