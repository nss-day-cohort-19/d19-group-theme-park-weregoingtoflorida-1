"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let homePageObj = {};

homePageObj.call = function(){

    promise.loadParkinfo()
    .then(data =>{
        titleData = data[0];
        console.log("home page data", data);
        homePageObj.writeName();
    });
};

homePageObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

};



module.exports=homePageObj;
