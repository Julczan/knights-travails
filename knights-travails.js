// function shortestPathBFS(graph, S, par, dist) {
//   const q = [];
//   dist[S] = 0;
//   q.push(S);

//   while (q.length > 0) {
//     const node = q.shift();

//     for (const neighbor of graph[node]) {
//     }
//   }
// }

// function printShortestDistance(graph, S, D, V) {
//   const par = Array(V).fill(-1);
//   const dist = Array(V).fill(Infinity);
//   shortestPathBFS(graph, S, par, dist);

//   const path = [];

//   let currentNode = D;
//   path.push(D);

//   while (par[currentNode !== -1]) {
//     path.push(par[currentNode]);
//     currentNode = par[currentNode];
//   }
// }

const start = [3, 3];

let first = start[0];
let second = start[1];

const moves = [
  { x: 2, y: 1 },
  { x: 1, y: 2 },
  { x: -2, y: 1 },
  { x: -1, y: 2 },
  { x: -2, y: -1 },
  { x: -1, y: -2 },
  { x: 1, y: -2 },
  { x: 2, y: -1 },
];

class legalMoves {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

function legalMove(firstMove, secondMove, x, y) {
  firstMove += x;
  secondMove += y;

  return [firstMove, secondMove];
}

for (let i = 0; i < moves.length; i++) {
  const result = legalMove(first, second, moves[i].x, moves[i].y);
  console.log(result);
}
