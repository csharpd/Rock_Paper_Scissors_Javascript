function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
  this.score = 0;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.defeats = function(opponent) {
  return Game.prototype.PAIRS[this.pick][opponent.pick]
};

Player.prototype.randomPick = function() {
 var selection = ["rock","paper","scissors","spock","lizard"]
 return selection[Math.floor(Math.random() * selection.length)]
};