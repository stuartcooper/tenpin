#TenPin Bowling Score Keeper

###To use:
1. Fork the repo
2. Install dependencies using `npm install`
3. Run tests from the command line with `jasmine-node spec`

###How it works
This programme allows a user to keep score in a ten pin bowling game, including any bonus bowls that may be included.

It consists of two main classes:
1. `frame.js` - A frame represents a full turn (two bowls) for a player
2. `line.js` - A line represents a full match of bowling (10 frames).

The frame class calculates the score achieved by the player for a single frame and also monitors for special scores (strikes and spares) and calculates the correct scores for a bonus frame.

The line class calculates the aggregated score of a player after all ten frames have been completed.

Spec files for both frame and line test for accurate score calculation.
