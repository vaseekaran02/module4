(function(window){
var hellospeaker={};

var greeting = "hello";
hellospeaker.sayhello = function(names){
    console.log(greeting +" " +names )
}
window.hellospeaker = hellospeaker;
})(window);