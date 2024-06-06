//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.     // If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

// Hiba, 06-03-2024
// This program prints a personal message
let myname: string = "Hiba";
console.log(`Assalam o Alaikum warahmatullahi wa barakatuh ${myname}, Hope you're in the best state of Iman and Health!`);

//Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by
// accessing each element in the list, one at a time.
let names: string[] = ["Humna Khan", "Aqsa Sajid", "Zubi dubious", "Samin", "Syeda Saba Noor", "Noor us Sabah"];
for (let i=0; i < names.length; i++) {
    console.log(names[i]);
}

//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
//print a message to them. The message should be the same for each person, but personalized with their name.
for (let name of names) {
    console.log(`Assalam o Alaikum warahmatullahi wa barakatuh ${name}, May Malik e Kun Faya Kun blessed you 
    with the BESTEST!`);
}