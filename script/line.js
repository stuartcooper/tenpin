var Frame = require('../script/frame');

function Line() {
  this.startGame = true;
  this.startScore = 0;
  this.frames = [];
}

  Line.prototype.bowl = function (bowls) {
    frame = new Frame(bowls);
    this.frames.push(frame);
  };

  Line.prototype.lineScore = function () {
    return this.frames.reduce(function(score, frame, index, frames) {
      return score + frame.totalScore(frames[index + 1], frames[index + 2]);
    }, 0);
  };

module.exports = Line;
