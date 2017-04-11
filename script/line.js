var Frame = require('../script/frame');

function Line() {
  this.startGame = true;
  this.startScore = 0;
  this.frames = [];
}

  Line.prototype.startGame = function () {
    return this.startGame;
  };

  Line.prototype.startScore = function () {
    return this.startScore;
  };

  Line.prototype.frames = function () {
    return this.frames;
  };

  Line.prototype.bowl = function (bowls) {
    this.frames.push(new Frame(bowls));
  };

  Line.prototype.score = function () {
    return this.frames.reduce(function(total, frame, i, frames) {
      return total + frame.totalScore(frames[i+1]);
    }, 0);
  };

module.exports = Line;
