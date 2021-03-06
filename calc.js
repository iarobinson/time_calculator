// The goal here is to create code that iterates through
// a user generated field and identifies time stamps.
// The code then adds a set amount of time to those time stamps.
// Special thanks to http://www.grun1.com/utils/timeCalc.html for
// providing the ideas for what to do next


// function updateTimeStampNotes(existingNotes, incrementation) {
//   var updatedNotes = "";
//   for (var i = 0; i < existingNotes.length; i += 1) {
//     if (existingNotes[i] === "[") {
//       for (var j = i += 1; j < existingNotes.length; j += 1) {
//         if (existingNotes[i] === "]") {
//           var timeBlockToAdjust = existingNotes.slice(i + 1, j + 1);
//           var updatedTime = timeCalculator(timeBlockToAdjust, incrementation);
//         }
//       }
//     }
//   }
//   return updatedNotes;
// }

// Validated
function formatTimeToInteger(str) {
  var time = str.split(":")
  console.log(time);
  var min = parseInt(time[0]);
  var sec = parseInt(time[1]);
  var totalSeconds = (min * 60) + sec;
  console.log(totalSeconds)
}

// Validated for min:sec working to have it work for Hours

function intToStr(num) {
  var hr = parseInt(num / 3600);
  var min = parseInt(num / 60).toString();
  var sec = (num % 60).toString();


  if (num < 10) {
    return "0:0" + dispSec;
  } else if (num < 60) {
    return "0:" + dispSec;
  } else if (num < 600) {
    return dispMin + ":" + dispSec;
  }
  var min = parseInt(num / 60);
  var hr = parseInt(dispMin / 60);
}

function timeCalculator(timeBlockToAdjust, incrementation){
  var incrementedTotalTime = formatTimeToInteger(timeBlockToAdjust) + formatTimeToInteger(incrementation);
  return intToStr(incrementedTotalTime)
}

// console.log(updateTimeStampNotes("<li>Note here [0:05]</li>", "0:20") + " <=> 0:25")
