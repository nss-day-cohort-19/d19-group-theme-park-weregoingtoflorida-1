"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


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
    mainStUSAObj.dropDownEvents();

};

mainStUSAObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        mainStUSAObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=mainStUSAObj;
