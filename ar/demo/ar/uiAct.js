var layA = document.querySelector('.layA');
var layB = document.querySelector('.layB');
var layC = document.querySelector('.layC');
var layD = document.querySelector('.layD');
var layE = document.querySelector('.layE');

layA.style.zIndex = '17';
layA.style.opacity = '1';

document.querySelector('.layB .dirBtn').addEventListener('click', function(){
    layB.style.zIndex = '14';
    layB.style.opacity = '0';
    layA.style.zIndex = '17';
    layA.style.opacity = '1';
});

document.querySelector('.layC .dirBtn').addEventListener('click', function(){
    layC.style.zIndex = '14';
    layC.style.opacity = '0';
    layB.style.zIndex = '17';
    layB.style.opacity = '1';
});

document.querySelector('.layE .dirBtn').addEventListener('click', glassStart);
document.querySelector('.layE .dirBtn').addEventListener('click', function(){
    layE.style.zIndex = '14';
    layE.style.opacity = '0';
    layA.style.zIndex = '17';
    layA.style.opacity = '1';
});

document.querySelector('.layA .btn2').addEventListener('click', function(){
    layA.style.zIndex = '14';
    layA.style.opacity = '0';
    layE.style.zIndex = '17';
    layE.style.opacity = '1';
    sts = true;
    console.log(sts);
})

document.querySelector('.layA .btn3').addEventListener('click', function(){
    layA.style.zIndex = '14';
    layA.style.opacity = '0';
    layB.style.zIndex = '17';
    layB.style.opacity = '1';
})

document.querySelector('.layB .btn1').addEventListener('click', function(){
    layB.style.zIndex = '14';
    layB.style.opacity = '0';
    layC.style.zIndex = '17';
    layC.style.opacity = '1';
})

document.querySelector('.layB .btn2').addEventListener('click', function(){
    layB.style.zIndex = '14';
    layB.style.opacity = '0';
    layC.style.zIndex = '17';
    layC.style.opacity = '1';
})

document.querySelector('.layB .btn3').addEventListener('click', function(){
    layB.style.zIndex = '14';
    layB.style.opacity = '0';
    layC.style.zIndex = '17';
    layC.style.opacity = '1';
})
