"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let adventureLandObj = {};

adventureLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        adventureLandObj.filter(data);
    });
};

adventureLandObj.filter = function(data){
    console.log("data", data);
    adventureLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 2) {
        adventureLandObj.attraction.push(element);
        }
    });
        adventureLandObj.write();
};

adventureLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(adventureLandObj));

};

module.exports=adventureLandObj;
