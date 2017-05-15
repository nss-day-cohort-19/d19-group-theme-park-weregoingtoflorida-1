"use strict";

//Sidebar toggle function
console.log("MAIN.JS");
    $("#menu-toggle").click(function(e) {
        $("#wrapper").toggleClass("toggled");
    });

let Handlebars = require("hbsfy/runtime"),
    mainTemplate = require("../master-template.hbs");




let mainObj = {};

$("#page").append(mainTemplate(mainObj));
