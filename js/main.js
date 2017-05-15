"use strict";

//Sidebar toggle function
console.log("MAIN.JS");


let Handlebars = require("hbsfy/runtime"),
    mainTemplate = require("../master-template.hbs");




let mainObj = {};

$("#page").append(mainTemplate(mainObj));
