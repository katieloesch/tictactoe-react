# Tic Tac Toe - React

day 1: 27/01/2024

- create react app
- remove unnecessacy components
- create new react components for game:

  - header
  - footer
  - game board
  - cell

- css for X and O symbols
- quick process as already in previous project

dependencies:
"gsap": "^3.12.5",
js-confetti

day2: 28/01/2024
check for win
check for draw

tutorials & resources
[Practice React and TypeScript: Tic Tac Toe Game](https://www.youtube.com/watch?v=kIAMcBJDFm4) by [Time to Code](https://www.youtube.com/@timetocode_with_ali)

[Build an Awesome Version of Tic Tac Toe in React Tutorial](https://www.youtube.com/watch?v=4Gt_YyGf6B0) by [Coding With Adam](https://www.youtube.com/@CodingWithAdam)
sounds: https://github.com/CodingWith-Adam/tic-tac-toe-react/tree/main/src/sounds
repo: https://github.com/CodingWith-Adam/tic-tac-toe-react/tree/main

- toggle button for single/multi player
  - [Pure Css Custom Checkbox Design || CSS Toggle Switch](https://www.youtube.com/watch?v=fLu6yrGF47I) by [Coding Circulate](https://www.youtube.com/@codingcirculate)

day 3: 01/03/2024
sound effects
confetti
motion effects

day 4: 04/06/2024

- turn display

- On this day I wanted to tackle the logic for the one-player mode where the user plays against the computer. As I had never created an AI before I decided to start off by having the computer randomly pick an empty cell when it's its turn and then come back later to make it 'smarter' and make better picks.

- To do this, I first created an empty array and then pushed in the indexes of all the empty cells on the board, so the computer knows which tiles are available. I then have the program randomly pick one of those indexes and make its move on the board.

```JavaScript
  const computerMove = (board) => {

    setCurrentSymbol(PLAYER_O);
    const emptyCells = [];

    board.forEach((cell, index) => {
      if (cell === null) {
        emptyCells.push(index)
      }
    })

    const randomIndex = Math.floor(Math.random() * emptyCells.length)
    const computerMove = emptyCells[randomIndex]

    const updatedBoard = [...board];
    updatedBoard[computerMove] = session.o.symbol;
    setBoard(updatedBoard);
    setCurrentSymbol(PLAYER_X);

  }
```
