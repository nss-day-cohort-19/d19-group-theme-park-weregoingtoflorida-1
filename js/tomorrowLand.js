"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let tomorrowLandObj = {};

tomorrowLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        tomorrowLandObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        tomorrowLandObj.filterArea(data);
    });
};

tomorrowLandObj.filterAttraction = function(data){
    console.log("data", data);
    tomorrowLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 6) {
        tomorrowLandObj.attraction.push(element);
        }
    });
        tomorrowLandObj.write();
};

tomorrowLandObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 6){
            titleData = element;
        }
    });
    tomorrowLandObj.writeName();
};

tomorrowLandObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 6) {
                loadImg = 'images/tomorrow2.png';
            }
        });
        $("#tomImg img").removeClass("hide");
        $("#tomImg img").hide().attr("src", loadImg).fadeIn(1000);
         $("#tom").css({"width": "680px", "margin-left": "180px", "border-radius": "70%"});
        $("#mk").addClass("hide");
        $("#advImg img").addClass('hide');
        $("#toonImg img").addClass('hide');
         $("#froImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
         $("#fantImg img").addClass('hide');
         $("html, body").animate({ scrollTop: 0 }, "slow");
    });
};
tomorrowLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(tomorrowLandObj));
    tomorrowLandObj.dropDownEvents();

};

tomorrowLandObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

};

tomorrowLandObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
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
