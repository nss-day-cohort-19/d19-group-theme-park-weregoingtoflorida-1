"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


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
    adventureLandObj.dropDownEvents();

};

adventureLandObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        adventureLandObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=adventureLandObj;
