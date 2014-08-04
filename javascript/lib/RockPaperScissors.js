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
    rock: {beats: {"scissors"},
    scissors: {beats: "paper"},
    paper: {beats: "rock"}

  };
};


Game.prototype.winner = function() {
  if (this.player1.pick == this.player2.pick) {
    return null;
  }
  if (this.pairs[this.player1.pick].beats == this.player2.pick) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

