/**
 *
 * @param {String} choice
 * @param {String} opponent
 * @return {Number} result aa
 */
export default function rockPaperScissors (choice, opponent) {
  if (choice === opponent) {
    return 0
  }

  switch (choice) {
    case 'rock':
      return opponent === 'scissors' ? 1 : -1
    case 'paper':
      return opponent === 'rock' ? 1 : -1
    case 'scissors':
      return opponent === 'paper' ? 1 : -1
  }
}
