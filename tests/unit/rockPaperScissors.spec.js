/* eslint-env jest */
import rockPaperScissors from '../../src/rockPaperScissors'

describe('WIN', () => {
  it('Rock -> Scissors', () => {
    expect(rockPaperScissors('rock', 'scissors')).toBe(1)
  })

  it('Paper -> Rock', () => {
    expect(rockPaperScissors('paper', 'rock')).toBe(1)
  })

  it('Scissors -> Paper', () => {
    expect(rockPaperScissors('scissors', 'paper')).toBe(1)
  })
})

describe('DRAW', () => {
  it('Rock <-> Rock', () => {
    expect(rockPaperScissors('rock', 'rock')).toBe(0)
  })
  it('Paper <-> Paper', () => {
    expect(rockPaperScissors('paper', 'paper')).toBe(0)
  })
  it('Scissors <-> Scissors', () => {
    expect(rockPaperScissors('scissors', 'scissors')).toBe(0)
  })
})

describe('LOSE', () => {
  it('Rock <- Paper', () => {
    expect(rockPaperScissors('rock', 'paper')).toBe(-1)
  })
  it('Paper <- Scissors', () => {
    expect(rockPaperScissors('paper', 'scissors')).toBe(-1)
  })
  it('Scissors <- Rock', () => {
    expect(rockPaperScissors('scissors', 'rock')).toBe(-1)
  })
})
