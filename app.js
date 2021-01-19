'use strict';

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// Location 	Min / Cust 	Max / Cust 	Avg Cookie / Sale
// Seattle 	23 	65 	6.3
// Tokyo 	3 	24 	1.2
// Dubai 	11 	38 	3.7
// Paris 	20 	38 	2.3
// Lima 	2 	16 	4.6

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

// Make a constructor function 
var Store = function(name, minCustomers, maxCustomers, avgPerCookiesPerCustomer) {
  //properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgPerCookiesPerCustomer = avgPerCookiesPerCustomer;
  //methods
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  //arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
};

Store.prototype.numOfCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(hourlyCustomers);
  }
};
Store.prototype.cookiesPerCustomer = function() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgPerCookiesPerCustomer);
    this.averageCookiesPerHour.push(hourlyCookies);
    this.totalCookiesPerDay += hourlyCookies;
  }
};

var seattle = new Store('seattle', 23, 65, 6.3);
var tokyo = new Store('tokyo', 3, 24, 1.2);
var dubai = new Store('dubai', 11, 38, 3.7);
var paris = new Store('paris', 20, 38, 2.3);
var lima = new Store('lima', 2, 16, 4.6);

console.log('seattle: ', seattle);
console.log('tokyo: ', tokyo);
console.log('dubai: ', dubai);
console.log('paris: ', paris);
console.log('lima: ', lima);