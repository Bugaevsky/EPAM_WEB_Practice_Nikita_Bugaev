import io from "socket.io-client";

export function record() {
    const url = new URL('https://voicy-speaker.herokuapp.com');
    const socket = io.connect(url);

    console.log(document.getElementsByClassName("activeText"));

    socket.on('connect', () => {
        console.log(socket.connected);
    });

    navigator.mediaDevices.getUserMedia({audio: true})
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
            socket.emit('audioMessage', audioChunks);
        });

        setTimeout(() => {
            mediaRecorder.stop();
        }, 5000);
    });
}