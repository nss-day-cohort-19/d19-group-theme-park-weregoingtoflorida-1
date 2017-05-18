"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let cindysObj = {};

cindysObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        cindysObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        cindysObj.filterArea(data);
    });
};

cindysObj.filterAttraction = function(data){
    cindysObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 7) {
        cindysObj.attraction.push(element);
        }
    });
        cindysObj.write();
};

cindysObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 7){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    cindysObj.writeName();
};

cindysObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(cindysObj));
    cindysObj.dropDownEvents();

};

cindysObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

};

cindysObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        cindysObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=cindysObj;
