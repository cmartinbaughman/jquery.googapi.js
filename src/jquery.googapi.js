/*
*	@Author: CM Baughman
*   @Script: jquery.googfeeds.js
*   @Description: Easily dynamically load the Google Feeds Api
*	@param string api: the api you want
*	@param integer version: the version
*   @param integer timeout: value in milliseconds to wait for timeout.
*	@param(optional) object the optional third parameters object
*/
;(function($, window, document, undefined){
	$.fn.googapi = function(api, version, timeout) {
		$.wait = function(time) {
  			return $.Deferred(function(dfd) {
    			setTimeout(dfd.resolve, time);
			});
		};
		
		var sc = document.createElement("script");
		sc.src = "https://www.google.com/jsapi";
		sc.type = "text/javascript";
		$('head').append(sc);

		$.wait(timeout).then(function() {
			if(window.google === undefined) {
				(arguments[3] === undefined) ? 
google.load(api, version) : google.load(api, version, arguments[3]);
			}
		});
		return this;
	}
})(jQuery, window, document);

