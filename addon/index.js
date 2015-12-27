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

// tabs.on("ready",function(tab){
//     if(listen==1)
//         console.log('tab is loaded  ',tab.title,tab.url);
// });

var { setInterval } = require("sdk/timers");

setInterval(function() {
  for (let tab of tabs)
      console.log(tab.url);
  console.log("\n\n--------------------------------\n\n");
}, 30000)