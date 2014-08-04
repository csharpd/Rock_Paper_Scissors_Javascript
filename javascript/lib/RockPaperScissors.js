function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  this.pairs = {
    rock: {scissors: "crushes", lizard: "crushes"},
    scissors: {paper: "cuts", lizard: "decapitates"},
    paper: {rock: "covers", spock: "disproves"},
    spock: {scissors: "smashes", rock: "vaporizes"},
    lizard: {spock: "poisions", paper: "eats"}

  };
};


Game.prototype.winner = function() {
  if (this.player1.pick == this.player2.pick) {
    return null;
  }
  if (this.pairs[this.player1.pick][this.player2.pick]) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.victoryMessage = function() {
  var message = [this.player1.name+"'s", this.player1.pick,
  this.pairs[this.player1.pick][this.player2.pick],
  this.player2.name+"'s", this.player2.pick].join(" ");
  return message;
};

