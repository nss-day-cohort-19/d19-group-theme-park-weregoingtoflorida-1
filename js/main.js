"use strict";


//Sidebar toggle function
console.log("MAIN.JS");

let promise = require("./loader");
let listeners = require("./listeners");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../templates/master-template.hbs");
let Sort = require("./objectSort.js");
let modalWindow = require("../templates/modal-window.hbs");


let mick = $(".mick");

/// area objects
let mstObj={};
let mainStreetUSA = {};
let adventureLand = {};
let fronteirLand = {};
let libertySqure = {};
let fantasyLand = {};
let tomorrowLand = {};
let cindarellasCastle = {};

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

    mainStreetUSA.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 1) {
            mainStreetUSA.attraction.push(element);
        }
    });

    adventureLand.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 2) {
            adventureLand.attraction.push(element);
        }
    });

    fronteirLand.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 3) {
            fronteirLand.attraction.push(element);
        }
    });

    libertySqure.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 4) {
            libertySqure.attraction.push(element);
        }
    });

    fantasyLand.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 5) {
            fantasyLand.attraction.push(element);
        }
    });

    tomorrowLand.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 6) {
           tomorrowLand.attraction.push(element);
        }
    });

    cindarellasCastle.attraction = [];
    mstObj.attraction.forEach(function(element) {
        if (element.area_id === 7) {
            cindarellasCastle.attraction.push(element);
        }
    });

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
