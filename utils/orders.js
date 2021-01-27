// const yargs = require("yargs");
const fs = require("fs");
const chalk = require('chalk');
const { answers } = require("process");

// function for adding orders to total order.
const addOrder = (myOrder) => {
    const allOrders = loadOrders();
    allOrders.push(myOrder);
  //   console.log(`
  // Added new order ${myOrder}
  // `);
  saveAnswers(allOrders);
};
// try/catch is to catch errors in the ui that would result in crashes.
const loadOrders = () => {
    try {
      const dataBuffer = fs.readFileSync("src/orders.json");
      const OrdersJson = dataBuffer.toString();
      return JSON.parse(ordersJson);
    } catch (error) {
      return [];
    }
  };

// All orders are to be passed into the array so be saved as a Json and then passed to the specified file.
const saveAnswers = (allOrders) => {
  const ordersJson = JSON.stringify(allOrders);
  fs.writeFileSync("src/orders.json", ordersJson);
};

// // Listing orders using maping 
const listOrders = () => {
  const answers = loadOrders();
  answers.map((order, index) => {
    console.log((`
    ${index + 1}. ${order.reminder}
    `));
  });
};


function removeAnswer(orderToDelete) {
  const allOrders = loadOrders();

  try {
      const removedItem = allOrders.splice(orderToDelete - 1, 1);
      // Splicing index of removed order. Indexed number first and then number of items to be removed from the order.
      console.log(`
      order has been removed ${removeAnswer[0].reminder}
      `);
      // Removing order item within the array.
  } catch (error) {
      console.log("Number out of range");
  }

};
allOrders();

// Export. list items to be exported.
module.exports = {
  allOrders,
  // addOrder,
  // listOrders,
  // removeAnswer,
};