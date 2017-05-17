"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


let tomorrowLandObj = {};

tomorrowLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        tomorrowLandObj.filter(data);
    });
};

tomorrowLandObj.filter = function(data){
    console.log("data", data);
    tomorrowLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 6) {
        tomorrowLandObj.attraction.push(element);
        }
    });
        tomorrowLandObj.write();
};

tomorrowLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(tomorrowLandObj));
    tomorrowLandObj.dropDownEvents();

};

tomorrowLandObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        tomorrowLandObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=tomorrowLandObj;
