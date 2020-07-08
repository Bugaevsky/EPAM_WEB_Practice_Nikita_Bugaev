import './scss/base.scss';
import './scss/_variables.scss';
import './scss/typography.scss';
import '../dist/style.css';
import '../dist/normalize.css';
import {chooseMode} from './js/toolbar.js';

var myAllVoices = document.getElementById("myAllVoices");
var myStream = document.getElementById("myStream");
var myMicrophone = document.getElementById("myMicrophone");

myAllVoices.addEventListener("click", function(){chooseMode('AllVoices', this)});
myStream.addEventListener("click", function(){chooseMode('Stream', this)});
myMicrophone.addEventListener("click", function(){chooseMode('Microphone', this)});

// Get the element with id="myAllVoices" and click on it
document.getElementById("myAllVoices").click();