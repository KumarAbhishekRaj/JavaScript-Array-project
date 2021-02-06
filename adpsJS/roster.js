var roster = [];


//ADDING STUDENTS

function addNew() {
    var newName = prompt("What name would you like to add?");
    roster.push(newName)
}

// REMOVING STUDENTS

function remove() {
    var remName = prompt("What name would you like to remove?");
    var index = roster.indexOf(remName);
    roster.splice(index, 1)
}

// DISPLAY ROSTER :--Create a function called display that prints out the roster to the console.

function display() {
    console.log(roster);
}

// Start by asking if they want to use the web app...

//Now create a while Loop that keeps asking for an action (add, remove, display or quit)
// Use if and else if statements to excute the correct function for each command.

var start = prompt("Would you like to start the roster web app? y/n");
var request = "empty";

if (start === "y") {
    while (request !== "quit") {
        request = prompt("Please select an action: add, remove, display, or quit.")
        if (request === "add") {
            addNew();
        } else if (request === "display") {
            display();

        } else if (request === "remove") {
            remove();
        } else {
            alert("Not recognized")
        }
    }
}
alert("Thanks for using the web App! Please refresh to start over!")