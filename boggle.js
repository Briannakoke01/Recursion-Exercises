

function makeBoard(boardString) {


  const letters = boardString.split(/\s+/);

  const board = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return board;
}

function findFrom(board, word, y, x, seen) {
  if (board[y][x] != word[0]) return false;


  if (seen.has(y + "-" + x)) return false;


  if (word.length === 1) return true;



  seen = new Set(seen);
  seen.add(y + "-" + x);

  if (y > 0 && findFrom(board, word.slice(1), y - 1, x, seen)) return true;
  if (y < 4 && findFrom(board, word.slice(1), y + 1, x, seen)) return true;
  if (x > 0 && findFrom(board, word.slice(1), y, x - 1, seen)) return true;
  if (x < 4 && findFrom(board, word.slice(1), y, x + 1, seen)) return true;



  return false;
}

function find(board, word) {

  for (let y = 0; y < 5; y++)
    for (let x = 0; x < 5; x++)
      if (findFrom(board, word, y, x, new Set())) return true;

 

  return false;
}



const board = makeBoard(`N C A N E
                         O U I O P
                         Z Q Z O N
                         F A D P L
                         E D E A Z`);


console.log(find(board, "NOON"), true);


console.log(find(board, "NOPE"), true);


console.log(find(board, "CANON"), false);

console.log(find(board, "QUINE"), false);

console.log(find(board, "FADED"), true);


const board2 = makeBoard(`E D O S Z
                          N S O N R
                          O U O O P
                          Z Q Z O R
                          F A D P L`);

console.log(find(board2, "NOOOOS"), true);
