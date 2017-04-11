var Frame = require("../script/frame");

describe("Score options for a frame", function(){

  it("calculates a total for a normal frame", function(){
    var frame = new Frame([1,1]);
    expect(frame.frameScore()).toEqual(2);
  });

  xit("calculates the score in game", function() {
    var frame = new Frame([1,1]);
    var nextFrame = new Frame([2,2]);
    var nextNextFrame = new Frame([3,3]);
    expect(frame.totalScore(nextFrame, nextNextFrame)).toEqual(6);
  });

  it("calculates the score of a spare bowl", function() {
    var frame = new Frame([9,1]);
    var nextFrame = new Frame([3,2]);
    expect(frame._isSpare()).toBe(true);
    expect(frame.totalScore(nextFrame)).toEqual(13);
  });

  it("calculates the score of a strike bowl", function() {
    var frame = new Frame([10,0]);
    var nextFrame = new Frame([3,2]);
    expect(frame._isStrike()).toBe(true);
    expect(frame.totalScore(nextFrame)).toEqual(15);
  });

  it("calculates the score of two strike bowls", function() {
    var frame = new Frame([10,0]);
    var nextFrame = new Frame([10,0]);
    var nextNextFrame = new Frame([3,3]);
    expect(frame._isStrike()).toBe(true);
    expect(frame.totalScore(nextFrame, nextNextFrame)).toEqual(26);
  });

  it("calculates the score of three strike bowls", function() {
    var frame = new Frame([10,0]);
    var nextFrame = new Frame([10,0]);
    var nextNextFrame = new Frame([10,0]);
    expect(frame._isStrike()).toBe(true);
    expect(frame.totalScore(nextFrame, nextNextFrame)).toEqual(30);
  });
});
