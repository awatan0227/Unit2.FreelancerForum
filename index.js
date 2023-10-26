//list of available freelancer
const freelancer = [
    {name: "Alice", price: 30, occupation: "writer"},
    {name: "Bob", price: 50, occupation: "Teacher"},
];

function getAverage(arr){
    return arr.map(price => price.price)
    .reduce((accumulator, price)=> accumulator + price)/arr.length;
};

function renderFreelancers(arr){
    //clear initial freelancer list
    //display freelancer list
    //iterate through each freelancer
    //grab data
    //create dom elements 
}

document.querySelector
