"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let pageHeader = require("../templates/pageHeader.hbs");


let titleData = {};
let toonTownObj = {};

toonTownObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        toonTownObj.filterAttraction(data);
    });

    promise.loadArea()
    .then(data =>{
        toonTownObj.filterArea(data);
    });
};

toonTownObj.filterAttraction = function(data){
    console.log("data", data);
    toonTownObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 8) {
        toonTownObj.attraction.push(element);
        }
    });
        toonTownObj.write();
};

toonTownObj.filterArea = function(data){
    data.forEach(function(element){
        if(element.id === 8){
            titleData = element;
            console.log("adventureLandElement", titleData);
        }
    });
    toonTownObj.writeName();
};
toonTownObj.changeImg = function() {
    promise.loadArea().then(data => {
        var loadImg;
        data.forEach(function(element){
            if(element.id === 8) {
                loadImg = 'images/toontown.jpeg';
            }
        });
        $("#toonImg img").removeClass("hide");
        $("#toonImg img").hide().attr("src", loadImg).fadeIn(1000);
        $("#toon").css({"width": "680px", "margin-left": "180px"});
        $("#mk").addClass("hide");
        $("#advImg img").addClass('hide');
         $("#froImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
         $("#fantImg img").addClass('hide');
    });
};

toonTownObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(toonTownObj));
    toonTownObj.dropDownEvents();

};

toonTownObj.writeName = function(){
    $("#page-header").html();
    $("#page-header").html(pageHeader(titleData));

};

toonTownObj.dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        toonTownObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};

module.exports=toonTownObj;
