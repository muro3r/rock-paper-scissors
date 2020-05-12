<template>
  <div id="app">
    <div class="opponent">
      <p v-if="opponent === 'rock'">✊</p>
      <p v-else-if="opponent === 'scissors'">✌️</p>
      <p v-else>✋</p>
    </div>

    <div class="choices">
      <button @click="result = rockPaperScissors('rock', opponent)">
        ✊
      </button>
      <button @click="result = rockPaperScissors('scissors', opponent)">
        ✌️
      </button>
      <button @click="result = rockPaperScissors('paper', opponent)">
        ✋
      </button>
    </div>

    <div class="result">
      <p v-if="result === 1">WIN</p>
      <p v-else-if="result === 0">DRAW</p>
      <p v-else-if="result === -1">LOSE</p>
      <p v-else>Ready...</p>
    </div>

    <div class="reset-button">
      <button @click="shuffle">shuffle</button>
    </div>
  </div>
</template>

<script>
import rockPaperScissors from './rockPaperScissors'

const choices = ['rock', 'paper', 'scissors']

export default {
  name: 'App',
  components: {},
  data () {
    return {
      result: undefined,
      opponent: undefined
    }
  },
  methods: {
    rockPaperScissors,
    shuffle () {
      let picked = choices[Math.floor(Math.random() * 2)]

      while (picked === this.opponent) {
        picked = choices[Math.floor(Math.random() * 2)]
      }

      this.opponent = picked
      this.result = null
    }
  },
  created () {
    this.opponent = choices[Math.floor(Math.random() * 2)]
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
}

button {
  font-size: 8rem;
}

.opponent {
  font-size: 8rem;
}
</style>
