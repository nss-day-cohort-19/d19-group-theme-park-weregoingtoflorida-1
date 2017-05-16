"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let frontierLandObj = {};

frontierLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        frontierLandObj.filter(data);
    });
};

frontierLandObj.filter = function(data){
    console.log("data", data);
    frontierLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 3) {
        frontierLandObj.attraction.push(element);
        }
    });
        frontierLandObj.write();
};

frontierLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(frontierLandObj));

};

module.exports=frontierLandObj;
