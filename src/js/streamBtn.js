export function listenStream() {
    const xhr = new XMLHttpRequest();
    const url = new URL('https://voicy-speaker.herokuapp.com');

    xhr.open('GET', '${url}voices');

    xhr.responseType = 'json';

    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            let activeText = document.getElementsByClassName("activeText");
            while (activeText.item(2).style.display !== 'none') {
                let voicesCount = xhr.response.length;
                setTimeout(() => {
                }, 3000);
                xhr.send();
                xhr.onload = function () {
                    const newVoicesCount = xhr.response.length;
                    if (newVoicesCount != voicesCount) {
                        const audioBlob = new Blob([new Uint8Array(xhr.response[xhr.response.length - 1].audioBlob[0].data).buffer]);
                        const audioUrl = URL.createObjectURL(audioBlob);
                        const audio = new Audio(audioUrl);
                        audio.play();
                        voicesCount = newVoicesCount;
                    }
                }
                activeText = document.getElementsByClassName("activeText");
            }
        }
    };

}