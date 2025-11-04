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

function legalMoves(arr) {
  const result = [];

  arr[0] += 2;
  arr[1] += 1;

  result.push(arr);

  // arr[0] += 1;
  // arr[1] += 2;

  // arr[0] -= 2;
  // arr[1] += 1;

  // arr[0] -= 1;
  // arr[1] += 2;

  // arr[0] -= 2;
  // arr[1] -= 1;

  // arr[0] -= 1;
  // arr[1] -= 2;

  // arr[0] += 1;
  // arr[1] -= 2;

  // arr[0] += 2;
  // arr[1] -= 1;
  return result;
}

function move(first, second) {
  first += 2;
  second += 1;

  if (first < 0 || first > 7 || second < 0 || second > 7) {
    return;
  }
  return [first, second];
}

function findEdges(arr) {
  let first = arr[0];
  let second = arr[1];

  const edge = move(first, second);
  return edge;
}

const start = [7, 7];

console.log(findEdges(start));

// const V = 8;

// const graph = Array.from({ length: V }, () => []);

// const S = 2;
