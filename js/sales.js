'use strict'

var storeTimes = document.getElementById("storeTimes");
var pikeUl =document.getElementById("pike");
var airportUl = document.getElementById("airport");
var centerUl = document.getElementById("center");
var capHillUl = document.getElementById("capHill");
var alkiUl = document.getElementById("alki");
var totalHolder = document.getElementById("totals");

var cookieTotal= 0;
var storeHours= [
    "6am", "7am", "8am",
    "9am", "10am", "11am",
    "12pm", "1pm", "2pm",
    "3pm", "4pm", "5pm",
    "6pm", "7pm", "8pm",
];


function Stores(minCust,maxCust,actualCust,avgCookies,list,cookieTimeTotal,cookiesPerHour) {
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.actualCust = actualCust;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = cookiesPerHour;
    this.cookieData = [];
    this.list = list;
    this.cookieTimeTotal = cookieTimeTotal;
    
    this.render = function() {
        for (var i = 0; i < storeHours.length; i++){
            var min = this.minCust;
            var max = this.maxCust;
            var randCustNum = Math.random() * (max-min) + min;
            var final = Math.floor(randCustNum);
            this.actualCust = final;
            var multResult = this.actualCust * this.avgCookies;
            this.cookiesPerHour = Math.floor(multResult);
            this.cookieData[i] = this.cookiesPerHour;
            cookieTotal = this.cookiesPerHour + cookieTotal;
            var liEl = document.createElement("td");
            liEl.textContent = this.cookiesPerHour;
            this.list.appendChild(liEl);
        }
    }
}

//1st and pike
var pike = new Stores(23,65,"",6.3,pikeUl);
console.log(pike.cookieData);
//Seatac Airport 
var airport = new Stores(3,24,"",1.2,airportUl);
//Seattle Center
var center = new Stores(11,38,"",3.7,centerUl);
//Capitol Hill
var capHill = new Stores(20,38,"",2.3,capHillUl);
//alki 
var alki = new Stores(2,16,"",4.6,alkiUl);

pike.render();
airport.render();
center.render();
capHill.render();
alki.render();

    for(var i = 0; i < storeHours.length; i++){
        var table = document.createElement("td");
        table.textContent = storeHours[i];
        storeTimes.appendChild(table);
    }