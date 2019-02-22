'use strict'

var hours = ['6am', '7am', '8am',
  '9am', '10am', '11am', '12pm', '1pm',
  '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var table = document.getElementById('sales-table');

function CookieStore(locationName, minCust, maxCust, avgCookieSale, id) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
  this.id = id;
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
}

CookieStore.prototype.render = function(){
  this.calcCookiesPerHour();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

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
  thEl.textContent = 'LocationTotals';
  trEl.appendChild(thEl);
  table.appendChild(trEl);
}

var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3, 'pike');
var seaTac = new CookieStore( 'Seatac Airport',3,24,1.2,'seatac');
var seattleCenter = new CookieStore('Seattle Center',11,38,3.7,'seattleCenter');
var capHill = new CookieStore('Capitol Hill',20,38,2.3,'capHill');
var alki = new CookieStore( 'Alki',2,16,4.6, 'alki');

var allShops = [pikePlace, seaTac, seattleCenter,
capHill, alki];

(function renderTable() {
  makeHeaderRow();
  for( var i=0; i <allShops.length; i++){
    allShops[i].render();
  }
})();