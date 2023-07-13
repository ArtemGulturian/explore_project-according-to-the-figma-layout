'use strict'

const pressBookNow = document.querySelector('#bookNow');

let i = 0;
const del = (e) => {
    alert('Somthing wrong');
    i++;
    if (i == 1) {
        pressBookNow.removeEventListener('click', del);
    }
};

pressBookNow.addEventListener('click', del);
//---------------------------------
