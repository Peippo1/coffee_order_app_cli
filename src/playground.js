// const inquirer = require("inquirer");

// console.log("Avast! welcome to Swashbucklers coffee!");

// let questions = [{
//     // list of coffees
//     type: "list",
//     name: "beverages",
//     message: "Yarr! What coffee would you like?",
//     choices: ["First Mate Coffee - Black", "First Mate Coffee - White", "Cuappacino", "LAARte"],
//     filter: function (val){
//         return val.toLowerCase();
//     },
// },
// // add option for selected milk choices later (oat etc.)
// {   // size of coffee
//     type: "list",
//     name: "size",
//     message: "Aye what size for yer?",
//     choices: ["Laaarge (large)", "Ar-regular (medium)", "Wee Mr Smee (small)"],
//     filter: function (val){
//         return val.toLowerCase();
//     },  
// },
// {   // number of coffee's
//     type: "input",
//     name: "quantity",
//     message: "And how many will ye be havin?",
//     validate: function (value) {
//         let valid = !isNaN(parseFloat(value));
//         return valid || "Curse ye thats not a number!";
//     },
//     filter: Number,
// },
// ];
// // give return statement of total order?
// inquirer.prompt(questions).then((answers) => {
//     console.log("\nOrder receipt:");
//     console.log(JSON.stringify(answers, null, "  "));
// });

// // node src/playground.js



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const app = async () => {
//     const answers = await inquirer.prompt(topQuestion);
//     if (answers.options == "Yarr") {
//         const answer = await inquirer.prompt(addQuestion);
//         addOrder(answer.add);
//         app();

// } else if (answers.options == "Narr")
// }