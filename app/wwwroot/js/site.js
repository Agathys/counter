// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.



function init() {
    sec = 0;
    setInterval(tick, 1000);
}

function tick() {
    sec++;
    document.getElementById("timer").
        childNodes[0].nodeValue = sec;
}