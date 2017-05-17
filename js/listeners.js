"use strict";


let tomorrowLand = require("./tomorrowLand");
let adventureLand = require("./adventureLand");
let fantasyLand = require("./fantasyLand");
let libertySquare = require("./libertySquare");
let mainStUSA = require("./mainStUSA");
let cindys = require('./cindys');
let frontierLand = require("./frontierLand");
let mstObj = require("./main");
let modalWindow = require("../templates/modal-window.hbs");
// let mainOb = require("./main");

// LOCATION LISTENERS
function areaSelector(data) {

    console.log("listeners listening");
    $('.areas').click((event) => {
        // console.log(event);
       switch (event.target.innerText) {
        case 'Adventureland':
        console.log("Adventureland");
        adventureLand.call();
        dropDownEvents();
        break;
        case 'Fantasyland':
        console.log("fantasy");
        fantasyLand.call();
        dropDownEvents();
        break;
        case 'Frontierland':
        console.log("frontier");
        frontierLand.call();
        dropDownEvents();
        break;
        case "Cinderella's Castle":
        console.log("Cindys");
        cindys.call();
        dropDownEvents();
        break;
        case 'Tomorrowland':
        console.log("Tomorrowland");
        tomorrowLand.call();
        dropDownEvents();
        break;
        case 'Main St. USA':
        console.log("Main");
        mainStUSA.call();
        dropDownEvents();
        break;
        case 'Liberty Square':
        console.log("LIberty");
        libertySquare.call();
        dropDownEvents();
        break;
    }
    });
}

var dropDownEvents = function(){
    $(".potato").on("click",function(event){
        console.log(event);
        var modal_data = {};
        var target_id = event.currentTarget.value;
        mstObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        console.log(modal_data);
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};
var frontier= function(){
    $("#frontier").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        frontierLand.call();
        dropDownEvents();
    });
};
var fantasy= function(){
    $("#fantasy").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        fantasyLand.call();
        dropDownEvents();
    });
};
var cinder= function(){
    $("#cinder").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        cindys.call();
        dropDownEvents();
    });
};
var tomorrow= function(){
    $("#tomorrow").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        tomorrowLand.call();
        dropDownEvents();
    });
};
var adventure= function(){
    $("#adventure").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        adventureLand.call();
        dropDownEvents();
    });
};
var mainstreet= function(){
    $("#mainstreet").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        mainStUSA.call();
        dropDownEvents();
    });
};
var liberty= function(){
    $("#liberty").on('click', (event)=>{
        event.preventDefault();
        console.log('test');
        libertySquare.call();
        dropDownEvents();
    });
};


module.exports = {areaSelector, dropDownEvents, frontier,liberty,mainstreet,adventure,tomorrow,fantasy,cinder};


















