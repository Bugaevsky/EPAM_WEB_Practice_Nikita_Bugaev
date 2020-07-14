export function getAllVoices() {
    const url = new URL('https://voicy-speaker.herokuapp.com');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '${url}voices');

    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            const voicesLength = xhr.response.length;
            for (let i = 0;i < voicesLength; i++) {
                if (xhr.response.length) {
                    const li = document.createElement('li');
                    li.classList.add('audioElement');
                    li.innerHTML = xhr.response[i].timeStamp.substr(0, 24);
                    document.getElementById('voicesList').appendChild(li);
                    li.addEventListener('click', function () {
                        const audioBlob = new Blob([new Uint8Array(xhr.response[i].audioBlob[0].data).buffer]);
                        const audioUrl = URL.createObjectURL(audioBlob);
                        const audio = new Audio(audioUrl);
                        audio.play();
                    })
                }
            }
        }
    };
}