// Mixpanel token : f7e67a7dc427afe3627afb3abdca1188
// Google Analytics token : UA-69226331-1
analytics.initialize({
    'Google Analytics': {
       trackingId: 'UA-69226331-1'
     },
     'Mixpanel': {
       token: 'f7e67a7dc427afe3627afb3abdca1188',
       people: true
     }
  });

analytics.page();

// Footer clicks tracking
analytics.trackLink($("#bolddata-logo"), 'Clicked Company link');
analytics.trackLink($("#social-btn-fb"), 'Clicked Facebook link');
analytics.trackLink($("#social-btn-twitter"), 'Clicked Twitter link');

// Tab clicks tracking
analytics.trackLink($("#overview-tab-action"), 'Clicked Overview Tab');
analytics.trackLink($("#detailed-tab-action"), 'Clicked Detailed Tab');
analytics.trackLink($("#about-tab-action"), 'Clicked About Tab');
var message=function(){/*

██████╗  ██████╗ ██╗     ██████╗     ██████╗  █████╗ ████████╗ █████╗
██╔══██╗██╔═══██╗██║     ██╔══██╗    ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
██████╔╝██║   ██║██║     ██║  ██║    ██║  ██║███████║   ██║   ███████║
██╔══██╗██║   ██║██║     ██║  ██║    ██║  ██║██╔══██║   ██║   ██╔══██║
██████╔╝╚██████╔╝███████╗██████╔╝    ██████╔╝██║  ██║   ██║   ██║  ██║
╚═════╝  ╚═════╝ ╚══════╝╚═════╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
                                          The Big Data Company.

Want to play with gigantic amount of data and build awesome stuff like this one? Join us. jobs@bolddata.net
*/}.toString().slice(14,-3);console.info(message);