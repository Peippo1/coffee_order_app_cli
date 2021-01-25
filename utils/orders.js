const yargs = require("yargs");
const fs = require("fs");
const chalk = require('chalk');
const { allOrders } = require("process");

// function for adding orders to total order.
const addOrder = (myOrder) => {
    const allOrders = loadNotes();
    allOrders.push({ reminder: myOrder });
    console.log(`
  Added new note ${myOrder}
  `);
  saveOrders(allOrders);
};
// try/catch is to catch errors in the ui that would result in crashes.
const loadOrders = () => {
    try {
      const dataBuffer = fs.readFileSync("srs/orders.json");
      const OrdersJson = dataBuffer.toString();
      return JSON.parse(OrdersJson);
    } catch (error) {
      return [];
    }
  };

// All orders are to be passed into the array so be saved as a Json and then passed to the specified file.
const saveOrders = (allOrders) => {
  const ordersJson = JSON.stringify(allOrders);
  fs.writeFileSync("orders.json", ordersJson);
};

// Listing orders using maping 
const listOrders = () => {
  const allOrders = loadOrders();
  allOrders.map((order, index) => {
    console.log(chalk.green(`
    ${index + 1}. ${order.reminder}
    `));
  });
};


function removeOrder(orderToDelete) {
  const allOrders = loadOrders();

  try {
      const removedItem = allOrdes.splice(orderToDelete - 1, 1);
      // Splicing index of removed order. Indexed number first and then number of items to be removed from the order.
      console.log(`
      order has been removed ${removedOrder[0].reminder}
      `);
      // Removing order item within the array.
  } catch (error) {
      console.log("Number out of range");
  }
// Save orders after changes are made.
  saveOrders(allOrders);
};
// Export. list items to be exported.
module.exports = {
  addOrder,
  listOrders,
  removeOrder,
};