"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let cindysObj = {};

cindysObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        cindysObj.filter(data);
    });
};

cindysObj.filter = function(data){
    console.log("data", data);
    cindysObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 7) {
        cindysObj.attraction.push(element);
        }
    });
        cindysObj.write();
};

cindysObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(cindysObj));

};

module.exports=cindysObj;
