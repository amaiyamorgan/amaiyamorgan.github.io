console.log("This is loaded from the external JS file");
alert("This is an alert! Click to continue.");

var name = prompt("What is your name?");
let school = prompt("What school do you attend?");
var Funfact = prompt("What should people know about you?");

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Fun Fact: ${Funfact}`);

document.getElementById("name").innerHTML = "<b>Name: </b><i>" + name + "</i>";
document.getElementById("school").innerHTML = "<b>School: </b><i>" + school + "</i>";
document.getElementById("Funfact").innerHTML = "<b>Fun fact: </b><i>" + Funfact + "</i>";
