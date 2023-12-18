// cur은 시작지점
function dfs(graph, visit, cur) {
  if (visit[cur]) return;
  visit[cur] = 1;
  console.log(cur);

  graph[cur].forEach((next) => {
    dfs(graph, visit, next);
  });
}

// 정점쌍(u, v)의 수
const N = 12;

// 정점의 수
const M = 13;

let graph = Array.from({ length: M + 1 }, () => []);
let visit = Array.from({ length: M + 1 }, () => 0);

// 그래프 생성
graph[1].push(2);
graph[1].push(3);
graph[1].push(4);
graph[3].push(5);
graph[3].push(6);
graph[5].push(7);
graph[5].push(8);
graph[6].push(9);
graph[9].push(10);
graph[9].push(11);
graph[10].push(12);
graph[10].push(13);

dfs(graph, visit, 1);
