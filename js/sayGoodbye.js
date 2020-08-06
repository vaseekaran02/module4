(function(window){
    var goodbyespeaker={};
    
    var greeting = "goodbye";
    goodbyespeaker.saygoodbye = function(names){
        console.log(greeting +" "+names )
    }
    window.goodbyespeaker = goodbyespeaker;
    })(window);