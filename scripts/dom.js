var firstNames = []
var lastNames = []
var ages = []

firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"]
lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble",
    "Rubble"]
ages = [36, 34, 7, 34, 32, 8]

function showInnerText() {

    var p = document.getElementById("pOne");

    alert(p.innerText);

}

function showInnerHTML() {

    var p = document.getElementById("pOne");


    alert(p.innerHTML);
}

function numberList() {

    var p = document.getElementsByTagName("li");

    //Ensures that the user cannot add more that one number addition
    if (p[0].innerText == "Item ") {

        for (var i = 0; i < p.length; i++) {


            p[i].innerText = p[i].innerText + (i + 1);
        }

    }
    
}

function markRows() {

    var p = document.getElementById("tblMarkRows")

    var pNext = p.getElementsByTagName("tr")

    for (var i = 0; i < pNext.length; i += 2) {

        pNext[i].setAttribute("class", "other");
    }
    
}

function addRows() {

    var tableToAppend = document.getElementById("tblAddRows");

    for (var i = 0; i < firstNames.length; i++) {
        var newRow = document.createElement("tr");
        var newDef = document.createElement("td");

        newRow.appendChild(newDef);
        newDef.innerText = firstNames[i];
        newDef = document.createElement("td");
        newRow.appendChild(newDef);
        newDef.innerText = lastNames[i];
        newDef = document.createElement("td");
        newRow.appendChild(newDef);
        newDef.innerText = ages[i];

        if (i % 2 === 1) {
            newRow.setAttribute("class", "other");
        }

        tableToAppend.appendChild(newRow);
    }

}


//adds a success message when the button is clicked
function addSuccess() {
    var divToAdd = document.createElement("div");
    divToAdd.innerText = "This is a Success Message.";
    divToAdd.setAttribute("class", "success");
    var appendingDIV = document.getElementById("divMessages");
    appendingDIV.appendChild(divToAdd);
}

//adds a warning message when the button is clicked
function addWarning() {
    var divToAdd = document.createElement("div");
    divToAdd.innerText = "This is a Warning Message.";
    divToAdd.setAttribute("class", "warning");
    var appendingDIV = document.getElementById("divMessages");
    appendingDIV.appendChild(divToAdd);
}

//adds an error message when the button is clicked
function addError() {
    var divToAdd = document.createElement("div");
    divToAdd.innerText = "This is a Error Message.";
    divToAdd.setAttribute("class", "error");
    var appendingDIV = document.getElementById("divMessages");
    appendingDIV.appendChild(divToAdd);
}
