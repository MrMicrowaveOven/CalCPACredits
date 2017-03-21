function reset() {
  document.getElementById("classLength").value = "";
  document.getElementById("numHits").value = "";
  document.getElementById("classType").value = "";
}

function classLength() {
  return document.getElementById("classLength").value;
}

function numHits() {
  return document.getElementById("numHits").value;
}

function classType() {
  return document.getElementById("classType").value;
}

function calcCredits(classLength, numHits, classType) {
  var maxHits = classLength * 4;
  var perfectNumber = classLength * 3;
  var grade = numHits * 1.0 / perfectNumber;
  if (grade > 1.0) {
    grade = 1.0
  }
  if (classType == "allOrNothing" || (classLength == 1 && classType == "roundDown")) {
    if (grade >= 1) {
      return classLength;
    } else {
      return 0;
    }
  }

  if (classType == "fiftyMinuteHours") {
    classLength = classLength * 50.0/60;
    classLength = Math.floor(classLength * 2)/2;
    classType = "roundDown"
  }

  if (classType == "roundDown") {
    var proRated = grade * classLength;
    var numCredits = Math.floor(proRated * 2)/2;
    return numCredits;
  }
}

function showCredits() {
  document.getElementById("response").innerHTML = calcCredits(classLength(), numHits(), classType());
}

// module.exports = {
//   calcCredits: function(classLength, numHits, classType) {
//     return calcCredits(classLength, numHits, classType);
//   }
// };
