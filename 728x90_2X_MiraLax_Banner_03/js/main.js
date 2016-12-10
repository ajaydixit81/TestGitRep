var _btnExit = document.getElementById('btn-exit');
var stopWatch = new Date().getTime();
//window.onload = function() { Enabler.isInitialized() ? politeload() : Enabler.addEventListener( studio.events.StudioEvent.INIT, politeload ); }
window.onload = function() {initEB();}

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, politeload);
    } else {
        politeload();
    }
}


function politeload(){
    pageLoadedHandler();
    checkGreensockReady();
    //Enabler.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js')
    //Enabler.isPageLoaded() ? checkGreensockReady() : Enabler.addEventListener( studio.events.StudioEvent.PAGE_LOADED, checkGreensockReady );
    checkGreensockReady();
}


function pageLoadedHandler() {
        loadJsCssfile("css/style.css", "css");
        
      }
      //Loading the CSS & JS dynamically
    function loadJsCssfile(filename, filetype) {
        if (filetype == "css") {
          var fileref = document.createElement("link");
          fileref.setAttribute("rel", "stylesheet");
          fileref.setAttribute("type", "text/css");
          fileref.setAttribute("href", filename);
        } else if (filetype == "js") {
          var fileref = document.createElement("script");
          fileref.setAttribute("type", "text/javascript");
          fileref.setAttribute("src", filename);
        }
        document.getElementsByTagName("head")[0].appendChild(fileref);
}



function checkGreensockReady() { window.TimelineMax ? politeInit() : setTimeout( checkGreensockReady, 10 ); }

//function politeInit() { Enabler.isVisible() ? init() : Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,init); }
function politeInit() {init();}

function init(){
    _btnExit.addEventListener('click', clickHandler);
    initAnimations();
}

function initAnimations(){
    var _tt = new TimelineMax();
    _tt
 .to('#wavy_lines1',.01, {opacity:1, onStart:arrowDown1})
   .staggerTo('.copy1', 3, {scale:1, opacity:1, ease:Back.easeOut}, 0.2, "+=.5")
    .to('#scene2', .75, {top:0, ease:Power2.easeOut}, "+=1")
   .to('#miraLax_logo', .75, {top:5, ease:Power2.easeOut}, "-=.75")
   .to('#scene1', .01, {opacity:0, ease:Power2.easeOut, onStart:arrowDown2})
    .staggerTo('.copy2', 2, {scale:1, opacity:1, ease:Back.easeOut}, 0.2, "+=1.3")
    .to('.copy2', 2, {opacity:0, ease:Back.easeOut}, 8.2)
    .to('#lightBlueArrow',2,{opacity:0}, 8.2)
    .to('#copy2e', 2, {opacity:1, ease:Back.easeOut}, 8.3)
    
    .to(['#scene2', '#miraLax_logo'], 0.25, {opacity:0, ease:Power2.easeOut})
    .set('#miraLax_logo', {top:5,left:26, scale:1})
    .to(['#miraLax_logo', '#disclaimer2'], .5, {opacity:1, ease:Power2.easeOut}, "final")

    .to('#footer', .5, {top:0, ease:Power2.easeOut}, "final")
    .to('#shimmer', 1.5, {left:220, ease:Power2.easeOut}, "+=1");
}

function arrowDown1(){
    var _tt2 = new TimelineMax({repeat:0});
    _tt2
    .to('#pinkArrow',2.5,{ top:0, onStart:chevronShake}, "+=.5")
    /*.to('#pinkArrow',2.5,{ top:150, onStart:chevronShake}, "+=.5")*/
    /*.to('#pinkArrow',2,{opacity:0}, "-=1")*/
    .set('#pinkArrow',{opacity:1})
}

function chevronShake(){
    var _tt3 = new TimelineMax();
    //console.log('shake');
   // var delayTime = 0;
    var rndNumber1
    var chevArray = ['#chevron1', '#chevron2', '#chevron3', '#chevron4', '#chevron5', '#chevron6', '#chevron7', '#chevron8'];
    for (i = 0; i < chevArray.length; i++) {

        rndNumber1 = (Math.random() * .75) + 0;
        rndNumber2 = Math.floor((Math.random() * 3) + 1);
        //console.log(rndNumber1)
        //console.log(rndNumber2)
        _tt3
        .to(chevArray[i],.4,{delay:rndNumber1, x:"-="+rndNumber2, y:"-="+rndNumber2, yoyo:true, repeat:-1, }, "power1");
       /* .to('.chevronLeft',.25,{y:"-=10", yoyo:true, repeat:-1, }, "rough")
        .to('.chevronRight',.25,{x:"+=5", yoyo:true, repeat:-1}, "bounce")*/

    }
}

function drops(){

}

function arrowDown2(){
    var _tt4 = new TimelineMax({repeat:-1});
    _tt4
    .staggerTo('.drop', 2, {scale:1, opacity:1, ease:Back.easeOut}, 0.2, "arrow2")
    .to('.drop',10,{top:'+=200'}, "arrow2")
    .to('#lightBlueArrow',2.5,{top:0}, "arrow2")
    .to('#lightBlueArrow',2.5,{ top:150}, "+=.5")
    .staggerTo('.drop', 2, {opacity:0, ease:Back.easeOut}, 0.2, "-=1")
    .to('#lightBlueArrow',2,{opacity:0}, "-=2")
    .set('#lightBlueArrow',{opacity:1})
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ TweenMax.to('#copy-1',.5,{ opacity:.5 })});
    _btnExit.addEventListener('mouseout', function(){ TweenMax.to('#copy-1',.5,{ opacity:1 })});
}

function clickHandler(){
    console.log("Click_Banner");
    //Enabler.exit('ClickTag');
    EB.clickthrough();
}

function returnTimer() {
    stopWatch = ((new Date().getTime()) - stopWatch) * .001;
    console.log(stopWatch + " seconds");
}
