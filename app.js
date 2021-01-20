'use strict';

//var tableBodySeattle = document.getElementById;('Table-body-seattle');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Make a constructor function
var Store = function(name, minCustomers, maxCustomers, avgPerCookiesPerCustomer) {
  // properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgPerCookiesPerCustomer = avgPerCookiesPerCustomer;
  // arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  // methods
  // take methods out of the constructor
  // this.numOfCustomersPerHour();
  // this.cookiesPerCustomer();
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
Store.prototype.displaySeattle = function () {
  for (var i = 0; i < seattle.averageCustomersPerHour.length; i++) {
    //make a td
    var tdElement = document.createElement('td');

    //put shit in it
    tdElement.textContent = this.averageCookiesPerHour[i];

    //locate the section with id=profiles
    var trElement = document.getElementById('Table-body-seattle');
    trElement.appendChild(tdElement);
  }
  var tdLastElement = document.createElement('td');
  var trLastElement = document.getElementById('Table-body-seattle');
  tdLastElement.textContent = this.totalCookiesPerDay;
  trLastElement.appendChild(tdLastElement);
};
Store.prototype.displayTokyo = function () {
  for (var i = 0; i < tokyo.averageCustomersPerHour.length; i++) {
    //make a td
    var tdElement = document.createElement('td');

    //put shit in it
    tdElement.textContent = this.averageCookiesPerHour[i];

    //locate the section with id=profiles
    var trElement = document.getElementById('Table-body-tokyo');

    trElement.appendChild(tdElement);
  }
  var tdLastElement = document.createElement('td');
  var trLastElement = document.getElementById('Table-body-tokyo');
  tdLastElement.textContent = this.totalCookiesPerDay;
  trLastElement.appendChild(tdLastElement);
};
Store.prototype.displayDubai = function () {
  for (var i = 0; i < dubai.averageCustomersPerHour.length; i++) {
    //make a td
    var tdElement = document.createElement('td');

    //put shit in it
    tdElement.textContent = this.averageCookiesPerHour[i];

    //locate the section with id=profiles
    var trElement = document.getElementById('Table-body-dubai');

    trElement.appendChild(tdElement);
  }
  var tdLastElement = document.createElement('td');
  var trLastElement = document.getElementById('Table-body-dubai');
  tdLastElement.textContent = this.totalCookiesPerDay;
  trLastElement.appendChild(tdLastElement);
};
Store.prototype.displayParis = function () {
  for (var i = 0; i < paris.averageCustomersPerHour.length; i++) {
    //make a td
    var tdElement = document.createElement('td');

    //put shit in it
    tdElement.textContent = this.averageCookiesPerHour[i];

    //locate the section with id=profiles
    var trElement = document.getElementById('Table-body-paris');

    trElement.appendChild(tdElement);
  }
  var tdLastElement = document.createElement('td');
  var trLastElement = document.getElementById('Table-body-paris');
  tdLastElement.textContent = this.totalCookiesPerDay;
  trLastElement.appendChild(tdLastElement);
};
Store.prototype.displayLima = function () {
  for (var i = 0; i < lima.averageCustomersPerHour.length; i++) {
    //make a td
    var tdElement = document.createElement('td');

    //put shit in it
    tdElement.textContent = this.averageCookiesPerHour[i];

    //locate the section with id=profiles
    var trElement = document.getElementById('Table-body-lima');

    trElement.appendChild(tdElement);
  }
  var tdLastElement = document.createElement('td');
  var trLastElement = document.getElementById('Table-body-lima');
  tdLastElement.textContent = this.totalCookiesPerDay;
  trLastElement.appendChild(tdLastElement);
};
Store.prototype.displayHours = function () {
  //populate the hrs
  for (var i = 0; i < hours.length; i++) {
    //var storeRow = document.createElement('tr');
    //make a td
    var tdElement = document.createElement('td');

    //put shit in it
    tdElement.textContent = hours[i];

    //locate the section with id=profiles
    var trElement = document.getElementById('Hours');

    //storeRow.appendChild(tdElement);
    trElement.appendChild(tdElement);
  }
  var tdLastElement = document.createElement('td');
  var trLastElement = document.getElementById('Hours');
  tdLastElement.textContent = 'Daily Location Total';
  trLastElement.appendChild(tdLastElement);
};

// make the store objects
var seattle = new Store('seattle', 23, 65, 6.3);
var tokyo = new Store('tokyo', 3, 24, 1.2);
var dubai = new Store('dubai', 11, 38, 3.7);
var paris = new Store('paris', 20, 38, 2.3);
var lima = new Store('lima', 2, 16, 4.6);

//call the methods
seattle.numOfCustomersPerHour();
tokyo.numOfCustomersPerHour();
dubai.numOfCustomersPerHour();
paris.numOfCustomersPerHour();
lima.numOfCustomersPerHour();
//call the methods
seattle.cookiesPerCustomer();
tokyo.cookiesPerCustomer();
dubai.cookiesPerCustomer();
paris.cookiesPerCustomer();
lima.cookiesPerCustomer();
//call the methods
seattle.displayHours();
//call the methods
seattle.displaySeattle();
tokyo.displayTokyo();
dubai.displayDubai();
paris.displayParis();
lima.displayLima();

//testing
console.log('seattle: ', seattle);
console.log('tokyo: ', tokyo);
console.log('dubai: ', dubai);
console.log('paris: ', paris);
console.log('lima: ', lima);

// Make this into a loop

//Seattle
for (var i = 0; i < seattle.averageCustomersPerHour.length; i++) {
  //make a li
  var liElement = document.createElement('li'); 
  //locate the section with id=profiles
  var sectionElement = document.getElementById('Seattle');

  //put content in li
  liElement.textContent = hours[i] + ': ' + seattle.name + ': ' + seattle.averageCustomersPerHour[i] + ' customers per hour; ' + seattle.averageCookiesPerHour[i] + ' cookies per hour; ';
  //put everything you made to that section
  sectionElement.appendChild(liElement); // appends everything
}

//Tokyo
for (var i = 0; i < tokyo.averageCustomersPerHour.length; i++) {
  //make a li
  var liElement = document.createElement('li'); 
  //locate the section with id=profiles
  var sectionElement = document.getElementById('Tokyo');

  //put content in li
  liElement.textContent = hours[i] + ': ' + tokyo.name + ': ' + tokyo.averageCustomersPerHour[i] + ' customers per hour; ' + tokyo.averageCookiesPerHour[i] + ' cookies per hour; ';
  //put everything you made to that section
  sectionElement.appendChild(liElement); // appends everything
}

//Dubai
for (var i = 0; i < dubai.averageCustomersPerHour.length; i++) {
  //make a li
  var liElement = document.createElement('li'); 
  //locate the section with id=profiles
  var sectionElement = document.getElementById('Dubai');

  //put content in li
  liElement.textContent = hours[i] + ': ' + dubai.name + ': ' + dubai.averageCustomersPerHour[i] + ' customers per hour; ' + dubai.averageCookiesPerHour[i] + ' cookies per hour; ';
  //put everything you made to that section
  sectionElement.appendChild(liElement); // appends everything
}

//Paris
for (var i = 0; i < paris.averageCustomersPerHour.length; i++) {
  //make a li
  var liElement = document.createElement('li'); 
  //locate the section with id=profiles
  var sectionElement = document.getElementById('Paris');

  //put content in li
  liElement.textContent = hours[i] + ': ' + paris.name + ': ' + paris.averageCustomersPerHour[i] + ' customers per hour; ' + paris.averageCookiesPerHour[i] + ' cookies per hour; ';
  //put everything you made to that section
  sectionElement.appendChild(liElement); // appends everything
}

//Lima
for (var i = 0; i < lima.averageCustomersPerHour.length; i++) {
  //make a li
  var liElement = document.createElement('li'); 
  //locate the section with id=profiles
  var sectionElement = document.getElementById('Lima');

  //put content in li
  liElement.textContent = hours[i] + ': ' + lima.name + ': ' + lima.averageCustomersPerHour[i] + ' customers per hour; ' + lima.averageCookiesPerHour[i] + ' cookies per hour; ';
  //put everything you made to that section
  sectionElement.appendChild(liElement); // appends everything
}
