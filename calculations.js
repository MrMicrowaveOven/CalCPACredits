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
    if (numCredits < 1) {
      numCredits = 0;
    }
    return numCredits;
  }
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
