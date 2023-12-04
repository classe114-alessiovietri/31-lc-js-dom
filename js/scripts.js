const firstLi = document.querySelector('li');

console.log('firstLi', firstLi, typeof firstLi);

// console.log('firstLi.classList', firstLi.classList, typeof firstLi.classList);

console.log('firstLi.className', firstLi.className, typeof firstLi.className);

firstLi.className += ' bordered';

const secondLi = document.querySelector('li:nth-child(2)');

console.log('secondLi', secondLi, typeof secondLi);

// secondLi.style.color = 'orange';
secondLi.style.backgroundColor = 'orange';

// const allLi = document.querySelectorAll('li');

// console.log('allLi', allLi, typeof allLi);

const thirdLi = document.querySelector('li:last-child');

console.log('thirdLi', thirdLi, typeof thirdLi);

const myButton = document.getElementById('special-button');

let counter = 0;

myButton.addEventListener('click', function() {
    // alert('Hai cliccato myButton');

    counter += 1;

    console.log('Hai cliccato myButton ' + counter + ' volte');

    const nameInput = document.getElementById('name');

    console.log('nameInput', nameInput, typeof nameInput);
    console.log('nameInput.value', nameInput.value, typeof nameInput.value);


    const ageInput = document.getElementById('age');
    const ageInputValue = parseInt(ageInput.value);

    console.log('ageInput', ageInput, typeof ageInput);
    console.log('ageInputValue', ageInputValue, typeof ageInputValue);

    const resultP = document.querySelector('p');

    resultP.innerHTML += `${nameInput.value} | ${ageInputValue}`;
    // resultP.append(`${nameInput.value} | ${ageInputValue}`);

    // resultP.innerHTML += `<span>${nameInput.value} | ${ageInputValue}</span>`;
    // resultP.append(`<span>${nameInput.value} | ${ageInputValue}</span>`);
    // resultP.append(thirdLi);

    if (resultP.classList.contains('bordered')) {
        resultP.classList.remove('bordered');
    }
    else {
        resultP.classList.add('bordered');
    }
    // OPPURE
    // resultP.classList.toggle('bordered');

    nameInput.value = '';
    ageInput.value = '';
});

/* 

    Definizione di una funzione anonima:
    function() {
        ...
    }
    
    // Aggiungere una classe
    resultP.classList.add('bordered');

    // Controllare se un elemento ha una classe
    resultP.classList.contains('bordered');

    Rimuovere una classe
    resultP.classList.remove('bordered');

*/