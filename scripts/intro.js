




alert("The script in the header has been executed my friend.");

var loadLast = "I loaded last";

var myArray;

if (myArray === undefined) {
    myArray = [];
}
else {
    alert("The array was not undefined")
}

myArray.push(34);
myArray.push(5.5);
myArray.push(33.5);
myArray.push(46.5);
myArray.push(59);
myArray.push(64);
myArray.push(43);
myArray.push(64);
myArray.push(48);
myArray.push(49);
myArray.push(40);
myArray.push(59);
myArray.push(44);
myArray.push(54);
myArray.push(19.5);
myArray.push(25);
myArray.push(69);
myArray.push(23);


var total = 0;
var average;
for (var i = 0; i < myArray.length; i++)
{
    total += myArray[i];
}
average = total / myArray.length;
alert(average);


function MyName() {
    return "Kaden Marchetti"
}






