"use strict";


//Sidebar toggle function
console.log("MAIN.JS");

let promise= require("./loader");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../master-template.hbs");
let mstObj={};




$("#page").append(mainTemplate(mstObj));



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
);
console.log(mstObj);

