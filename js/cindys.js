"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let cindysObj = {};

cindysObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        cindysObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        cindysObj.filterArea(data);
    });
};

cindysObj.filterAttraction = function(data){
    cindysObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 7) {
        cindysObj.attraction.push(element);
        }
    });
        cindysObj.write();
};

cindysObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 7){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    cindysObj.writeName();
};

cindysObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 7) {
                loadImg = 'images/cind.jpg';
            }
        });
        $("#cinImg img").removeClass("hide");
        $("#cinImg img").hide().attr("src", loadImg).fadeIn(1000);
         $("#cin").css({"width": "680px", "margin-left": "180px", "border-radius": "70%"});
        $("#mk").addClass("hide");
         $("#advImg img").addClass('hide');
         $("#toonImg img").addClass('hide');
         $("#froImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
         $("#fantImg img").addClass('hide');
         $("html, body").animate({ scrollTop: 0 }, "slow");
    });
};

cindysObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(cindysObj));
    cindysObj.dropDownEvents();

};

cindysObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

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
