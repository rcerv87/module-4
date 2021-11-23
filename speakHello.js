// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

var helloSpeaker = {
  
  speak:function(name){
  speakWord="Hello ";
  this.name=name;
  console.log(speakWord+name);
}
}