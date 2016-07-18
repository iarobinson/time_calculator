// The goal here is to create code that iterates through
// a user generated field and identifies time stamps.
// The code then adds a set amount of time to those time stamps.
// Special thanks to http://www.grun1.com/utils/timeCalc.html for
// providing the ideas for what to do next


function updateTimeStampNotes(existingNotes, incrementation) {
  var updatedNotes = "";
  for (var i = 0; i < existingNotes.length; i += 1) {
    for (var j = i += 1; j < existingNotes.length; j += 1) {
      if (existingNotes[i] === "[") {
        var newTime = adjustTime(existingNotes[i]);
        i += newTime.length;
        // adjustTime needs to return a time block)
      }
    }
  }
  return updatedNotes;
}


console.log(updateTimeStampNotes("<li>Note here [0:05]</li>", "0:20") + " <=> 0:25")
