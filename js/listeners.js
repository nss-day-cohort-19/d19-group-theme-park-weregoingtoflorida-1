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
let colorChange = require("./colorChange");
let mainTemplate = require("../templates/master-template.hbs");
let canvas = require("./canvas");

// let mainOb = require("./main");

// LOCATION LISTENERS
var areaSelector = function(data) {

    $('.areas').click((event) => {
        // console.log(event);
       switch (event.target.innerText) {
        case 'Adventureland':
        adventureLand.call();
        dropDownEvents();
        colorChange.adventureLand();
        break;
        case 'Fantasyland':
        fantasyLand.call();
        dropDownEvents();
        colorChange.fantasyLand();
        break;
        case 'Frontierland':
        frontierLand.call();
        dropDownEvents();
        colorChange.frontierLand();
        break;
        case "Cinderella's Castle":
        cindys.call();
        dropDownEvents();
        colorChange.cindarellasCastle();
        break;
        case 'Tomorrowland':
        tomorrowLand.call();
        dropDownEvents();
        colorChange.tomorrowLand();
        break;
        case 'Main St. USA':
        mainStUSA.call();
        dropDownEvents();
        colorChange.mainStreet();
        break;
        case 'Liberty Square':
        libertySquare.call();
        dropDownEvents();
        colorChange.libertySquare();
        break;
        }
    });
};

var dropDownEvents = function(){
    $(".potato").on("click",function(event){
        var modal_data = {};
        var target_id = event.currentTarget.value;
        mstObj.attraction.forEach(function(element){
            if (element.id === target_id){
                modal_data = element;
            }
        });
        $("#myModal").html();
        $("#myModal").html(modalWindow(modal_data));
    });
};



var mapSelect = function() {

    console.log("listeners listening");
    $('#Map').on("click",(event) => {
       switch (event.target.id) {
        case 'adventure':
        adventureLand.call();
        dropDownEvents();
        colorChange.adventureLand();
        event.preventDefault();
        break;
        case 'fantasy':
        fantasyLand.call();
        dropDownEvents();
        colorChange.fantasyLand();
        event.preventDefault();
        break;
        case 'frontier':
        frontierLand.call();
        dropDownEvents();
        colorChange.frontierLand();
        event.preventDefault();
        break;
        case "cinder":
        cindys.call();
        dropDownEvents();
        colorChange.cindarellasCastle();
        event.preventDefault();
        break;
        case 'tomorrow':
        tomorrowLand.call();
        dropDownEvents();
        colorChange.tomorrowLand();
        event.preventDefault();
        break;
        case 'mainstreet':
        mainStUSA.call();
        dropDownEvents();
        colorChange.mainStreet();
        event.preventDefault();
        break;
        case 'liberty':
        libertySquare.call();
        dropDownEvents();
        event.preventDefault();
        colorChange.libertySquare();
        break;
    }
    });
};

module.exports = {areaSelector, dropDownEvents, mapSelect};




















