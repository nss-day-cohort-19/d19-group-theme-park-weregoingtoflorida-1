"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let mainStUSAObj = {};

mainStUSAObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        mainStUSAObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        mainStUSAObj.filterArea(data);
    });
};

mainStUSAObj.filterAttraction = function(data){
    mainStUSAObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 1) {
        mainStUSAObj.attraction.push(element);
        }
    });
        mainStUSAObj.write();
};

mainStUSAObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 1){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    mainStUSAObj.writeName();
};

mainStUSAObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 1) {
                loadImg = 'images/mainstreet2.png';
            }
        });
        $("#mainImg img").removeClass("hide");
        $("#mainImg img").hide().attr("src", loadImg).fadeIn(1000);
         $("#main").css({"width": "680px", "margin-left": "180px", "border-radius": "70%"});
        $("#mk").addClass("hide");
        $("#advImg img").addClass('hide');
        $("#toonImg img").addClass('hide');
         $("#froImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#fantImg img").addClass('hide');
    });
};

mainStUSAObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(mainStUSAObj));
    mainStUSAObj.dropDownEvents();

};

mainStUSAObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

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
