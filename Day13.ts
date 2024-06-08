//Question 37: Large Shirts: Default values in make_shirt().//

// Default large and message//
function make_shirt(size: string = "large", message: string = "I love typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it!`);
}
    make_shirt();

// Default message, medium size//
make_shirt("medium");

// Custom message, small size//
make_shirt("small", "Dive into Coding"); 

//Question 38: Cities: Describing cities with a function.//
function describe_city(city:string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

//Question 39: City Names: Formatting city-country pairs.//
function city_country(city:string, country:string):string {
    return`I love ${city}, ${country}`;
}
console.log(city_country("Islamabad", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));





