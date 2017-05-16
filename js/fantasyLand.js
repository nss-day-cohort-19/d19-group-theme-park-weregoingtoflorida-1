"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let fantasyLandObj = {};

fantasyLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        fantasyLandObj.filter(data);
    });
};

fantasyLandObj.filter = function(data){
    console.log("data", data);
    fantasyLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 5) {
        fantasyLandObj.attraction.push(element);
        }
    });
        fantasyLandObj.write();
};

fantasyLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(fantasyLandObj));

};

module.exports=fantasyLandObj;
