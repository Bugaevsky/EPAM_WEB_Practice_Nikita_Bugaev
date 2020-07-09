import './scss/base.scss';
import './scss/_variables.scss';
import './scss/typography.scss';
import '../dist/style.css';
import '../dist/normalize.css';
import {chooseMode} from './js/toolbar.js';
import io from 'socket.io-client';

const socket = io.connect('https://voicy-speaker.herokuapp.com');
let url = new URL('https://voicy-speaker.herokuapp.com');

socket.on('connect', () => {
    console.log(socket.connected);
});

let xhr = new XMLHttpRequest();

xhr.open('GET', url + 'voices');

xhr.responseType = 'json';

xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        console.log(xhr.response[63].audioBlob)
        const audioBlob = new Blob([xhr.response[63].audioBlob], {type: 'Buffer'});
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    }
};

/*navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        });

        setTimeout(() => {
            mediaRecorder.stop();
        }, 3000);
        socket.emit('audioMessage', audioChunks);
    });*/

var myAllVoices = document.getElementById("myAllVoices");
var myStream = document.getElementById("myStream");
var myMicrophone = document.getElementById("myMicrophone");

myAllVoices.addEventListener("click", function(){chooseMode('AllVoices', this)});
myStream.addEventListener("click", function(){chooseMode('Stream', this)});
myMicrophone.addEventListener("click", function(){chooseMode('Microphone', this)});

chooseMode('AllVoices', myAllVoices);