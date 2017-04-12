var Line = require("../script/line");

  describe('A Line of bowling', function() {

    var line;

    beforeEach(function() {
      line = new Line();
    });

    it('Starts a line of bowling', function () {
      expect(line.startGame).toBe(true);
    });

    it('starts a line of bowling without a score', function () {
      expect(line.startScore).toEqual(0);
    });

    it('counts 10 frames of zero score', function () {
      createFrames([0,0]);
      expect(line.lineScore()).toEqual(0);
    });

    it('scores without bonus bowls in last frame', function(){
      createFrames([1,1]);
      expect(line.lineScore()).toEqual(20);
    });

    it('scores a spare in last frame and adds 1 bonus bowl', function(){
      createFrames([5,5]);
      createLastFrameSpare();
      expect(line.lineScore()).toEqual(150);
    });

    it('scores a strike in last frame and adds 2 bonus bowls', function(){
      createFrames([10]);
      expect(line.lineScore()).toEqual(300);
    });

  function createFrames(frame, lastFrame) {
    for(var i = 0; i < 9; i++) {
      line.bowl(frame);
    }
    line.bowl(lastFrame || frame);
  }

  function createLastFrameSpare(frame) {
      line.bowl([5,5,5]);
  }

  function createLastFrameStrike(frame) {
    line.bowl([10,10,10]);
  }

});
