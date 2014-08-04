function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  this.players = [this.player1,this.player2]


};

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};

Game.prototype.winner = function() {
  if (this._isSamePick()) {
    return null;
  }
  if (this.player1.defeats(this.player2)) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.victoryMessage = function(winner,loser) {
  var message = [winner.name+"'s", winner.pick,
  this.PAIRS[winner.pick][loser.pick],
  loser.name+"'s", loser.pick].join(" ");
  return message;
};

Game.prototype.PAIRS =
  {
    rock: {scissors: "crushes", lizard: "crushes"},
    scissors: {paper: "cuts", lizard: "decapitates"},
    paper: {rock: "covers", spock: "disproves"},
    spock: {scissors: "smashes", rock: "vaporizes"},
    lizard: {spock: "poisions", paper: "eats"}

  };
