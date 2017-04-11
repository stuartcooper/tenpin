var Frame = require("../script/frame");

describe("A frame of bowling", function(){

  it("calculates a total for two roles", function(){
    var frame = new Frame([1,3]);
    var next = new Frame([0,0]);
    expect(frame.total()).toEqual(4);
  });
});
