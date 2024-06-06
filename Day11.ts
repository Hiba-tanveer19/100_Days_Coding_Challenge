// Removing all usernames ensures the message "We need to find some users!" is printed.//
//Empty array//
let usernames: string[] = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}else {
    console.log("Greet users");
}


//Array Method//
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(new_users => {
    if (current_users.some(current_users => current_users.toLowerCase() == new_users.toLowerCase())){
        console.log(`${new_users} will need to enter a new username!`);
}else {
    console.log(`${new_users} is available!`);
}
});


//Array Method//
let numbers: number[] = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(numbers => {
    let suffix = "th";
    if (numbers == 1) {
        suffix = "st"
    }else if (numbers == 2){
        suffix = "nd"
    }else if (numbers == 3){
        suffix = "rd"
    }
    console.log(`${numbers}${suffix}`);    
    });