function swapStatus(element){
    var parent = element.parentNode;
    var active = parent.querySelector(".active");
    active.classList.replace("active", "deactivated");
    element.classList.replace("deactivated", "active");
}