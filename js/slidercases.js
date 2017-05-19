"use strict";

let slider = {},

    canvas = require("./canvas"),
    splash = require('./splash-page'),
    schedule = require('./schedule');


slider.cases = () => {
    // slider stuff. Setting the slider variable.
    var sliderNum = $("#ticker")[0].value;
    var sliderTime = "";
    // creating the eventTimes object so I can access that data here.
    let sliderAjax = () => {
        var splashObj = {};
        var splashEventTimes = [];
        $.ajax({
                url: "https://disney-94757.firebaseio.com/attractions/.json",
                success: function(data){
                    splashObj.attraction = data;
                    canvas.getCords(splashObj);
                    splashObj.attraction.forEach(function(element) {
                        if (element.times) {
                        splashEventTimes.push(element);
                        }
                    });
                        // Removing children so it doesn't append forever when I append stuff to the slider data.

                    while ($("#sliderEvents")[0].firstChild) {
                        $("#sliderEvents")[0].removeChild($("#sliderEvents")[0].firstChild);
                        // console.log("children removed");
                    }
                    // Cutting up the times in the data to match the times in the switches.
                    splashEventTimes.forEach(function(element){
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

                            if (timesCheckTime === sliderTime){

                                $("#sliderEvents").append(`<a><div class="eventList event-name" value=${element.id}><div><p>${times}</p><p>${element.name}</p></div></a><br><button class="schedule-add btn-xs">Add to Schedule</button></div>`);

                            }
                        });

                    });
                }
            });
    };

    // Setting the slider number to a time and then putting the time as the HTML beneath the slider.
    switch (sliderNum){
        case "1":
            sliderTime = "8:30AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "2":
            sliderTime = "9:00AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "3":
            sliderTime = "9:30AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "4":
            sliderTime = "10:00AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "5":
            sliderTime = "10:30AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "6":
            sliderTime = "11:00AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "7":
            sliderTime = "11:30AM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "8":
            sliderTime = "12:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "9":
            sliderTime = "12:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "10":
            sliderTime = "1:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "11":
            sliderTime = "1:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "12":
            sliderTime = "2:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "13":
            sliderTime = "2:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "14":
            sliderTime = "3:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "15":
            sliderTime = "3:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "16":
            sliderTime = "4:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "17":
            sliderTime = "4:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "18":
            sliderTime = "5:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "19":
            sliderTime = "5:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "20":
            sliderTime = "6:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "21":
            sliderTime = "6:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "22":
            sliderTime = "7:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "23":
            sliderTime = "7:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "24":
            sliderTime = "8:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "25":
            sliderTime = "8:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "26":
            sliderTime = "9:00PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
        case "27":
            sliderTime = "9:30PM";
            $("#inputValue").html(sliderTime);
            sliderAjax();
            break;
    }
};

module.exports = slider;
