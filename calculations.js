function calcCredits(classLength, numHits, classType) {
  var maxHits = classLength * 4;
  // perfectNumber is what a student needs to get to achieve a perfect score.
  var perfectNumber = Math.floor(maxHits * 3 / 4);
  // grade is the percentage of hits they got out of the perfectNumber.
  var grade = numHits * 1.0 / perfectNumber;
  if (grade > 1.0) {
    grade = 1.0
  }

// If it's all or nothing, they either have perfect (grade == 1) or nothing.
// 1-hour classes are always considered allOrNothing
  if (classType == "allOrNothing" || (classLength == 1)) {
    if (grade >= 1) {
      return classLength;
    } else {
      return 0;
    }
  }

// For fiftyMinuteHours, I simply multiply the classLength by 50/60,
//  then round to the nearest .5 hour.
  if (classType == "fiftyMinuteHours"  && classLength > 1) {
    classLength = classLength * 50.0/60;
    classLength = Math.floor(classLength * 2)/2;
  }

  // The number of credits the student has earned, before rounding
  var proRated = grade * classLength;
  // The number of credits, rounded down to .5 hour.
  var numCredits = Math.floor(proRated * 2)/2;
  // roundDown has a minimum of 1 credit.  If it's less, round down to 0.
  if (numCredits < 1 && classType == "roundDown") {
    numCredits = 0;
  }
  return numCredits;
}

function updateHits() {
  var classLength = document.getElementById("classLength").value;
  var maxHits = classLength * 4;

  var hitsDropdown = document.getElementById("numHits");

  while (hitsDropdown.hasChildNodes()) {
    hitsDropdown.removeChild(hitsDropdown.lastChild);
  }

  for (var hits = 0; hits <= maxHits; hits++) {
    var option = document.createElement("option");
    var optionNumber = document.createTextNode(hits);
    option.setAttribute("value", hits);
    option.appendChild(optionNumber);
    hitsDropdown.appendChild(option);
  }
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

function showCredits() {
  var numCredits = calcCredits(classLength(), numHits(), classType());
  var displayString = numCredits + " credits!";
  document.getElementById("response").innerHTML = displayString;
}

module.exports = {
  calcCredits: function(classLength, numHits, classType) {
    return calcCredits(classLength, numHits, classType);
  }
};
