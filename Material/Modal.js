var dialog = document.getElementsByClassName("dialog")[0];
var card = document.getElementsByClassName("card")[0];
var button = document.getElementById("showDialog");
var close = document.getElementById("close");



button.addEventListener('click', () => {
    dialog.classList.add("show");
    card.classList.add("show");

    if( dialog.classList.contains("hidden") ){
        card.classList.remove("hidden");
        dialog.classList.remove("hidden");
    }

    dialog.style.zIndex = 0;
});

close.addEventListener('click', () => {

    card.classList.remove("show");
    dialog.classList.remove("show");

    card.classList.add("hidden");
    dialog.classList.add("hidden");

    dialog.style.zIndex = -10;
});