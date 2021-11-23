
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var helloSpeaker,goodByeSpeaker;

for (name in names) {
  var currentName=(names[name]);
  var firstLetter=currentName.charAt(0);
  if(firstLetter.toUpperCase()=='J'){
   byeSpeaker.speak(currentName);
  }
  else{
   helloSpeaker.speak(currentName);
  }
}

