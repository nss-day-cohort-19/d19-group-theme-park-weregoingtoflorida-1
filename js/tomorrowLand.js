"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let tomorrowLandObj = {};

tomorrowLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        tomorrowLandObj.filter(data);
    });
};

tomorrowLandObj.filter = function(data){
    console.log("data", data);
    tomorrowLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 6) {
        tomorrowLandObj.attraction.push(element);
        }
    });
        tomorrowLandObj.write();
};

tomorrowLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(tomorrowLandObj));

};

module.exports=tomorrowLandObj;
