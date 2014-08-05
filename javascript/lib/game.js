function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype._isSamePick = function() {
  return this.player1.pick === this.player2.pick;
};

Game.prototype._winnerWord = function(winner, loser) {
  return this.PAIRS[winner.pick][loser.pick];
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

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
};

Game.prototype.victoryMessage = function() {
  var message;
  if(this.winner()){
    this.winner().score++;
    message = [this.winner().name+"'s", this.winner().pick,
  this._winnerWord(this.winner(), this.loser()),
  this.loser().name+"'s", this.loser().pick].join(" ");
  } else {
    message = "Draw";
  }

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


