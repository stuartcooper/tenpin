var Line = require("../script/line");

  describe('Line', function() {

  describe('Starting a line of bowling', function() {

    it('Starts a line of bowling', function () {
      var line = new Line();
      expect(line.startGame).toBe(true);
    });

    it('starts a line of bowling without a score', function () {
      var line = new Line();
      expect(line.startScore).toEqual(0);
    });

  describe('Bowling a "Gutter game"', function() {

    it('counts 10 frames of zero score', function () {
      var line = new Line();
      createFrames(10, [0,0]);
      expect(line.score()).toEqual(0);
    });
  });

  describe('Calculating multiple frames in a regular line of bowling', function(){

    it('scores without bonus frames', function(){
      createFrames(1, [3,4]);
      createFrames(1, [2,6]);
      expect(line.score()).toEqual(15);
    });

    it('scores with a bonus spare frame', function(){
      createFrames(1, [5,5]);
      createFrames(1, [1,4]);
      expect(line.score()).toEqual(16);
    });

    it('scores with a bonus strike frame', function(){
      createFrames(1, [10,0]);
      createFrames(1, [1,4]);
      expect(line.score()).toEqual(20);
    });
  });

  var line = new Line();

  function createFrames(frame, lastFrame) {
    for(var i = 0; i < 9; i++)
    line.bowl(frame);
  }

  });

});
