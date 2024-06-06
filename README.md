# Tic Tac Toe - React

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

<img src='' alt='' height=450>

## <a name="deployment-link"></a> 2. Deployment link

## <a name="installation"></a> 3. Installation

- package manager used: npm - v9.5.0
  - https://www.npmjs.com/package/npm
- to install dependencies, run:

```zsh
npm install
```

- to start application, run:

```zsh
npm start
```

<br>

## <a name="technologies"></a> 4. Technologies Used

- This application is based in ReactJS (v18.2.0), JavaScript, JSX and SCSS.
  - it was created using the 'create-react-app' command
  - https://create-react-app.dev/

```zsh
npx create-react-app .
```

### UI

- fonts:
  - 'Mitr' designed by Cadson Demak
    - source: Font Squirrel
      - https://www.fontsquirrel.com/fonts/mitr
    - also available from Google Fonts:
      - https://fonts.google.com/specimen/Mitr
    - .woff files: assets/fonts directory
- icons:
  - iconify
    - https://icon-sets.iconify.design/
  - fontawesome
    - https://fontawesome.com/
- images

### Additional tools used:

- Git / GitHub
  - used for version control
  - https://git-scm.com/
  - https://github.com/
- Visual Studio Code (VSCode)
  - code editor used for writing CSS, JSX and JavaScript
- Google Chrome browser
  - used for launching the website and displaying the application Google Chrome
- Google Chrome Developer Tools: For troubleshooting and debugging
  - https://www.google.com/intl/en_uk/chrome/
- Hostinger: provider used to host the game online
  - https://www.hostinger.co.uk
- Excalidraw
  - used for building the wireframe
  - https://excalidraw.com/
- chatGTP
  - used for debugging

### Resources and tutorials:

