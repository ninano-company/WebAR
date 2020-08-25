var layA = document.querySelector('.layA');
var layB = document.querySelector('.layB');
var layC = document.querySelector('.layC');
var layD = document.querySelector('.layD');
var layE = document.querySelector('.layE');

layA.style.zIndex = '17';

document.querySelector('.layB .dirBtn').addEventListener('click', function(){
    layB.style.display = 'none';
    layB.style.zIndex = '14';
    layA.style.display = 'flex';
    layA.style.zIndex = '17';
});

document.querySelector('.layC .dirBtn').addEventListener('click', function(){
    layC.style.display = 'none';
    layC.style.zIndex = '14';
    layB.style.display = 'flex';
    layB.style.zIndex = '17';
});

document.querySelector('.layE .dirBtn').addEventListener('click', glassStart);
document.querySelector('.layE .dirBtn').addEventListener('click', function(){
    layE.style.display = 'none';
    layE.style.zIndex = '14';
    layA.style.display = 'flex';
    layA.style.zIndex = '17';
});

document.querySelector('.layA .btn2').addEventListener('click', function(){
    layA.style.display = 'none';
    layA.style.zIndex = '14';
    layE.style.display = 'flex';
    layE.style.zIndex = '17';
    sts = true;
    console.log(sts);
})

document.querySelector('.layA .btn3').addEventListener('click', function(){
    layA.style.display = 'none';
    layA.style.zIndex = '14';
    layB.style.display = 'flex';
    layB.style.zIndex = '17';
})

document.querySelector('.layB .btn1').addEventListener('click', function(){
    layB.style.display = 'none';
    layB.style.zIndex = '14';
    layC.style.display = 'flex';
    layC.style.zIndex = '17';
})

document.querySelector('.layB .btn2').addEventListener('click', function(){
    layB.style.display = 'none';
    layB.style.zIndex = '14';
    layC.style.display = 'flex';
    layC.style.zIndex = '17';
})

document.querySelector('.layB .btn3').addEventListener('click', function(){
    layB.style.display = 'none';
    layB.style.zIndex = '14';
    layC.style.display = 'flex';
    layC.style.zIndex = '17';
})
