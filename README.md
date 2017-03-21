# Credits

A small app that calculates credits based on some random algorithm.

## Functions

The main function that exercises the algorithm is `calcCredits(classLength, numHits, classType)`, found in `calculations.js`.  This can be called universally for other applications.

`test/calculations_test.js` contains a **wealth** of tests for `calcCredits`.  There are 456 of them in total, which is every possibility of hits for classes of length 1-8 hours, with the 3 types of classes (`roundDown`, `allOrNothing`, and `fiftyMinuteHours`) taken into consideration.  Fortunately these tests caught the anomaly with 1-hour classes, which are actually graded using the `allOrNothing` algorithm regardless of class type.

To run the grading algorithm against all tests, run `npm test` in the command line (after running `npm install` to run dependencies).

There is a console alert in the browser when the app is run, due to the module exports at the bottom of `calculations.js` (needed that for the testing module), but it doesn't affect the app as a whole.
