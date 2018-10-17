new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		isPlaying: false,
		turns: []
	},
	methods: {
		startGame: function(){
			this.isPlaying = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function(){
			var damage = this.randomNumber(10, 3);
			// remove the damage from the monster's health
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'You attacked the Monster and took ' + damage + ' health points!'
			})
			// check might need to return here if game is over
			if (this.checkHealth()){
				return;
			} 
			this.monsterAttacks();
		},
		specialAttack: function(){
			var damage = this.randomNumber(20, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Special attack!!! You took ' + damage + ' health points from the Monster!'
			})
			if (this.checkHealth()){
				return;
			} 
			this.monsterAttacks();
		}, 
		heal: function(){
			if (this.playerHealth <= 90) {
				console.log(this.playerHealth);
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: 'Player heals: 10 health points!!!'
			})
			this.monsterAttacks();
		},
		giveUp: function(){
			this.isPlaying = false;
		},
		randomNumber: function(max, min){
			// this takes the random floating point value and rounds it down to an integer
			// adding one allows the max number to be included as a random outcome
			// adding the Math.max function allows us to select the higher value between the returned random number and the min number
			return Math.max(Math.floor(Math.random() * max) + 1, min)
		},
		checkHealth: function(health){
			// check if monster is dead
			if (this.monsterHealth <= 0) {
				if(confirm('You won! New Game?')) {
					this.startGame();
				} else {
					this.isPlaying = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if(confirm('You lost! New Game?')) {
					this.startGame();
				} else {
					this.isPlaying = false;
				}
				return true;
			}
			// no one won, keep playing
			return false;
		},
		monsterAttacks: function(){
			var damage = this.randomNumber(12, 5);
			// remove the damage from the player's health
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'The Monster attacked you and took ' + damage + ' health points!'
			})
			// check doesn't need to return because this is the end of the function anyway
			this.checkHealth();
		}
	}
})