"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


let fantasyLandObj = {};

fantasyLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        fantasyLandObj.filter(data);
    });
};

fantasyLandObj.filter = function(data){
    console.log("data", data);
    fantasyLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 2) {
        fantasyLandObj.attraction.push(element);
        }
    });
        fantasyLandObj.write();
};

fantasyLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(fantasyLandObj));
    fantasyLandObj.dropDownEvents();

};

fantasyLandObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        fantasyLandObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=fantasyLandObj;
