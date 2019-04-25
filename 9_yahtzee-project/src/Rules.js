/** Rule for Yahtzee scoring.
 *
 * This is an "abstract class"; the real rules are subclasses of these.
 * This stores all parameters passed into it as properties on the instance
 * (to simplify child classes so they don't need constructors of their own).
 *
 * It contains useful functions for summing, counting values, and counting
 * frequencies of dice. These are used by subclassed rules.
 */

class Rule {
  //* 'params' must be an object
  constructor(params) {
    // put all properties in params on instance
    Object.assign(this, params)
  }

  sum(dice) {
    // sum of all dice
    return dice.reduce((prev, curr) => prev + curr)
  }

  freq(dice) {
    // frequencies of dice values
    const freqs = new Map()
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1)
    return Array.from(freqs.values())
  }

  count(dice, val) {
    // # times val appears in dice
    return dice.filter(d => d === val).length
  }
}

/** Given a sought-for val, return sum of dice of that val.
 *
 * Used for rules like "sum of all ones"
 */

class TotalOneNumber extends Rule {
  evalRoll = dice => {
    return this.val * this.count(dice, this.val)
  }
}

/** Given a required # of same dice, return sum of all dice.
 *
 * Used for rules like "sum of all dice when there is a 3-of-kind"
 */

class SumDistro extends Rule {
  evalRoll = dice => {
    // do any of the counts meet or exceed this distro?
    return this.freq(dice).some(c => c >= this.count) ? this.sum(dice) : 0
  }
}

/** Check if full house (3-of-kind and 2-of-kind) */

class FullHouse extends Rule {
  evalRoll = dice => {
    const diceFreq = this.freq(dice)
    return diceFreq.includes(3) && diceFreq.includes(2) ? this.score : 0
  }
}

/** Check for small straights. */

class SmallStraight extends Rule {
  evalRoll = dice => {
    const diceSet = new Set(dice)
    const sortedDice = Array.from(diceSet)
      .sort()
      .join('')
    const isSmallStraight =
      sortedDice.includes('1234') ||
      sortedDice.includes('2345') ||
      sortedDice.includes('3456')

    return isSmallStraight ? this.score : 0
  }
}

/** Check for large straights. */

class LargeStraight extends Rule {
  evalRoll = dice => {
    const d = new Set(dice)

    // large straight must be 5 different dice & only one can be a 1 or a 6
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0
  }
}

/** Check if all dice are same. */

class Yahtzee extends Rule {
  evalRoll = dice => {
    // all dice must be the same
    return this.freq(dice)[0] === 5 ? this.score : 0
  }
}

// ones, twos, etc score as sum of that value
const ones = new TotalOneNumber({ val: 1, description: '1 point per 1' })
const twos = new TotalOneNumber({ val: 2, description: '2 point per 2' })
const threes = new TotalOneNumber({ val: 3, description: '3 point per 3' })
const fours = new TotalOneNumber({ val: 4, description: '4 point per 4' })
const fives = new TotalOneNumber({ val: 5, description: '5 point per 5' })
const sixes = new TotalOneNumber({ val: 6, description: '6 point per 6' })

// three/four of kind score as sum of all dice
const threeOfKind = new SumDistro({
  count: 3,
  description: 'Sum all dice if 3 are the same',
})
const fourOfKind = new SumDistro({
  count: 4,
  description: 'Sum all dice if 4 are the same',
})

// full house scores as flat 25
const fullHouse = new FullHouse({
  score: 25,
  description: '25 points for a full house',
})

// small/large straights score as 30/40
const smallStraight = new SmallStraight({
  score: 30,
  description: '30 points for a small straight',
})
const largeStraight = new LargeStraight({
  score: 40,
  description: '40 points for a large straight',
})

// yahtzee scores as 50
const yahtzee = new Yahtzee({ score: 50, description: '50 points for yahtzee' })

// for chance, can view as sum of all dice, requiring at least 0 of a kind
const chance = new SumDistro({ count: 0, description: 'Sum of all dice' })

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
}
