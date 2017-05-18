"use strict";

let promise = require("./attractory");
let listeners = require("./listeners");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../templates/master-template.hbs");
let Sort = require("./objectSort.js");
let modalWindow = require("../templates/modal-window.hbs");
let homePage = require("./homePage");
let slider = require("./slidercases");


/// area objects
let mstObj={};


let mainLoad = function() {
    promise.loadArea().then(data =>{
        mstObj.area= data;
        console.log('1');
        return promise.loadAttractiontype();
    },
    console.log("")
    ).then(data=>{
        mstObj.type= data;
        console.log('2');
        return promise.loadAttraction();
        },
        console.log('')
    ).then(data=>{
        mstObj.attraction= data;
        console.log('3');
        return promise.loadParkinfo();
        },
        console.log("")
    ).then(data=>{
          mstObj.park= data;
          console.log('4');
        },
        console.log('')
    ).then(() =>{
        Handlebars.registerHelper({eq: function (v1, v2) {
            return v1 === v2;
        }});
        $("#page").html(mainTemplate(mstObj));
        homePage.call();
        listeners.areaSelector();
        listeners.mapSelect();
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



    }).then (() =>{
        // Create Events Array
        let eventTimes = [];
        mstObj.attraction.forEach(function(element) {
                if (element.times) {
                eventTimes.push(element);
                }
        });
        // Get Clock for current time
        console.log("eventTimes", eventTimes);
        var d = new Date();
        var local = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            // Splitting current time into hours and minutes so I can put it back together and match it to the way times look in our firebase data in half hour chunks.
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
            // Posting local time
        $("#timeNow").html(local);
        // Resetting our events list so that it's not appending events forever on various page clicks.
        console.log("first child", $("#stickItHere")[0].firstChild);
        while ($("#stickItHere")[0].firstChild) {
            $("#stickItHere")[0].removeChild($("#stickItHere")[0].firstChild);
            // console.log("child removed");
        }
        console.log("first child", $("#stickItHere")[0].firstChild);
        // Getting into our firebase data times and breaking them up so that I can compare them to the current time in half hour chunks.
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
                // appending out events beneath the clock.
                if (timesCheckTime === checkTime){
                    $("#stickItHere").append(`<div class="eventList">${times}<br>${element.name}</div>`);
                    // console.log("child appended");
                }
            });
            // console.log("element.times", element.times);

        });
        console.log("2");
        // Slider events, checkout slidercases.js for this stuff.
        slider.cases();
        $("#ticker").change(slider.cases);
    });
};

let mickeyBack = function() {
    $('.mickey').click(() => {
        console.log("mickey click");

        // $("#page").html('');
        mainLoad();
        $(document.body).css("background-color", "white");
    });
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
};

module.exports = {mainLoad, mickeyBack};
