"use strict";


//Sidebar toggle function
console.log("MAIN.JS");

let promise= require("./loader");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../templates/master-template.hbs");
// let trialTemplate = require("../templates/master-bitching.hbs");
let tommorowlandTemp = require ("../templates/tommorowland-template.hbs");
let Sort = require("./objectSort.js");
let mstObj={};
let mick= $(".mick");







promise.loadArea().then(data =>{
    mstObj.area= data;
    console.log('1');
    return promise.loadAttractiontype();
},
console.log("error")
).then(data=>{
    mstObj.type= data;
    console.log('2');
    return promise.loadAttraction();
    },
    console.log('error')
).then(data=>{
    mstObj.attraction= data;
    console.log('3');
    return promise.loadParkinfo();
    },
    console.log("error")
).then(data=>{
      mstObj.park= data;
      console.log('4');
    },
    console.log('error')
).then(() =>{
    Handlebars.registerHelper({eq: function (v1, v2) {
        return v1 === v2;
    }});
    $("#page").append(mainTemplate(mstObj));
});
console.log(mstObj);

