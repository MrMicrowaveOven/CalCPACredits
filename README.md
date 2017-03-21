# Credits

A small app that calculates credits based on a given algorithm.

## Functions

The main function that exercises the algorithm is `calcCredits(classLength, numHits, classType)`, found in `calculations.js`.  This can be called universally for other applications.

`test/calculations_test.js` contains a **wealth** of tests for `calcCredits`.  There are 456 of them in total, which is every possibility of hits for classes of length 1-8 hours, with the 3 types of classes (`roundDown`, `allOrNothing`, and `fiftyMinuteHours`) taken into consideration.

The tests compare the algorithm result to the provided grading document.  `solution.js` contains the JSON version of the Excel spreadsheet that was given.

Fortunately these tests caught the anomaly with 1-hour classes, which are actually graded using the `allOrNothing` algorithm regardless of class type.

To run all tests for the grading algorithm, run `npm test` in the command line (after running `npm install` to install dependencies).

There is a console alert in the browser when the app is run, due to the module exports at the bottom of `calculations.js` (needed that for the testing module), but it doesn't affect the app as a whole.
