function knightMoves(start, end) {
  const q = [];
  const visited = new Set();
  q.push(start);

  while (q.length > 0) {
    const curr = q.shift();
    visited.add(JSON.stringify(curr));
    const possibleMoves = getEdges(curr);

    for (const move of possibleMoves) {
      if (!visited.has(JSON.stringify(move))) {
        q.push(move);
      }
    }
  }

  return visited;
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

console.log(knightMoves([3, 3]));
