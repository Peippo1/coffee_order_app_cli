const yargs = require("yargs");
// Allows for pirate speak to parse yer strings.
const figlet = require("figlet");
// Impliment FIG font - Ascii art.
const inquirer = require("inquirer");
// Allows for interaction with the user interface.
// uses promises.
const chalk = require('chalk');
// Chalk npm for color - remember to check syntax.
const {addOrders, listOrders, removeOrders} = require("../utils/orders");
// Importing from local.