- minimax algorithm

  - Blog: [How to make your Tic Tac Toe game unbeatable by using the minimax algorithm](https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37) by [Ahmad Abdolsaheb](https://www.freecodecamp.org/news/author/ahmad/)
  - YouTube: [JavaScript Tic Tac Toe Project Tutorial - Unbeatable AI w/ Minimax Algorithm](https://www.youtube.com/watch?v=P2TcQ3h0ipQ&t=28s) by [freeCodeCamp.org](https://www.youtube.com/@freecodecamp)
  - YouTube: [Minimax Algorithm for Tic Tac Toe (Coding Challenge 154)](https://www.youtube.com/watch?v=trKjYdBASyQ) by [The Coding Train](https://www.youtube.com/@TheCodingTrain)

- strike

  - [Build an Awesome Version of Tic Tac Toe in React Tutorial](https://www.youtube.com/watch?v=4Gt_YyGf6B0) by [Coding With Adam](https://www.youtube.com/@CodingWithAdam)
    - sounds: https://github.com/CodingWith-Adam/tic-tac-toe-react/tree/main/src/sounds
    - repo: https://github.com/CodingWith-Adam/tic-tac-toe-react/tree/main

- toggle button for single/multi player
  - [Pure Css Custom Checkbox Design || CSS Toggle Switch](https://www.youtube.com/watch?v=fLu6yrGF47I) by [Coding Circulate](https://www.youtube.com/@codingcirculate)

## <a name="deliverables"></a> 5. Deliverables

### MVP

- a working game hosted online
- a git repository hosted on Github, including:

  - a link to the hosted game
  - frequent commits dating back to the very beginning of the project
  - code that is well-formatted and well-commented
  - semantic markup for HTML and CSS while adhering to best practices
  - adherence to KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles

- a Hangman game with the following features:

  - selection of a random word from a list of random words when the page loads
  - visually display a dash for each letter of the random word
  - if the player enters a letter that is in the random word, that letter should appear above the corresponding dash or dashes
  - if the player enters the same letter more than once they should be notified
  - if the player guesses all the letters of the words with 5 or fewer incorrect guesses, a message should be displayed to let the player know they've won
  - if the player makes 6 incorrect guesses, a message should be displayed to let the player know they've lost the game
  - for each wrong guess a new part of a Hangman figure should appear on the screen and the 6th wrong guess completes the figure
  - after winning or losing a game the player can start a new game by clicking a button

- the website should also:
  - include contact information -> email, GitHub, LinkedIn and other relevant links
  - have a mobile-responsive design

### Stretch Goals

- option to display a hint about the unknown random word
- different categories for random words for player to pick from
- animations
- sound effects
- scoreboard to keep track of wins and losses

## <a name="planning"></a>6. Planning / Build Process

This was a solo project I built over the course of 5 days.

### User Stories

- As a user, I should see a number of dashes corresponding to the letters of the random word I'm trying to guess.
- As a user, I should be able to enter letters to guess a random word.
- As a user, I should be able to tell if my guess is correct or not.
- As a user, I should see the correct letters guessed appear above the dashes on the screen.
- As a user, I should be able to see the incorrect letters I guessed appear on the screen separately from the correct letters.
- As a user, I should be notified if I enter the same letter more than once to guess the same word.
- As a user, I should be able to tell when I've won the game and when I've lost.
- As a user, I should be able to start a new game after winning or losing.
- As a user, I should have the option to get a hint about the random word I'm trying to guess.
- As a user, I should be able to easily find the developer's contact information including email, LinkedIn and GitHub accounts.
- As a user, I should be able to navigate the website from any device.

### Day 1 - 22/01/2024

I started this project by setting up a react app using the 'create-react-app' command.

```zsh
npx create-react-app .
```

After removing unnecessary files from the newly created project, I made a 'components' folder to store all the different react components needed for the game.

-

I also created a wireframe on Excalidraw to get an idea of the basic layout of the website.

<img src="./src/assets/images/wireframe.jpg" alt="wireframe" width="450">

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
    setTimeout(() => {
      const emptyCells = [];
      board.forEach((cell, index) => {
        if (cell === null) {
          emptyCells.push(index);
        }
      });
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const computerMove = emptyCells[randomIndex];
      const updatedBoard = [...board];
      updatedBoard[computerMove] = session.o.symbol;
      setBoard(updatedBoard);
      setCurrentSymbol(PLAYER_X);
    }, 750);
  };
```

day 05/06/2024

- refactoring, helper.js
- minimax for computer moves

I replaced the computerMove function, which was initially using random selection to choose a move from the available empty cells with a call to the minimax function, which determines the optimal move for the computer using the minimax algorithm.

```JavaScript

  const computerMove = (board) => {
    setCurrentSymbol(PLAYER_O);
    const bestMove = minimax(board, PLAYER_O);
    const updatedBoard = [...board];
    updatedBoard[bestMove.index] = PLAYER_O;

    const emptyCells = board.reduce((acc, curr, idx) => {
      if (curr === null) acc.push(idx);
      return acc;
    }, []);

    setTimeout(() => {
      setBoard(updatedBoard);
      setCurrentSymbol(PLAYER_X);
    }, 650)

  };

```

The function evaluates all possible moves on the current board and assesses all the potential outcomes to figure out the best move for the computer.
I replaced the forEach method with reduce to find which cells are empty as I forgot about it when I wrote the initial function and thought this was a good opportunity to practice how to use it.
It assigns scores to terminal states (win, loss, draw) and propagates these scores back up the recursion tree to choose the optimal move.

```JavaScript
const minimax = (board, player) => {
  const emptyCells = board.reduce((acc, curr, idx) => {
    if (curr === null) acc.push(idx);
    return acc;
  }, []);

  if (checkWinner(board, PLAYER_X)) {
    return { score: -10 };
  } else if (checkWinner(board, PLAYER_O)) {
    return { score: 10 };
  } else if (emptyCells.length === 0) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < emptyCells.length; i++) {
    const move = {};
    move.index = emptyCells[i];
    board[emptyCells[i]] = player;

    if (player === PLAYER_O) {
      const result = minimax(board, PLAYER_X);
      move.score = result.score;
    } else {
      const result = minimax(board, PLAYER_O);
      move.score = result.score;
    }

    board[emptyCells[i]] = null;
    moves.push(move);
  }

  let bestMove;
  if (player === PLAYER_O) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
};

```

Steps of the Minimax Algorithm
Generate Game Tree: The algorithm generates a tree of all possible moves from the current board state down to the terminal states (win, loss, draw).

Evaluate Terminal States: Assign a score to each terminal state:

Win for AI: +10
Loss for AI: -10
Draw: 0
Propagate Scores Back Up the Tree:

If it's the AI's turn (maximizing player), choose the move with the highest score.
If it's the opponent's turn (minimizing player), choose the move with the lowest score.
Select the Optimal Move: The move at the root of the tree that corresponds to the best score for the maximizing player is chosen as the optimal move.

Base Cases:

If a win for PLAYER_X is detected, return a score of -10.
If a win for PLAYER_O is detected, return a score of 10.
If no more moves are available (draw), return a score of 0.
Recursive Evaluation:

For each available move, simulate the move and recursively call minimax for the next player.
Store the move and its corresponding score.
Choose Optimal Move:

If it’s the AI’s turn (PLAYER_O), choose the move with the highest score.
If it’s the opponent’s turn (PLAYER_X), choose the move with the lowest score.
By following these steps, the minimax algorithm ensures that the AI always makes the best possible move, making it unbeatable.

## <a name="challenges"></a>8. Challenges

-
-

## <a name="wins"></a>8. Wins

- succeeded in transforming a vanilla JS project to a react application
- implementation of the minimax algorithm for the computer moves

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements
