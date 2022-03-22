// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


let castleListing = {
    title: "Live like a King", 
    price : 160,
    location: "Addis Ababa",
    closeByPlaces: ["supermarket", "restaurant"],
    images:["img/castle1.png", "img/castle2.png"],
    isSupeHost : true
}

console.log(castleListing.images)
console.log(castleListing["title"])
