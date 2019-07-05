var os = require('os'); // module os required to access os functions
var time = require('../modules/time'); // imported timeFormat function from time.js

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    time.print(); 
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log(time.print()); // we imported timeFormat as exports.print and assign var time to it so thats why we call this function by time.print()
    //console.log('Uptime in seconds: ', uptime, 'sec');
    //console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo; // export getOSinfo function to use in other files

