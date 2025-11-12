function knightMoves(start, end) {
  if (checkStartingPos(start, end)) {
    return "Illegal starting position";
  }
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

  return printShortestDistance(par, start, end, dist);
}

function checkStartingPos(start, end) {
  if (
    start[0] < 0 ||
    start[0] > 7 ||
    start[1] < 0 ||
    start[1] > 7 ||
    end[0] < 0 ||
    end[0] > 7 ||
    end[1] < 0 ||
    end[1] > 7
  ) {
    return true;
  }
  return false;
}

function printShortestDistance(par, start, end, dist) {
  const path = [];
  let currentNode = end;
  while (par.get(JSON.stringify(currentNode))) {
    path.push(currentNode);
    currentNode = par.get(JSON.stringify(currentNode));
  }
  path.push(start);
  const numOfMoves = dist.get(JSON.stringify(end));
  const message = `You made it in ${numOfMoves} moves! Here's the path:`;
  console.log(message);
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

console.log(knightMoves([1, 0], [6, 7]));
