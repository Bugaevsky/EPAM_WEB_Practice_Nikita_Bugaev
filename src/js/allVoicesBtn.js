export function getAllVoices() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url + 'voices');

    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            var voices = [];
            var voicesLength = xhr.response.length;
            for (let i = 0; i < voicesLength; i++) {
                voices.push(i);
            }
            document.getElementById("listOfVoices").innerHTML = voices;
        }
    };
}