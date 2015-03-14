/**
* Angular TimeSince filter
*
* Author: Sanjeya Cooray
*
* License: GPL v2 - The project is as is.
*
* It transforms a javascript date to a string like "6 minutes ago","2 days ago", etc
*/	
(function() {
    'use strict';
	
	angular
		.module( 'app' )
		.filter('timesince',function(){
			
			return timeSince; //return this parsing funciton
			
			/** time since implementation */
			function timeSince(date, lang) {
				
				//i18n
			    var langs = {
			        en: {
			            years: " years ago",
			            months: " months ago",
			            days: " days ago",
			            hours: " hours ago",
			            minutes: " minutes ago",
			            seconds: " seconds ago",
			            now: "now"
			        },
			        it: {
			            years: " anni fa",
			            months: " mesi da",
			            days: " giorni fa",
			            hours: " ore fa",
			            minutes: " minuti fa",
			            seconds: " secondi fa",
			            now: "adesso"
			        }
			    };
	
			    var selectedLang = langs.en;
	
			    if ( lang != null && langs[lang]!=null){
			        selectedLang = langs[lang];
			    }
			    
			    if ( date == null)
			    	return "";
			    
			    date = new Date(date);
	
			    var seconds = Math.floor((new Date() - date) / 1000);
			    var interval = Math.floor(seconds / 31536000);
			    if (interval > 1) {
			        return interval + selectedLang.years;
			    }
			    interval = Math.floor(seconds / 2592000);
			    if (interval > 1) {
			        return interval + selectedLang.months;
			    }
			    interval = Math.floor(seconds / 86400);
			    if (interval > 1) {
			        return interval + selectedLang.days;
			    }
			    interval = Math.floor(seconds / 3600);
			    if (interval > 1) {
			        return interval + selectedLang.hours;
			    }
			    interval = Math.floor(seconds / 60);
			    if (interval > 1) {
			        return interval + selectedLang.minutes;
			    }
			    
			    if ( Math.floor(seconds) == 0 ){
			    	return selectedLang.now;
			    }else
			    	return Math.floor(seconds) + selectedLang.seconds;
			}
		});
	
})();
