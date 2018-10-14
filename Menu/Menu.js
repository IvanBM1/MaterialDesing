function expand_left(menu){

    if( menu.classList.contains("expand-left") )
        menu.classList.replace("expand-left","contract-left");

    else if( menu.classList.contains("contract-left") )
        menu.classList.replace("contract-left","expand-left");
   
    else
        menu.classList.add("expand-left");
}

function expand_right(menu){

    if( menu.classList.contains("expand-right") )
        menu.classList.replace("expand-right","contract-right");

    else if( menu.classList.contains("contract-right") )
        menu.classList.replace("contract-right","expand-right");
   
    else
        menu.classList.add("expand-right");
}