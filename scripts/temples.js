
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    if (hamButton.classList.contains('open')) {
        hamButton.textContent = 'X';
    } else {
        hamButton.textContent = '☰';
    }
});


const yearSpan = document.querySelector('#currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedPara = document.querySelector('#lastModified');
lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;