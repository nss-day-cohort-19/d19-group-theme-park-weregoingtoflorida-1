"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let homePageObj = {};

homePageObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        homePageObj.filter(data);
    });
};

homePageObj.filter = function(data){
    console.log("data", data);
    homePageObj.attraction = [];
    homePageObj.attraction.push(data);
    homePageObj.write();
};

homePageObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(homePageObj));

};

module.exports=homePageObj;
