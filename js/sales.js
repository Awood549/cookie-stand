'use strict'

function randCustNum(min,max){
    var result= Math.random() * (max-min) + min;
    console.log(result);
    var final =Math.floor(result);
    console.log(final);
   return final;
    }
function multiply(a,b){
return a*b;
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
pike.cookiesPerHour = multiply(pike.actualCust,pike.avgCookies);
console.log(pike);

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
}

