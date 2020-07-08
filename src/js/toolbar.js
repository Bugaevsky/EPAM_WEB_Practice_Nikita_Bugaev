export function chooseMode(mode, elmnt) {
    // Hide all elements with class="activeText" by default */
    var i, activeText, barButton;
    activeText = document.getElementsByClassName("activeText");
    for (i = 0; i < activeText.length; i++) {
        activeText[i].style.display = "none";
    }

    // Remove the color of all barButton/buttons
    barButton = document.getElementsByClassName("barButton");
    for (i = 0; i < barButton.length; i++) {
        barButton[i].style.color = "";
    }

    // Add the specific color to the button used to open barButton
    elmnt.style.color = '#23aea3';

    // Show the specific barButton
    document.getElementById(mode).style.display = "block";
}