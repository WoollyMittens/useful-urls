/*
	Source:
	van Creij, Maurice (2012). "useful.urls.js: A library of useful functions to ease working with URL query parameters.", version 20121126, http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

(function (useful) {

	// Invoke strict mode
	"use strict";

	// private functions
	var urls = urls || {};

	// retrieves the query parameters from an url
	urls.load = function (url) {
		var a, b, parts = [], data = {}, namevalue, value;
		parts = url.split('#')[0].replace('?', '&').split('&');
		for (a = 1 , b = parts.length; a < b; a += 1) {
			namevalue = parts[a].split('=');
			value = parseFloat(namevalue[1]);
			data[namevalue[0]] = (!isNaN(value)) ? value : namevalue[1];
		}
		return data;
	};

	// stores query parameters to an url
	urls.save = function (url, data) {
		var name;
		// clean the url
		url = url.split('?')[0].split('#')[0];
		// for all name value pairs
		for (name in data) {
			if (data.hasOwnProperty(name)) {
				// add them to the url
				url += '&' + name + '=' + data[name];
			}
		}
		// make sure the first value starts with a ?
		return url.replace('&', '?');
	};

	// replace a value in a query parameter
	urls.replace = function (url, name, value) {
		var old, match, nameValue;
		// if the value is present in the url
		match = new RegExp(name + '=', 'gi');
		if (match.test(url)) {
			// isolate the old value
			old  = url.split('#')[0].split(name + '=')[1].split('&')[0];
			// insert the new value
			return url.replace(name + '=' + old, name + '=' + value);
		} else {
			// add the value instead of replacing it
			nameValue = urls.load(url);
			nameValue[name] = value;
			return urls.save(url, nameValue);
		}
	};

	// public functions
	useful.urls = useful.urls || {};
	useful.urls.load = urls.load;
	useful.urls.save = urls.save;
	useful.urls.replace = urls.replace;

	/*
		useful.polyfills.js
	*/

	// private functions
	var polyfills = polyfills || {};

	// allow console.log
	polyfills.consoleLog = function () {
		if (!window.console) {
			window.console = {};
			window.console.log = function () {
				// if the reporting panel doesn't exist
				var a, b, messages = '', reportPanel = document.getElementById('reportPanel');
				if (!reportPanel) {
					// create the panel
					reportPanel = document.createElement('DIV');
					reportPanel.id = 'reportPanel';
					reportPanel.style.background = '#fff none';
					reportPanel.style.border = 'solid 1px #000';
					reportPanel.style.color = '#000';
					reportPanel.style.fontSize = '12px';
					reportPanel.style.padding = '10px';
					reportPanel.style.position = (navigator.userAgent.indexOf('MSIE 6') > -1) ? 'absolute' : 'fixed';
					reportPanel.style.right = '10px';
					reportPanel.style.bottom = '10px';
					reportPanel.style.width = '180px';
					reportPanel.style.height = '320px';
					reportPanel.style.overflow = 'auto';
					reportPanel.style.zIndex = '100000';
					reportPanel.innerHTML = '&nbsp;';
					// store a copy of this node in the move buffer
					document.body.appendChild(reportPanel);
				}
				// truncate the queue
				var reportString = (reportPanel.innerHTML.length < 1000) ? reportPanel.innerHTML : reportPanel.innerHTML.substring(0, 800);
				// process the arguments
				for (a = 0, b = arguments.length; a < b; a += 1) {
					messages += arguments[a] + '<br/>';
				}
				// output the queue to the panel
				reportPanel.innerHTML = messages + reportString;
			};
		}
	};

	// for immediate use
	polyfills.consoleLog();

}(window.useful = window.useful || {}));
