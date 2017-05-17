"use strict";


//Sidebar toggle function
console.log("MAIN.JS");

let promise = require("./loader");
let listeners = require("./listeners");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../templates/master-template.hbs");
let Sort = require("./objectSort.js");
let _ = require("lodash");
let modalWindow = require("../templates/modal-window.hbs");
let slider = require("./slidercases");

let mick= $(".mickey");

/// area objects
let mstObj={};
let mainStreetUSA = {};
let adventureLand = {};
let fronteirLand = {};
let libertySqure = {};
let fantasyLand = {};
let tomorrowLand = {};
let cindarellasCastle = {};
let eventTimes = [];







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

    mstObj.attraction.forEach(function(element) {
            if (element.times) {
            eventTimes.push(element);
            }
    });
    console.log("eventTimes", eventTimes);

}
).then (() =>{
    var d = new Date();
    var local = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    var hour = local.slice(0, -6);
    switch (true){
        case hour<10:
            var minute = local.slice(2, -3);
            break;
        case hour>=10:
            minute = local.slice(3, -3);
            break;
    }
    switch (true){
        case minute < 30:
            minute = "00";
            break;
        case minute >= 30:
            minute = 30;
            break;
    }
    var M = local.slice(-2);
    console.log("M", M);    
    var checkTime = hour + ":" + minute + M;
    console.log("checkTime", checkTime);
    $("#timeNow").html(local);

    eventTimes.forEach(function(element){
        element.times.forEach(function(times){
            var timesHour = times.slice(0, -5);
            // console.log("timesHour", timesHour);
            switch (true){
                case timesHour<10:
                    var timesMinute = times.slice(2, -2);
                    break;
                case timesHour>=10:
                    timesMinute = times.slice(3, -2);
                    break;
            }
            switch (true){
                case timesMinute < 30:
                    timesMinute = "00";
                    break;
                case timesMinute >= 30:
                    timesMinute = 30;
                    break;
            }
            var timesM = times.slice(-2);
            var timesCheckTime = timesHour + ":" + timesMinute + timesM;
            // console.log("timesCheckTime", timesCheckTime);

            if (timesCheckTime === checkTime){
                $("#stickItHere").append(`<a href="#" id="stickItHere">${element.name}: ${element.times}</a>`);
            }
        });
        // console.log("element.times", element.times);
        
    });
    console.log("2");
    slider.cases();
    $("#ticker").change(slider.cases);
    
});
console.log(mstObj);

