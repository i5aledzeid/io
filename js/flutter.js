alert("Update 2");

var name = prompt("What's your name?", "Write your name...");
var favorite = readLine("What's your favorite programming language?");
var language = readLine("What's your language?");
var age = readInt("How old are you?");

function about_you() {
    println("Hello, Mr. " + name);
    println("Your favorite programming language is " + favorite);
    println("You can speak " + language + " so, you will like a flutter.");
    println("Flutter is framework, using Dart language.");
    println("You spent " + (2022 - age) + " years in box.");
}