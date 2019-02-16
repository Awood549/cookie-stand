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

function randCustNum(min,max){
    var result= Math.random() * (max-min) + min;
    console.log(result);
    var final =Math.floor(result);
    console.log(final);
   return final;
    }
function multiply(a,b){
var result = a*b;
var final= Math.floor(result);
return[final];
}

//Pike Stuff
var pike ={
    minCust:23,
    maxCust: 65,
    actualCust: "",
    avgCookies:6.3,
    cookiesPerHour:"",
    }

pike.actualCust = randCustNum(pike.minCust,pike.maxCust);
pike.cookiesPerHour = multiply(pike.actualCust,pike.avgCookies)[0];
console.log(pike);

//creating a funtion to show cookies sold in a list.
var render = function(){
    for(var i=0; i < storeHours.length; i++){
        var liEl = document.createElement("li");
        liEl.textContent = `${storeHours[i]}: ${pike.cookiesPerHour} cookies sold.`;
        pikeUl.appendChild(liEl);
}

var airport ={
    minCust:3,
    maxCust:24,
}
//alki Stuff
var alki = {
    minCust:2,
    maxCust:16,
    actualCust: "",
    avgCookies:4.6,
    cookiesPerHour: "",
}}
render();