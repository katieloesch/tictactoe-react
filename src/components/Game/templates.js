import gsap from 'gsap';

export const tl1 = gsap.timeline();
export const tl2 = gsap.timeline();
export const tl3 = gsap.timeline();
export const tl4 = gsap.timeline();


export const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal combinations
  [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical combinations
  [0, 4, 8], [2, 4, 6] //diagonal combinations
]

export const boardTemplate = [
  {
    id: 0,
    content: 'empty'
  },
  {
    id: 1,
    content: 'empty'
  },
  {
    id: 2,
    content: 'empty'
  },
  {
    id: 3,
    content: 'empty'
  },
  {
    id: 4,
    content: 'empty'
  },
  {
    id: 5,
    content: 'empty'
  },
  {
    id: 6,
    content: 'empty'
  },
  {
    id: 7,
    content: 'empty'
  },
  {
    id: 8,
    content: 'empty'
  }
]

export const sessionTemplate = {
  player1: '',
  player2: '',
  draws: 0,
  gamesPlayed: 0,
  mute: false
}