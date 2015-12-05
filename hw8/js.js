function changeColor(){
    elem=document.getElementById('lights');
    var i=0;
    timerId=setInterval(function tick(){
        
        var node=elem.childNodes[i];
        document.getElementsByClassName("white")[i].setAttribute("style", "background: "+document.getElementsByClassName("white")[i].id);        
        if(i!=0){document.getElementsByClassName("white")[i-1].setAttribute("style", "background: white");
        } else {document.getElementsByClassName("white")[i+2].setAttribute("style", "background: white"); }
        
        if(i==2){ i=-1;}
        i++;
        
    }, 5000);   
}

function stop(){
    clearInterval(timerId)
}
