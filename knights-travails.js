function knightMoves(start, end) {
  const q = [];
  const visited = new Set();
  const par = new Map();
  const dist = new Map();

  dist.set(JSON.stringify(start), 0);
  q.push(start);

  while (q.length > 0) {
    const curr = q.shift();
    visited.add(JSON.stringify(curr));
    const possibleMoves = getEdges(curr);

    for (const move of possibleMoves) {
      if (!visited.has(JSON.stringify(move))) {
        q.push(move);
        dist.set(JSON.stringify(move), dist.get(JSON.stringify(curr)) + 1);
        par.set(JSON.stringify(move), curr);
      }
    }
  }

  return printShortestDistance(par, start, end);
}

function printShortestDistance(par, start, end) {
  const path = [];
  let currentNode = end;
  while (par.get(JSON.stringify(currentNode))) {
    path.push(currentNode);
    currentNode = par.get(JSON.stringify(currentNode));
  }
  path.push(start);
  return path.reverse();
}

function getEdges(start) {
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

  let edges = [];

  for (let i = 0; i < moves.length; i++) {
    const result = legalMove(first, second, moves[i].x, moves[i].y);
    edges.push(result);
  }

  edges = edges.filter((element) => {
    return element !== undefined;
  });

  return edges;
}

function legalMove(firstMove, secondMove, x, y) {
  firstMove += x;
  secondMove += y;

  if (firstMove < 0 || firstMove > 7 || secondMove < 0 || secondMove > 7) {
    return;
  }

  return [firstMove, secondMove];
}

console.log(knightMoves([0, 0], [7, 7]));
