"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let frontierLandObj = {};

frontierLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        frontierLandObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        frontierLandObj.filterArea(data);
    });
};

frontierLandObj.filterAttraction = function(data){
    frontierLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 3) {
        frontierLandObj.attraction.push(element);
        }
    });
        frontierLandObj.write();
};

frontierLandObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 3){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    frontierLandObj.writeName();
};

frontierLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(frontierLandObj));
    frontierLandObj.dropDownEvents();

};
frontierLandObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 3) {
                loadImg = 'images/frontier2.png';
            }
        });
        $("#froImg img").removeClass("hide");
        $("#froImg img").hide().attr("src", loadImg).fadeIn(1000);
         $("#fro").css({"width": "680px", "margin-left": "180px", "border-radius": "70%"});
        $("#mk").addClass("hide");
         $("#advImg img").addClass('hide');
         $("#toonImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
         $("#fantImg img").addClass('hide');
         $("html, body").animate({ scrollTop: 0 }, "slow");
    });
};
frontierLandObj.hoverOver= function(){
        promise.loadArea().then(data => {
        var imgOp;
        data.forEach(function(element){
            if(element.id === 2) {
                imgOp = "0.6";
            }
        });
        $("#frontier").css({"opacity": "0.6"});
    });

};

frontierLandObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

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
