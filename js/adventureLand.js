"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let adventureLandObj = {};

adventureLandObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        adventureLandObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        adventureLandObj.filterArea(data);
    });
};

adventureLandObj.filterAttraction = function(data){
    console.log("data", data);
    adventureLandObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 2) {
        adventureLandObj.attraction.push(element);
        }
    });
        adventureLandObj.write();
};

adventureLandObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 2){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    adventureLandObj.writeName();
};
adventureLandObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 2) {
                loadImg = 'images/adventure2.png';
            }
        });
        $("#advImg img").removeClass("hide");
        $("#advImg img").hide().attr("src", loadImg).fadeIn(1000);
        $("#adv").css({"width": "680px", "margin-left": "180px", "border-radius": "70%"});
        $("#mk").addClass("hide");
         $("#froImg img").addClass('hide');
         $("#toonImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
         $("#fantImg img").addClass('hide');
         $("html, body").animate({ scrollTop: 0 }, "slow");
    });
};

adventureLandObj.hoverOver= function(){
        promise.loadArea().then(data => {
        var imgOp;
        data.forEach(function(element){
            if(element.id === 2) {
                imgOp = "0.6";
            }
        });
        $("#adventure").addClass("hover");
    });
};
adventureLandObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(adventureLandObj));
    adventureLandObj.dropDownEvents();

};

adventureLandObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

};

adventureLandObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        adventureLandObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=adventureLandObj;
