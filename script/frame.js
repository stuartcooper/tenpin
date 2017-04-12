function Frame(bowls) {
  this.bowls = bowls;
  this.MAXIMUM_SCORE = 10;
}

  Frame.prototype.totalScore = function (nextFrame, nextNextFrame) {
    if (this._isStrike()) {
      return this.strikeScore(nextFrame, nextNextFrame);
    } else if (this._isSpare()) {
      return this.spareScore(nextFrame);
    } else {
      return this.frameScore();
    }
  };

  Frame.prototype.frameScore = function () {
    return this.bowls.reduce(function (bowlOne, bowlTwo) {
      return bowlOne + bowlTwo;
    });
  };

  Frame.prototype.strikeScore = function (nextFrame, nextNextFrame) {
    if (nextFrame._isStrike ()) {
      return this.frameScore() + nextFrame.frameScore() + nextNextFrame.frameScore();
    } else {
      return this.frameScore() + nextFrame.frameScore();
    }
  };

  Frame.prototype.spareScore = function (nextFrame) {
      return this.frameScore() + nextFrame.bowls[0];
  };

  Frame.prototype._isSpare = function () {
    return this.bowls[0] + this.bowls[1] == this.MAXIMUM_SCORE;
  };

  Frame.prototype._isStrike = function () {
    return this.bowls[0] == this.MAXIMUM_SCORE;
  };

module.exports = Frame;
