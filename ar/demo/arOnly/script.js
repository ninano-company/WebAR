var bubble = new Array(20);
var bubblex = new Array(20);
var bubbley = new Array(20);
var bubblespeed = new Array(20);
var bubblek = 1;
var bubblelimit = 20 / 4;

function makebubble(){
    for(var i=0; i<bubble.length; i++){
        bubblex[i] = Math.ceil(Math.random()*window.innerWidth - 100);
        bubbley[i] = Math.ceil(Math.random()*window.innerHeight + window.innerHeight);
        bubblespeed[i] = Math.random() - 3;
        if( i < bubblelimit ) { bubblek = 1 }
        else if ( i < bubblelimit * 2 ) { bubblek = 2 }
        else if ( i < bubblelimit * 3 ) { bubblek = 3 }
        else { bubblek = 4 }
        var Tag = "<div class='bubble"+bubblek+"' id='bubble"+i+"'></div>";
        document.write(Tag);
        bubble[i] = document.getElementById('bubble'+i);
        bubble[i].style.width = Math.ceil(Math.random()*50 + 1) + "px";
        bubble[i].style.height = bubble[i].style.width;
    }
}
makebubble();
function floating(){
    for(i = 0; i< bubble.length; i++) {
        bubbley[i] = bubbley[i] + bubblespeed[i];
        if( Math.random() > 0.5 ) {
        bubblex[i] = bubblex[i] + 0.1;
        } else {
        bubblex[i] = bubblex[i] - 0.1;
        }
        console.log(bubbley[i]);
        bubble[i].style.top = bubbley[i] + "px";
        bubble[i].style.left = bubblex[i] + "px";
        if(bubblex[i] >= window.innerWidth - 100){
            bubblex[i]=window.innerWidth - 100
        }
        else if (bubblex[i] < 0 ){
            bubblex[i] = Math.ceil(Math.random()*window.innerWidth - 100);
        }
        if ( bubbley[i] < -50 ){
            bubblex[i] = Math.ceil(Math.random()*window.innerWidth - 100);
            bubbley[i] = Math.ceil(Math.random()*window.innerHeight + window.innerHeight);
            bubbley[i] = bubbley[i] + bubblespeed[i];
        }
    }
    let floatBub = setTimeout(floating,10);
}