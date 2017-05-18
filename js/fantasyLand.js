"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let fantasyLandObj = {};

fantasyLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        fantasyLandObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        fantasyLandObj.filterArea(data);
    });
};

fantasyLandObj.filterAttraction = function(data){
    console.log("data", data);
    fantasyLandObj.attraction = [];
    data.forEach(function(element) {


        if (element.area_id === 5) {

        fantasyLandObj.attraction.push(element);
        }
    });
        fantasyLandObj.write();
};

fantasyLandObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 5){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    fantasyLandObj.writeName();
};
fantasyLandObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 5) {
                loadImg = 'images/fantasy.jpg';
            }
        });
        $("#fantImg img").removeClass("hide");
        $("#fantImg img").hide().attr("src", loadImg).fadeIn(1000);
         $("#fant").css({"width": "680px", "margin-left": "180px", "border-radius": "70%"});
        $("#mk").addClass("hide");
        $("#advImg img").addClass('hide');
        $("#toonImg img").addClass('hide');
         $("#froImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
    });
};
fantasyLandObj.hoverOver= function(){
        promise.loadArea().then(data => {
        var imgOp;
        data.forEach(function(element){
            if(element.id === 2) {
                imgOp = "0.6";
            }
        });
        $("#fantasy").animate({"opacity": "0.6"});
    });

};

fantasyLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(fantasyLandObj));
    fantasyLandObj.dropDownEvents();

};

fantasyLandObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

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
