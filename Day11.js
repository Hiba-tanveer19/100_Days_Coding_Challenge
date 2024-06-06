// Removing all usernames ensures the message "We need to find some users!" is printed.//
//Empty array//
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Greet users");
}
//Array Method//
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() == new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter a new username!"));
    }
    else {
        console.log("".concat(new_users, " is available!"));
    }
});
//Array Method//
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (numbers) {
    var suffix = "th";
    if (numbers == 1) {
        suffix = "st";
    }
    else if (numbers == 2) {
        suffix = "nd";
    }
    else if (numbers == 3) {
        suffix = "rd";
    }
    console.log("".concat(numbers).concat(suffix));
});
