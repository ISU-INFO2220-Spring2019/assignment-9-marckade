//Kaden Marchetti
//Assignment 6

window.onload = function () {

    //Sets listener events inside the sections
    document.getElementsByTagName("section")[0].addEventListener("mousemove", moveMouse);
    document.getElementsByTagName("section")[0].addEventListener("mousedown", mousePressed);
    document.getElementsByTagName("section")[0].addEventListener("mouseup", resetClass);
    document.getElementsByTagName("h1")[0].addEventListener("mouseover", mouseHeadOver);
    document.getElementsByTagName("h1")[0].addEventListener("mouseout", resetClass);

    //Sets listener on the btn. 
    document.getElementById("btnSayHello").addEventListener("click", function () {
        alert("Hello");
    })

    //Sets listener for the btn
    document.getElementById("btnSayHello").addEventListener("mousemove", function (e) {
        e = e || window.event;
        event.cancelBubble = true;
        event.stopPropagation();
        document.getElementById("mouseCoords").innerText = "Over the button";

    }
    )
}


function moveMouse(e) {

    e = e || window.event // Cross compatibility
    var posY = e.y;
    var posX = e.x;

    document.getElementById("mouseCoords").innerText = "X: " + posX + " Y: " + posY;
}

// When the nouse is pressed changed className to pressed for styling. 
function mousePressed(e) {

    e = e || window.event

    var element = event.target || event.srcElement;
    if (element !== e) {
        element.className = "pressed";
    }
}

//Resets the class in order to reset style. 
function resetClass(e) {
    e = e || window.event;
    var element = event.target || event.srcElement;
    element.className = "";
}

//When moused over changes class name to overhead so that it will change color
// in the style sheet. 
function mouseHeadOver(e) {
    e = e || window.event;
    var element = event.target || event.srcElement;
    element.className = "overHead";
}
