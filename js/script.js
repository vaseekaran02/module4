(function(){
    var names=["vaseekaran","john","Jill","Arun","jack","vignesh","Jamie","rahul","Jimmy","Dinesh"];
    for(var i=0;i<names.length;i++)
    {
    var let=names[i].charAt(0);
    if((let==='j') || (let==='J'))
    {
    goodbyespeaker.saygoodbye(names[i]);
    }
    else
    {
    hellospeaker.sayhello(names[i]);
    }
    }
    })();
    
    