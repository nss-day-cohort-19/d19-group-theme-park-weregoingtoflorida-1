"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");


let libertySquareObj = {};

libertySquareObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        libertySquareObj.filter(data);
    });
};

libertySquareObj.filter = function(data){
    console.log("data", data);
    libertySquareObj.attraction = [];
    data.forEach(function(element) {

        if (element.area_id === 2) {

        if (element.area_id === 4) {

        libertySquareObj.attraction.push(element);
        }
        }
    });
        libertySquareObj.write();
};

libertySquareObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(libertySquareObj));
    libertySquareObj.dropDownEvents();

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
