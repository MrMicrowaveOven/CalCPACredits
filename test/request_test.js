var request = require('../request.js');
var chai = require('chai');
var expect = chai.expect;
var solution = require('../solution.js')
// describe("calcCredits(classLength, numHits, classType)", function() {
//   describe("allOrNothing", function() {
//     it("passes a 10/12", function() {
//       expect(request.calcCredits(3, 10, "allOrNothing")).to.equal(3)
//     })
//     it("passes a 9/12", function() {
//       expect(request.calcCredits(3, 9, "allOrNothing")).to.equal(3)
//     })
//     it("fails a 8/12", function() {
//       expect(request.calcCredits(3, 8, "allOrNothing")).to.equal(0)
//     })
//   })
//   describe("roundDown", function() {
//     it("gives an 11/28 a 3.5", function() {
//       expect(request.calcCredits(7, 11, "roundDown")).to.equal(3.5)
//     })
//   })
// })
function runTest(classLength, numHits, classType, result) {
  describe("auto " + classType, function() {
    it("gives a " + numHits + "/" + (classLength * 4) + " a " + result + ", " + classLength + " hour class", function() {
      expect(request.calcCredits(classLength, numHits, classType)).to.equal(result)
    })
  })
}

var classLengths = [1,2,3,4,5,6,7,8]

// console.log(request.calcCredits(12, 48, "allOrNothing"));
classLengths.forEach(function(classLength) {
  [
    "allOrNothing",
    "roundDown",
    "fiftyMinuteHours"
  ].forEach(function(classType) {
  var maxHits = classLength * 4;
    for (var numHits = 0; numHits <= maxHits; numHits++) {
      var result = solutions[classType][classLength][numHits];
      runTest(classLength, numHits, classType, result)
    }
  })
})

// runTest(7, 11, "roundDown", 3.5);
