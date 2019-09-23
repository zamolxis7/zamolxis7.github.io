//Image Switcher Code

let myImage = document.querySelector('img');

myImage.onclick = function() {
let mySrc = myImage.getAttribute('src');
if(mySrc === 'images/dude.jpg') {
    myImage.setAttribute ('src','images/sauron.jpg');
} else {
    myImage.setAttribute ('src','images/dude.jpg');
    }
}

//Personalized Welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }   
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
