var greeting = prompt("Enter a greeting my good sir.");

if (greeting == undefined || greeting == null) {
    alert("Sorry " + myName() + " ,but you hit cancel or didn't put anything in there. ")
} else {
    alert(greeting + " ," + myName());
}

loadLast = "I really am last."