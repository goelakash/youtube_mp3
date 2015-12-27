//////////////////////////


var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var listen = 1;


var button = buttons.ActionButton({
  id: "activate",
  label: "Start Listening",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: toggleListen
});

function toggleListen(state) {
    if(listen==0) 
        listen=1;
    else 
        listen=0;
}

//check tabs
var { setInterval } = require("sdk/timers");

setInterval(function() {
  
    suburl = "www.youtube.com/watch"
    for (let tab of tabs){
        if(tab.url.indexOf(suburl)>-1){
            pageWorker = require("sdk/page-worker").Page({
                contentURL: "http://localhost:5000/"+tab.url
            });
            console.log("tab: ",tab.url);
            //interact with panel page
        }
    }
  console.log("\n--------------------------------\n\n");
}, 15000)
//////////////////////////////


