"use strict";


let mainTemplate = require("../templates/master-template.hbs");
// let mainOb = require("./main");

// LOCATION LISTENERS
function areaSelector(data) {

    console.log("listeners listening");
    $('.areas').click((event) => {
        // console.log(event);
       switch (event.target.innerText) {
        case 'Adventureland':
        console.log("Adventureland");
        break;
        case 'Fantasyland':
        console.log("fantasy");
        break;
        case 'Frontierland':
        console.log("frontier");
        break;
        case "Cinderella's Castle":
        console.log("Cindys");
        break;
        case 'Tomorrowland':
        console.log("Tomorrowland");
        break;
        case 'Main St. USA':
        console.log("Main");
        break;
        case 'Liberty Square':
        console.log("LIberty");
        break;
    }
    });
}

module.exports = {areaSelector};
