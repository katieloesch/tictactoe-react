# Tic Tac Toe - React

<img src='./src/assets/pictures/tictactoe_1.jpg' alt='' width=450>

<sub>image source: [pixabay](https://pixabay.com/photos/tic-tac-toe-indoors-activity-game-7737546/)</sub>

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning & Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

<!-- <img src='' alt='' height=500> -->
<!-- <sub>image source: []()</sub> -->

A classic game of Tic Tac Toe built from scratch in 7 days using the React framework. This solo project is the improved version of the tictactoe project built in vanilla Javascript as part of the curriculum for the General Assembly Software Engineering Immersive Course.
This version lets users enter their name and pick a colour. After they start the game, a preview of their symbol will appear in any empty cell when they hover over it and a display notifies them about whose turn it is, who wins or if there's a draw. Users can also reset the game and keep track of the number of draws and wins. The game features animations and sound effects, which can be muted and the LocalStorage option enables users to continue their gaming session where they left off after the page reloads or the internet connection is interrupted.
The updated version of the app is fully responsive for easy navigation on mobile devices.

## <a name="deployment-link"></a> 2. Deployment link

<!-- :link: &nbsp;&nbsp;https:// -->

## <a name="installation"></a> 3. Installation

#### Package Manager: npm (v9.5.0)

- <sub>[website](https://www.npmjs.com/)</sub>
- <sub>[GitHub Repository](https://github.com/npm)</sub>

#### Getting Started

- Ensure [Git](https://git-scm.com/) is installed on your machine.
- Clone the repository by running this command in your terminal:

```zsh
git clone https://github.com/katieloesch/tictactoe-react.git
```

- Navigate to the project directory to install dependencies:

```zsh
cd tictactoe-react
```

### Running the Application Locally in a local development environment:

**1. Install Dependencies**

- Run the following command in the project’s root directory to install all necessary dependencies:

```zsh
npm install
```

**2. Start the Development Server**

- After installing the dependencies, start the development server with:

```zsh
npm start
```

**3. Access the Application**

- The development server will start at `http://localhost:3000`.
  - If your default web browser doesn't automatically open and navigate to the frontend server, you can manually access the application by visiting `http://localhost:3000/` in any web browser.

<br>

## <a name="technologies"></a> 4. Technologies Used

### Core Technologies

- **ReactJS** (v18.2.0)

  - <sub>primary framework used to build the application</sub>
  - <sub>created using the create-react-app tool</sub>
  - <sub>[React documentation](https://reactjs.org/)</sub>
  - <sub>[Create React App documentation](https://create-react-app.dev/)</sub>

<br>

```zsh
npx create-react-app .
```

- **SCSS**
  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>[SCSS documentation](https://sass-lang.com/guide)</sub>

### Key Dependencies

- **js-confetti** (v0.12.0)
  - <sub>A JavaScript library used to create confetti animations on web pages with minimal setup.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/js-confetti)</sub>
  - <sub>[GitHub repository](https://github.com/loonywizard/js-confetti)</sub>
- **gsap** (v3.12.5)
  - <sub>A high-performance JavaScript animation library for creating smooth, complex animations and transitions for web elements.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/gsap)</sub>
  - <sub>[GitHub repository](https://github.com/greensock/GSAP)</sub>
  - <sub>[website](https://gsap.com/)</sub>

### UI and Design

- **Fonts**
  - \'Comfortaa\', designed by Johan Aakerlund
    - <sub>[Font Squirrel](https://www.fontsquirrel.com/fonts/comfortaa)</sub>
    - <sub>[Google Fonts](https://fonts.google.com/specimen/Comfortaa)</sub>
- **Icons**
  - **Iconify**
    - <sub>A free and open-source framework providing access to a vast number of icons, designed for use across various platforms and environments, including React.</sub>
    - <sub>[website](https://icon-sets.iconify.design/)</sub>
    - <sub>[GitHub repository](https://github.com/iconify/iconify/tree/main)</sub>
    - <sub>[license](https://github.com/iconify/iconify/blob/main/license.txt)</sub>
  - **Font Awesome**
    - <sub>An icon library offering a large set of scalable and customisable icons, with a free version that is open source.</sub>
    - <sub>[website](https://fontawesome.com/)</sub>
    - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
    - <sub>[license](https://fontawesome.com/license/free)</sub>
- **Images**
  - **Pixabay**
    - <sub>A free stock photo and media platform offering a vast library of images, videos and music.</sub>
    - <sub>[website](https://pixabay.com/)</sub>
    - <sub>[license](https://pixabay.com/service/license-summary/)</sub>

### Development Tools

- **Git / GitHub**
  - <sub>used for version control and collaboration</sub>
  - <sub>[Git website](https://git-scm.com/)</sub>
  - <sub>[GitHub website](https://github.com/)</sub>
- **Visual Studio Code (VSCode)**
  - <sub>code editor used for development</sub>
  - <sub>[website](https://code.visualstudio.com/)</sub>
  - <sub>[GitHub repository](https://github.com/microsoft/vscode)</sub>
- **Google Chrome & Chrome DevTools**
  - <sub>used for testing, debugging, and developing in the browser</sub>
  - <sub>[Google Chrome website](https://www.google.com/chrome/)</sub>
  - <sub>[Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)</sub>
- **ChatGPT4o**:
  - <sub>generative AI tool used for debugging and development support</sub>
  - <sub>[website](https://chat.openai.com/)</sub>
  - <sub>[GitHub repository](https://github.com/openai)</sub>
- **Hostinger**:
  - <sub>web hosting provider used to deploy the application</sub>
  - <sub>[UK website](https://www.hostinger.co.uk)</sub>

### Resources and tutorials

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

## <a name="wins"></a>8. Wins

- succeeded in transforming a vanilla JS project to a react application
- implementation of the minimax algorithm for the computer moves

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements
