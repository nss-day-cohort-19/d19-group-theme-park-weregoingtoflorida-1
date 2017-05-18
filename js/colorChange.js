"use strict";

let colorChange = {};
let promises = require("./attractory.js");



colorChange.mainStreet = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 1) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
		$("#nav2").css("background-color", colorBackground);
		console.log("colorBackground", colorBackground);
	});
};

colorChange.adventureLand = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 2) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
	});
};

colorChange.frontierLand = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 3) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
	});
};
colorChange.libertySquare = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 4) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
	});
};

colorChange.fantasyLand = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 5) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
	});
};

colorChange.tomorrowLand = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 6) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
	});
};

colorChange.cindarellasCastle = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 7) {
				colorBackground = element.colorTheme;
			}
		});
		$("#nav1").css("background-color", colorBackground);
	});
};
colorChange.toonTown = function() {
	promises.loadArea().then(data => {
		var colorBackground = "";
		data.forEach(function(element){
			if(element.id === 8) {
				colorBackground = element.colorTheme;
			}
		});
		$(document.body).css("background-color", colorBackground);
		console.log("colorBackground",colorBackground);
	});
};

module.exports = colorChange;
