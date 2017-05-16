"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


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
    cindysObj.dropDownEvents();

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
