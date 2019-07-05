var os = require('os'); // module os required to access os functions
var colors = require('colors');

function timeFormat () {
    var uptime = os.uptime();
    var hours = (uptime / 3600);
    var rhours = hours.toFixed(0);
    var minutes = (hours - rhours) * 60;
    var rminutes = minutes.toFixed(0);
    var seconds = (minutes - rminutes) * 60;
    var rseconds = seconds.toFixed(0);
    return "Uptime : ".green + rhours + " hour(s) " + rminutes + " minute(s) and " + rseconds + " second(s)." ;
}

exports.print = timeFormat; //export timeFormat function to use in OSinfo.js