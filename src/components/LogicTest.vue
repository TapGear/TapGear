<template>
  <div class="game">
    <div v-if="Object.keys(player).length !== 0">
      You<br><br>
      <div class="gamebar" :style="{width:player.life+'%', backgroundColor:getLifeColor(player.life)}">{{player.life.toFixed(2)}}</div>
      <br><br>
      Opponent <br><br>
      <div class="gamebar" :style="{width:opponent.life+'%', backgroundColor:getLifeColor(opponent.life)}">{{opponent.life.toFixed(2)}}</div>
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase.js'
export default {
  name: 'LogicTest',
  props: {
    msg: String
  },
  data () {
    return {
      username: localStorage.getItem('username'),
      player: {},
      opponent: {},
      ended: false,
      started: true
    }
  },
  methods: {
    decreaselife: function (amountOfLife, IntervalInms) {
      let interval = window.setInterval(() => {
        if (this.started) this.player.life -= amountOfLife
        if (this.player.life <= amountOfLife) {
          clearInterval(interval)
        }
      }, IntervalInms)
    },
    addlife: function (addlife) {
      if (!this.ended) {
        if (this.player.life >= 100) {
          this.player.life = 100
        }
        if (this.player.life >= (100 - addlife)) {
          this.player.life += (100 - this.player.life)
        } else {
          this.player.life += addlife
        }
      }
    },
    setInitialValue: function (dataFromFirebase) {
      let username = localStorage.getItem('username')
      console.log(username)
      for (let player in dataFromFirebase) {
        if (player == username) {
          this.player = dataFromFirebase[player]
        } else {
          this.opponent = dataFromFirebase[player]
        }
      }
    },
    getLifeColor: function (life) {
      if (life <= 100 && life > 50) {
        return 'green'
      } else if (life <= 50 && life > 20) {
        return 'orange'
      } else if (life <= 20 && life > 0) {
        return 'red'
      }
    }

  },
  computed: {

  },
  mounted () {
    this.decreaselife(0.5, 100)
    let spacelistener = () => {
      window.addEventListener('keyup', (event) => {
        if (event.keyCode == 32) {
          this.addlife(0.5)
        }
      })
    }
    spacelistener()
  },
  created () {
    let self = this
    localStorage.setItem('username', 'fajar')
    db.ref('rooms/room1').on('value', function (snapshot) {
      let value = snapshot.val()
      console.log(value)
      self.setInitialValue(value)
    })
  },
  watch: {
    'player.life': function (val) {
      let self= this;
  console.log("watcher",val)
  console.log("username", self.username)
      db.ref('rooms/room1/'+self.username).update(
        {
          life: val
        }
      )
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gamebar {
	-webkit-transition: all 0.01s linear; /* Safari */
	transition: all 0.01s linear;
	color: white;
}

h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
