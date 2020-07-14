import './scss/base.scss';
import './scss/_variables.scss';
import './scss/typography.scss';
import '../dist/style.css';
import '../dist/normalize.css';
import {chooseMode} from './js/toolbar.js';
import {record} from "./js/microphoneBtn";
import {listenStream} from "./js/streamBtn";
import {getAllVoices} from "./js/allVoicesBtn";

const myAllVoices = document.getElementById("myAllVoices");
const myStream = document.getElementById("myStream");
const myMicrophone = document.getElementById("myMicrophone");

myAllVoices.addEventListener("click", function () {
    chooseMode('AllVoices', this)
});
myAllVoices.addEventListener("click", function () {
    getAllVoices();
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