'use strict'

const btn = document.querySelectorAll('button'),
      divCat = document.querySelector('.div-cat'),
      divDog = document.querySelector('.div-dog'),
      imgCat= document.querySelector('.image-cat'),
      imgDog = document.querySelector('.image-dog');

const basicWidth = window.getComputedStyle(divCat).width.substring(0, 3) * 2,
      smallerDiv = 50;


btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index == 0) {
            divCat.style.width = `${basicWidth-smallerDiv}px`;
            imgCat.style.width = `${basicWidth-200}px`;
            divDog.style.width = `${smallerDiv}px`;
            imgDog.style.visibility = 'hidden';
            imgCat.style.visibility = 'visible';

        }
        if (index == 1) {
            divCat.style.width = `${basicWidth / 2}px`;
            imgCat.style.width = `${basicWidth / 2 - smallerDiv}px`;
            divDog.style.width = `${basicWidth / 2}px`;
            imgDog.style.width = `${basicWidth / 2 - smallerDiv}px`;
            imgDog.style.visibility = 'visible';
            imgCat.style.visibility = 'visible';
        }
        if (index == 2) {
            divCat.style.width = `${smallerDiv}px`;
            divDog.style.width = `${basicWidth-smallerDiv}px`;
            imgDog.style.width = `${basicWidth-200}px`;
            imgDog.style.visibility = 'visible';
            imgCat.style.visibility = 'hidden';
        }
    });
});