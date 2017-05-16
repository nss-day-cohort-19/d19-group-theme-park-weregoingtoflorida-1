"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


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
    frontierLandObj.dropDownEvents();

};

frontierLandObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        frontierLandObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=frontierLandObj;
