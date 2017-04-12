function Frame(bowls) {
  this.bowls = bowls;
  this.MAXIMUM_SCORE = 10;
}

  Frame.prototype.totalScore = function (nextFrame, nextNextFrame) {
      return this.frameScore() + this.bonusBowls(nextFrame, nextNextFrame);
  };

  Frame.prototype.bonusBowls = function (nextFrame, nextNextFrame) {
    if (nextFrame === undefined) {
      return 0;
    }
    if (this._isStrike()) {
      return nextFrame._strikeBonusBowls(nextNextFrame);
    }
    if (this._isSpare()) {
      return nextFrame._spareBonusBowl();
    }
      return 0;
  };

  Frame.prototype.frameScore = function () {
    return this.bowls.reduce(function (bowlOne, bowlTwo) {
      return bowlOne + bowlTwo;
    });
  };

  Frame.prototype._isStrike = function () {
    return this.bowls[0] == this.MAXIMUM_SCORE;
  };

  Frame.prototype._strikeBonusBowls = function (nextFrame) {
    if (this._isStrike() && nextFrame !== undefined) {
      return this.frameScore() + nextFrame.bowls[0];
    }
      return this.bowls[0] + this.bowls[1];
  };

  Frame.prototype._isSpare = function () {
    return this.bowls[0] + this.bowls[1] == this.MAXIMUM_SCORE;
  };

  Frame.prototype._spareBonusBowl = function () {
      return this.bowls[0];
  };

module.exports = Frame;
