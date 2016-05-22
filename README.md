# time_calculator
A program that takes in time stamped show notes and exports the notes with time stamps that are added to.

- The Reasoning Behind This Tool

One of the first steps in producing a podcast is when we take notes while listening to the raw audio. We listen through each show to ensure it sounds excellent and we can fix up any sound problems. When finished with the audio, the notes come out looking something like this in html:

<h3>Show Notes</h3>
<ul>
 	<li>On Thomas Paine and Stoic Philosophy [6:11]</li>
 	<li>The Chainsaw Story and how it supported his writing career [8:09]</li>
 	<li>On athleticism and long distance running times [12:31]</li>
 	<li>How to develop a lean writing style [13:31]</li>
	<li>Why Sebastian Junger was drawn to journalism and the Navajo long distance runners [15:09]</li>
  <li>If you could put one billboard anywhere, where would you put it and what would it say? [2:16:22]</li>
  <li>Final requests for the audience [2:18:27]</li>
</ul>

When we mix the podcast together with the other elements (audio intro or sponsors for example) the time stamps become inaccurate. In order to sync them, we add the amount of time in the podcast file before the interview to the notes above.

For example, when we mix a podcast with a 15 second intro and a 40 second introduction, the time stamps are off by 55 seconds. In order to keep the time stamps accurate, we must add that time to the time listed in the show notes.

- Aspirations:

1. Make a webpage that calculates the time, allowing for quick copy and pasting.
  - This will be cool for a start, but the user will have to copy and paste the times which is time consuming and silly.
2. Make a page that allows the user to paste in the show note HTML
  - This will save a lot of time
3. Make a Chrome plugin so as to skip the copy and pasting
  - Just click a Chrome button, put on the added time, and all your notes will be updated in the WordPress draft section.



Thank You:

http://www.grun1.com/utils/timeCalc.html for the great tool
Indeed, my idea is simply to make this tool work specifically for
our podcast production needs.
