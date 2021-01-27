// const yargs = require("yargs");
// // Allows for pirate speak to parse yer strings.
const figlet = require("figlet");
// Impliment FIG font - Ascii art.
const inquirer = require("inquirer");
// Allows for interaction with the user interface.
// uses promises.
const chalk = require('chalk');
// Chalk npm for color - remember to check syntax.
const {allOrders} = require("../utils/orders");
// Importing from local.

// ammend figlet font > maybe a pirate ship...?
// main function --> chalk and figlet used.
// option to order additional drinks>> if/else statement
// ___________________________________________________________________________________________________________

const main = () => { 
    console.log(chalk.blue.underline.bold("Avast! welcome to Swashbucklers coffee!"));
};
// above needs to be a header. ^

let questions = [{
    // list of coffees
    type: "list",
    name: "beverages",
    message: "Yarr! What coffee would you like?",
    choices: ["First Mate Coffee - Black", "First Mate Coffee - White", "Cuappacino", "LAARte"],
    filter: function (val){
        return val.toLowerCase();
    },
},
// add option for selected milk choices later (oat etc.)
{   // size of coffee
    type: "list",
    name: "size",
    message: "Aye what size for yer?",
    choices: ["Laaarge (large)", "Ar-regular (medium)", "Wee Mr Smee (small)"],
    filter: function (val){
        return val.toLowerCase();
    },  
},
{   // number of coffee's
    type: "input",
    name: "quantity",
    message: "And how many will ye be havin?",
    validate: function (value) {
        let valid = !isNaN(parseFloat(value));
        return valid || "Curse ye thats not a number!";
    },
    filter: Number,
},
];
// return statement of total order
inquirer.prompt(questions).then((allOrders) => {
    console.log("\nOrder receipt:");
    console.log(JSON.stringify(allOrders, null, "  "));
    console.log("Yarr Have a great day!")
}

);


main();

// node src/app.js to call