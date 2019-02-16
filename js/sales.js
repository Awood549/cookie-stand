'use strict'

var pikeUl = document.getElementById("pike");
var airportUl = document.getElementById("airport");
var centerUl = document.getElementById("center");
var capHillUl = document.getElementById("capHill");
var alkiUl = document.getElementById("alki");

var storeHours= [
    "6am", "7am", "8am",
    "9am", "10am", "11am",
    "12pm", "1pm", "2pm",
    "3pm", "4pm", "5pm",
    "6pm", "7pm", "8pm",
];

//Pike Stuff
var pike ={
    minCust:23,
    maxCust: 65,
    actualCust: "",
    avgCookies:6.3,
    cookiesPerHour:"",
    render: function(){
        for(var i=0; i < storeHours.length; i++){
            var min= this.minCust;
            var max= this.maxCust;
            console.log(max);
            console.log(min);
            var randCustNum = Math.random() * (max-min) + min;
            var final =Math.floor(randCustNum);
            this.actualCust = final;
            console.log(this.actualCust);
            var multResult = this.actualCust * this.avgCookies;
            console.log(this.avgCookies);
            this.cookiesPerHour = Math.floor(multResult);
            var liEl = document.createElement("li");
            liEl.textContent = `${storeHours[i]}: ${this.cookiesPerHour} cookies sold.`;
            pikeUl.appendChild(liEl);
    }
    }
}



//Seatac Airport 
var airport ={
    minCust:3,
    maxCust:24,
    actualCust:"",
    avgCookies:1.2,
    cookiesPerHour: "",
    render: function(){
        for(var i=0; i < storeHours.length; i++){
            var min= this.minCust;
            var max= this.maxCust;
            console.log(max);
            console.log(min);
            var randCustNum = Math.random() * (max-min) + min;
            var final =Math.floor(randCustNum);
            this.actualCust = final;
            console.log(this.actualCust);
            var multResult = this.actualCust * this.avgCookies;
            console.log(this.avgCookies);
            this.cookiesPerHour = Math.floor(multResult);
            var liEl = document.createElement("li");
            liEl.textContent = `${storeHours[i]}: ${this.cookiesPerHour} cookies sold.`;
            airportUl.appendChild(liEl);
    }
}
}

//Seattle Center
var center = {
    minCust:11,
    maxCust:38,
    actualCust:"",
    avgCookies:3.7,
    cookiesPerHour: "",
    render: function(){
        for(var i=0; i < storeHours.length; i++){
            var min= this.minCust;
            var max= this.maxCust;
            console.log(max);
            console.log(min);
            var randCustNum = Math.random() * (max-min) + min;
            var final =Math.floor(randCustNum);
            this.actualCust = final;
            console.log(this.actualCust);
            var multResult = this.actualCust * this.avgCookies;
            console.log(this.avgCookies);
            this.cookiesPerHour = Math.floor(multResult);
            var liEl = document.createElement("li");
            liEl.textContent = `${storeHours[i]}: ${this.cookiesPerHour} cookies sold.`;
            centerUl.appendChild(liEl);
    }}
}

//Capitol Hill
var capHill = {
    minCust:20,
    maxCust:38,
    actualCust:"",
    avgCookies:2.3,
    cookiesPerHour:"",
    render: function(){
        for(var i=0; i < storeHours.length; i++){
            var min= this.minCust;
            var max= this.maxCust;
            console.log(max);
            console.log(min);
            var randCustNum = Math.random() * (max-min) + min;
            var final =Math.floor(randCustNum);
            this.actualCust = final;
            console.log(this.actualCust);
            var multResult = this.actualCust * this.avgCookies;
            console.log(this.avgCookies);
            this.cookiesPerHour = Math.floor(multResult);
            var liEl = document.createElement("li");
            liEl.textContent = `${storeHours[i]}: ${this.cookiesPerHour} cookies sold.`;
            capHillUl.appendChild(liEl);
    }}
}

//alki Stuff
var alki = {
    minCust:2,
    maxCust:16,
    actualCust: "",
    avgCookies:4.6,
    cookiesPerHour: "",
    render: function(){
        for(var i=0; i < storeHours.length; i++){
            var min= this.minCust;
            var max= this.maxCust;
            console.log(max);
            console.log(min);
            var randCustNum = Math.random() * (max-min) + min;
            var final =Math.floor(randCustNum);
            this.actualCust = final;
            console.log(this.actualCust);
            var multResult = this.actualCust * this.avgCookies;
            console.log(this.avgCookies);
            this.cookiesPerHour = Math.floor(multResult);
            var liEl = document.createElement("li");
            liEl.textContent = `${storeHours[i]}: ${this.cookiesPerHour} cookies sold.`;
            alkiUl.appendChild(liEl);
    }}
}
pike.render();
airport.render();
center.render();
capHill.render();
alki.render();