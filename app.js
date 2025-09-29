let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let backBtn = document.getElementById('back');
let seeMoreBtns = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

prevBtn.onclick = function(){
    showSlider('prev');
}
nextBtn.onclick = function(){
    showSlider('next');
}
let unAccept;
const showSlider = (type) => {
    nextBtn.style.pointerEvents = 'none';
    nextBtn.style.pointerEvents = 'none';

    carousel.classList.remove('next','prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }
    else{
        i = items.length - 1;
        listHTML.prepend(items[i]);
        carousel.classList.add('prev');
    }

    unAccept = setTimeout(() =>{
        nextBtn.style.pointerEvents = 'auto';
        nextBtn.style.pointerEvents = 'auto';
    },2000)
}

seeMoreBtns.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetail')
    }
})

backBtn.onclick = function(){
    carousel.classList.remove('showDetail');
}