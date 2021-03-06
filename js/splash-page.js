"use strict";

let promise = require("./attractory");
let listeners = require("./listeners");
let Handlebars = require("hbsfy/runtime");
let mainTemplate = require("../templates/master-template.hbs");
let modalWindow = require("../templates/modal-window.hbs");
let homePage = require("./homePage");
let slider = require("./slidercases");
let canvas = require("./canvas");
let schedule = require('./schedule');



/// area objects
let mstObj={};


//Loads all 4 ajax calls and pushes that data to mstObj
let mainLoad = function() {
    promise.loadArea().then(data =>{
        mstObj.area= data;
        return promise.loadAttractiontype();
    },
    console.log("")
    ).then(data=>{
        mstObj.type= data;
        return promise.loadAttraction();
        }
    ).then(data=>{
        mstObj.attraction= data;
        return promise.loadParkinfo();
        }
    ).then(data=>{
          mstObj.park= data;
        }
    ).then(() =>{
        //Helper to let handlebars compare two variables
        Handlebars.registerHelper({eq: function (v1, v2) {
            return v1 === v2;
        }});
        //loads masObj into our page handlebars template and attaches event listeners
        $("#page").html(mainTemplate(mstObj));
        homePage.call();
        listeners.areaSelector();
        listeners.mapSelect();
        listeners.mapHover();
        //gets data and calls modal window
        $(".potato").on("click",function(event){
            var modal_data = {};
            var target_id = event.currentTarget.value;
            mstObj.attraction.forEach(function(element){
                if (element.id === target_id){
                    modal_data = element;
                }
            });
            // $("#myModal").html();
            $("#myModal").html(modalWindow(modal_data));
        });

    }).then (() =>{

        canvas.getCords(mstObj);
        // Create Events Array
        let eventTimes = [];
        mstObj.attraction.forEach(function(element) {
                if (element.times) {
                eventTimes.push(element);
                }
        });

        // Get Clock for current time
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

        //Am or Pm
        var M = local.slice(-2);

        //Puts back together so we can compare with time in database
        var checkTime = hour + ":" + minute + M;

            // Posting local time
        $("#timeNow").html(local);

        // Resetting our events list so that it's not appending events forever on various page clicks.
        while ($("#stickItHere")[0].firstChild) {
            $("#stickItHere")[0].removeChild($("#stickItHere")[0].firstChild);
            // console.log("child removed");
        }
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

                // appending our events beneath the clock.
                if (timesCheckTime === checkTime){
                console.log("log time", timesCheckTime, checkTime);
                    $("#stickItHere").append(`<a><div class="eventList event-name" value=${element.id}><div><p>${times}</p><p>${element.name}</p></div></a><button class="schedule-add btn-xs">Add to Schedule</button></div>`);
                }
            });
        });

        // Slider events, checkout slidercases.js for this stuff.
        slider.cases();
        $("#ticker").change(slider.cases);
        $('.sidebar-nav').click(schedule.addToSchedule);
        $('#schedule').click(schedule.viewSchedule);

    });
};

let mickeyBack = function() {
    $('.mickey').click(() => {
        mainLoad();
        $(document.body).css("background-color", "white");
         $("#mk").removeClass("hide");
         $("#toonImg img").addClass('hide');
         $("#advImg img").addClass('hide');
         $("#froImg img").addClass('hide');
         $("#cinImg img").addClass('hide');
         $("#tomImg img").addClass('hide');
         $("#libImg img").addClass('hide');
         $("#mainImg img").addClass('hide');
         $("#fantImg img").addClass('hide');

        $("#nav1").css("background-color", "rgba(225,225,225,.7)");

    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
};

module.exports = {mainLoad, mickeyBack};
