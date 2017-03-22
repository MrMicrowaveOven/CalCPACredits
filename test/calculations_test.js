var calculations = require('../calculations.js');
var chai = require('chai');
var expect = chai.expect;
var solution = require('../solution.js')

function runTest(classLength, numHits, classType, result) {
  describe("auto " + classType, function() {
    it("gives a " + numHits + "/" + (classLength * 4) + " a " + result + ", " + classLength + " hour class", function() {
      expect(calculations.calcCredits(classLength, numHits, classType)).to.equal(result)
    })
  })
}

var classLengths = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,16]
var classTypes = [
  "allOrNothing",
  "roundDown",
  "fiftyMinuteHours"
]

classTypes.forEach(function(classType) {
  classLengths.forEach(function(classLength) {
    var maxHits = classLength * 4;
    for (var numHits = 0; numHits <= maxHits; numHits++) {
      var result = solutions[classType][classLength][numHits];
      runTest(classLength, numHits, classType, result)
    }
  })
})

// runTest(7, 11, "roundDown", 3.5);


// describe("calcCredits(classLength, numHits, classType)", function() {
//   describe("allOrNothing", function() {
//     it("passes a 10/12", function() {
//       expect(calculations.calcCredits(3, 10, "allOrNothing")).to.equal(3)
//     })
//     it("passes a 9/12", function() {
//       expect(calculations.calcCredits(3, 9, "allOrNothing")).to.equal(3)
//     })
//     it("fails a 8/12", function() {
//       expect(calculations.calcCredits(3, 8, "allOrNothing")).to.equal(0)
//     })
//   })
//   describe("roundDown", function() {
//     it("gives an 11/28 a 3.5", function() {
//       expect(calculations.calcCredits(7, 11, "roundDown")).to.equal(3.5)
//     })
//   })
// })
