
var personHolder;
var characters = [];

function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.Age = 0;
    this.stepToTake = 0;

    this.count = new function () {


        for (var i = 0; i < stepToTake; i++) {

            var returnn;
            returnn += i + " ";
        }

        return returnn;

    }


    this.sum = new function () {

        for (var i = 1; i <= age; i += 2) {

            var returnn;
            returnn += i;
        }

        return returnn;

    }


}
    function Converter() {

        //Top result on google told me how the formula goes. 
        this.ConvertToCelsius = new function (faren) {

            var celcius = 0;
            celcius = (5 / 9) * (faren - 32);
            return celcius;

        }

        this.ConvertToFahrenheit = new function () {

            var celcius = arguments[0];
            var faren = 0;

            faren = (9 / 5) * (celcius + 32);
            return faren;

        }
    }

    function sayHello() {
        var name = prompt("Enter your name!");

        if (name == null) {
            name = "Person who has no name"
        }
        alert("Hello, " + name)

    }

    function greet(greeting) {

        var name = prompt("Enter your name")
        greeting = prompt("How would you like to be greeted?")

        if (name == null) {
            name = "bob"
        }

        if (greeting == null) {
            greeting = "Why hello there,";
        }

        alert(greeting + " " + name)
    }

    function doMaths(first, second) {

        var final = "";

        final += first + "" + second + "\r\n";
        final += first + second + "\r\n";
        final += first - second + "\r\n";
        final += first * second + "\r\n";
        final += first / second + "\r\n";

        alert(final);
        
    }

    function createPerson() {
        var firstName = prompt("First Name?");
        var lastName = prompt("Last Name?");
        var age = prompt("How old are you?")
        if (age > 400) {
            alert("Thats way too old my dude")
            age = 400;
        }
        var createdPersonNew = new Person(firstName, lastName);
        personHolder = createdPersonNew;
        personHolder.Age = age;
}

    function showSteps() {
        if (personHolder != undefined) {
            personHolder.stepToTake = 15;
            var stepsTaken = personHolder.stepsToTake();
        alert(personHolder.firstName + " " + personHolder.lastName + "s steps: \r\n" + stepsTaken);
     } else {
        alert("You need to create a person!")
    }
}

    function getDegreesInC(fahrenheit) {

    // Defines it if there is nothing thrown into the parameter.
    if (fahrenheit == undefined) {
        fahrenheit = 50;
     }

        var conversions = new Converter;
        var celsiusValue = conversions.ConvertToCelsius(fahrenheit);
        alert(celsiusValue);
    }

    function getDegreesInF(celsius) {
    // Defines it if there is nothing thrown into the parameter.
    if (celcius == undefined) {
        celsius = 50;
    }

        var conversions = new Converter;
        var fahrenheitValue = conversions.ConvertToFahrenheit(celsius);
        alert(fahrenheitValue);
}

    function fillCharacterArray() {
        var firstNames = ['Fred', 'Wilma', 'Pebbles', 'Barney', 'Betty', 'BamBam'];
        var lastNames = ['Flinstone', 'Flinstone', 'Flinstone', 'Rubble', 'Rubble', 'Rubble'];
        var age = [36, 34, 7, 34, 32, 8];

        //loops through each character in the arrays
        for (var i = 0; i < firstNames.length; i++) {
            var tempPerson = new Person(firstNames[i], lastNames[i]);
            tempPerson.Age = age[i];
            characters.push(tempPerson);
        }
}

    function getCharacterAt(index) {
        if (characters[index] == undefined) {
            alert("You need to fill the array first!")
        } else {
            var returnMessage = " ";
            returnMessage += characters[index].firstName;
            returnMessage += "The odd age sum is: ";
            returnMessage += characters[index].CountingAge();
            alert(returnMessage);
        }
    }






