'use strict'

var totalHourlyCookies = [];
var hours = ['6am', '7am', '8am',
  '9am', '10am', '11am', '12pm', '1pm',
  '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var table = document.getElementById('sales-table');

function CookieStore(locationName, minCust, maxCust, avgCookieSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  this.calcCustPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCust, this.maxCust));
    }
  };
  this.calcCookiesPerHour = function () {
    this.calcCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.floor(this.customersPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  };
  // this.calcTotalHourlyCookies
}

var trEl = document.createElement('tr');
CookieStore.prototype.render = function(){
  this.calcCookiesPerHour();
  
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('th');

  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for ( var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  table.appendChild(trEl);
};

function random (min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeFooterRow(){
  var tfEl = document.createElement('th');
  var trEl = document.createElement('tfoot'); //this creates a dom element
  tfEl.textContent = 'Hourly Totals'; //this assigns a value to the property tfEl
  trEl.appendChild(tfEl); //this appends trEl to tfEl

var totalOfTotals = 0
  for ( var i = 0; i < hours.length; i++){   
    var externalTotal=0;
    var tempTotal=0;

    for(var j = 0; j < allShops.length; j++){
      var tempTotal = tempTotal + allShops[j].cookiesPerHour[i];
    }
   externalTotal= externalTotal + tempTotal;
   totalHourlyCookies.push(externalTotal);
   tfEl = document.createElement('td');
   tfEl.textContent = externalTotal;
   trEl.appendChild(tfEl);
   totalOfTotals += externalTotal;
  }
 
  tfEl = document.createElement('th');
  tfEl.textContent = totalOfTotals;
  trEl.appendChild(tfEl);
  table.appendChild(trEl);
}

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th'); 
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  table.appendChild(trEl);
}


var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);
var seaTac = new CookieStore( 'Seatac Airport',3,24,1.2);
var seattleCenter = new CookieStore('Seattle Center',11,38,3.7);
var capHill = new CookieStore('Capitol Hill',20,38,2.3);
var alki = new CookieStore( 'Alki',2,16,4.6);

var allShops = [pikePlace, seaTac, seattleCenter,
  capHill, alki];
  
  var storeForm = document.getElementById('store-form');
  
  function createNewStore(event){
    event.preventDefault();
    var loc= event.target.location.value;
    var minimum= event.target.minimum.value;
    var maximum= event.target.maximum.value;
    var avgSales= event.target.avgSales.value;
  
    var newStore = new CookieStore(loc,minimum,maximum,avgSales);

    //in case pat is a fool
    if(isNaN(minimum)||isNaN(maximum)||isNaN(avgSales)||
    minimum===""||maximum===""||avgSales===""){
      alert("Sorry, make sure you're entering a correct value for each field");
    }
    else{
      allShops.push(newStore);

      var last = document.getElementById('sales-table').lastChild ;    
      document.getElementById('sales-table').removeChild(last);
      newStore.render();
      makeFooterRow();
    }
    }
  
  storeForm.addEventListener('submit',createNewStore);
  
  function renderTable() {
    makeHeaderRow();
    for( var i=0; i < allShops.length; i++){
      allShops[i].render();
    }
  }
  renderTable();
  makeFooterRow();
