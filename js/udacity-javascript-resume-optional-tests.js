// Test 1
function getRelationship(x, y) {
  // Check if the parameter is a number. From http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  // Check if X and Y are numbers
  var checkX = isNumber(x);
  var checkY = isNumber(y);

  // First, see if they're both numbers... 
  if (checkX && checkY) {
    console.log("They're both numbers!");
    if (x === y) {
      return "=";
    } else if (x > y) {
      return ">";
    } else if (y > x) {
      return "<";
    }


  // and if they're not, check if X is...
  } else if (checkX) {
    return "Can't compare relationships because " + y + " is not a number";
  // and if X isn't, check if Y is...
  } else if (checkY) {
    return "Can't compare relationships because " + x + " is not a number";
  // and if they're both not numbers...
  } else if (!checkX && !checkY) {
    return "Can't compare relationships because " + x + " and " + y + " are not numbers";
  }
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

// Test 2
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
  var newWalkerOrder = [];
  for (var i = 0; i < names.length; i++) {
    // define the current iteration of the array
    var currentIteration = names[i];
    // Split the current iteration into a new array with two indexes
    var splitNamesArray = currentIteration.split(" ");
    // Remove the last name from the array
    var poppedLastName = splitNamesArray.pop();
    // Insert the last name before the first index, should be ["Lname", "Fname"]
    splitNamesArray.unshift(poppedLastName);
    // Join the names together and return a string
    var joinedNamesString = splitNamesArray.join(", ");
    newWalkerOrder.push(joinedNamesString);
    // names.pop(joinedNamesString);
    // console.log(names);
  }
  var sortedNames = newWalkerOrder.sort();
  return sortedNames;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

// Test 3
