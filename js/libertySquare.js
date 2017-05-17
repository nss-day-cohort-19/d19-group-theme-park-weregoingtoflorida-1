"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let libertySquareObj = {};

libertySquareObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        libertySquareObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        libertySquareObj.filterArea(data);
    });
};

libertySquareObj.filterAttraction = function(data){
    console.log("data", data);
    libertySquareObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 4) {
        libertySquareObj.attraction.push(element);
        }
    });
        libertySquareObj.write();
};

libertySquareObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 4){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    libertySquareObj.writeName();
};

libertySquareObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(libertySquareObj));
    libertySquareObj.dropDownEvents();

};

libertySquareObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

};

libertySquareObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        libertySquareObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=libertySquareObj;
