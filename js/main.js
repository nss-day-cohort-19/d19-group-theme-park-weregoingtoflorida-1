"use strict";


//Sidebar toggle function
console.log("MAIN.JS");

let promise = require("./attractory");
let listeners = require("./listeners");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../templates/master-template.hbs");
let Sort = require("./objectSort.js");
let modalWindow = require("../templates/modal-window.hbs");


let mick= $(".mickey");

/// area objects
let mstObj={};


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
    listeners.areaSelector();
    listeners.frontier();
    listeners.fantasy();
    listeners.tomorrow();
    listeners.adventure();
    listeners.mainstreet();
    listeners.liberty();
    listeners.cinder();
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



});
// console.log(mstObj);
