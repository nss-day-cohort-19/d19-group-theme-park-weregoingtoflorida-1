"use strict";


let tomorrowLand = require("./tomorrowLand");
let adventureLand = require("./adventureLand");
let fantasyLand = require("./fantasyLand");
let libertySquare = require("./libertySquare");
let mainStUSA = require("./mainStUSA");
let cindys = require('./cindys');
let frontierLand = require("./frontierLand");
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
        break;
        case 'Fantasyland':
        console.log("fantasy");
        fantasyLand.call();
        break;
        case 'Frontierland':
        console.log("frontier");
        frontierLand.call();
        break;
        case "Cinderella's Castle":
        console.log("Cindys");
        cindys.call();
        break;
        case 'Tomorrowland':
        console.log("Tomorrowland");
        tomorrowLand.call();
        break;
        case 'Main St. USA':
        console.log("Main");
        mainStUSA.call();
        break;
        case 'Liberty Square':
        console.log("LIberty");
        libertySquare.call();
        break;
    }
    });
}

module.exports = {areaSelector};
