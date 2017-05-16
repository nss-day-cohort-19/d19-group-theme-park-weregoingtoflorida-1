"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let mainStUSAObj = {};

mainStUSAObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        mainStUSAObj.filter(data);
    });
};

mainStUSAObj.filter = function(data){
    console.log("data", data);
    mainStUSAObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 1) {
        mainStUSAObj.attraction.push(element);
        }
    });
        mainStUSAObj.write();
};

mainStUSAObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(mainStUSAObj));

};

module.exports=mainStUSAObj;
