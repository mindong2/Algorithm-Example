// bfs 너비 우선 탐색

function bfs(graph, visit, start) {
  queue.push(start);

  while (queue.length) {
    let cur = queue.shift();
    if (visit[cur] === 1) continue;
    visit[cur] = 1;
    console.log(cur);

    graph[cur].forEach((next) => {
      queue.push(next);
    });
  }
}

// 정점의 쌍
let N = 12;
// 정점의 개수
let M = 13;

let graph = Array.from({ length: M + 1 }, () => []);
let visit = Array.from({ length: M + 1 }, () => 0);
let queue = [];

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

bfs(graph, visit, 1);
