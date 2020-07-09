import './scss/base.scss';
import './scss/_variables.scss';
import './scss/typography.scss';
import '../dist/style.css';
import '../dist/normalize.css';
import {chooseMode} from './js/toolbar.js';
import {record} from "./js/microphoneBtn";
import {listenStream} from "./js/streamBtn";

var myAllVoices = document.getElementById("myAllVoices");
var myStream = document.getElementById("myStream");
var myMicrophone = document.getElementById("myMicrophone");

myAllVoices.addEventListener("click", function () {
    chooseMode('AllVoices', this)
});

myStream.addEventListener("click", function () {
    chooseMode('Stream', this)
});
myStream.addEventListener("click", function () {
    listenStream()
});

myMicrophone.addEventListener("click", function () {
    chooseMode('Microphone', this)
});
myMicrophone.addEventListener("click", function () {
    record();
});

chooseMode('AllVoices', myAllVoices);