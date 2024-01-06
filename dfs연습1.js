// N개의 몬스터 존재, 해당 몬스터를 잡을때 소모되는 HP와 얻는 경험치가 존재한다.
// HP와이때 HP가 100으로 시작하며, 0 또는 음수가 되면 죽게 되는데, 죽지 않으면서 최대 경험치를 얼마나 얻을 수 있는지 구해보자
// (1 <= N <= 20)

// 입력 = 몬스터 3마리 / 각 공격력 1 21 79 /각 경험치 20 30 25

function dfs(N, damage, exp, cur, hp) {
  let ans = 0;
  for (let i = cur; i < N; i++) {
    hp = hp - damage[i];
    if (hp > 0) {
      ans = ans + exp[i];
      dfs(N, damage, exp, i + 1, hp);
    } else {
      return ans;
    }
  }
}

let N = 3;
let damage = [1, 21, 79];
let exp = [20, 30, 25];

let ans = dfs(N, damage, exp, 1, 100);

console.log(ans);
