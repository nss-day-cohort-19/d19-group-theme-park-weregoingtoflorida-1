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
let toonTown= require('./toontown');
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
        colorChange.adventureLand();
        adventureLand.changeImg();
        break;
        case 'Toon Town':
        console.log("fantasy");
        toonTown.call();
        dropDownEvents();
        colorChange.toonTown();
        toonTown.changeImg();
        break;
        case 'Fantasyland':
        console.log("fantasy");
        fantasyLand.call();
        dropDownEvents();
        colorChange.fantasyLand();
        fantasyLand.changeImg();
        break;
        case 'Frontierland':
        console.log("frontier");
        frontierLand.call();
        dropDownEvents();
        colorChange.frontierLand();
        frontierLand.changeImg();
        break;
        case "Cinderella's Castle":
        console.log("Cindys");
        cindys.call();
        dropDownEvents();
        colorChange.cindarellasCastle();
        cindys.changeImg();
        break;
        case 'Tomorrowland':
        console.log("Tomorrowland");
        tomorrowLand.call();
        dropDownEvents();
        colorChange.tomorrowLand();
        tomorrowLand.changeImg();
        break;
        case 'Main St. USA':
        console.log("Main");
        mainStUSA.call();
        dropDownEvents();
        colorChange.mainStreet();
        mainStUSA.changeImg();
        break;
        case 'Liberty Square':
        console.log("LIberty");
        libertySquare.call();
        dropDownEvents();
        colorChange.libertySquare();
        libertySquare.changeImg();
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



function mapSelect() {

    console.log("listeners listening");
    $('#Map').on("click",(event) => {
         console.log(event.target);
       switch (event.target.id) {
        case 'adventure':
        console.log("Adventureland");
        adventureLand.call();
        dropDownEvents();
        colorChange.adventureLand();
        adventureLand.changeImg();
        event.preventDefault();
        break;
        case 'toon':
        console.log("fantasy");
        toonTown.call();
        dropDownEvents();
        colorChange.toonTown();
        toonTown.changeImg();
        break;
        case 'fantasy':
        console.log("fantasyLand");
        fantasyLand.call();
        dropDownEvents();
        colorChange.fantasyLand();
        fantasyLand.changeImg();
        event.preventDefault();
        break;
        case 'frontier':
        console.log("frontierLand");
        frontierLand.call();
        dropDownEvents();
        colorChange.frontierLand();
        frontierLand.changeImg();
        event.preventDefault();
        break;
        case "cinder":
        console.log("Cindys");
        cindys.call();
        dropDownEvents();
        colorChange.cindarellasCastle();
        cindys.changeImg();
        event.preventDefault();
        break;
        case 'tomorrow':
        console.log("Tomorrowland");
        tomorrowLand.call();
        dropDownEvents();
        colorChange.tomorrowLand();
        tomorrowLand.changeImg();
        event.preventDefault();
        break;
        case 'mainstreet':
        console.log("Main");
        mainStUSA.call();
        dropDownEvents();
        colorChange.mainStreet();
        mainStUSA.changeImg();
        event.preventDefault();
        break;
        case 'liberty':
        console.log("Liberty");
        libertySquare.call();
        dropDownEvents();
        event.preventDefault();
        libertySquare.changeImg();
        colorChange.libertySquare();
        break;
    }
    });
}

function mapHover(){
     $('#Map').on("mouseover",(event) => {
         console.log(event.target);
       switch (event.target.id) {
        case 'adventure':
        console.log("Adventureland");
        adventureLand.hoverOver();
        break;
        case 'frontier':
        console.log("frontierLand");
        adventureLand.hoverOver();
        break;
        case 'fantasy':
        console.log("fantasyLand");
        fantasyLand.hoverOver();
        break;
    }
    });
}

module.exports = {areaSelector, dropDownEvents, mapSelect, mapHover};




















