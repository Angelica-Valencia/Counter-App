/**
 * Counter app
 */

const counter = document.getElementById("count-el");
const buttonIncrement = document.getElementById('increment-btn');
const buttonSave = document.getElementById('save-btn');
let count = 0;
let saveEL = document.getElementById('save-el');
let message = saveEL.textContent;

console.log(count);


buttonIncrement.addEventListener('click' ,function () {
    addPerson();
})

buttonSave.addEventListener('click', function (){
    saveCount();
})

function addPerson(){
    count += 1;
    counter.innerHTML = count;
    console.log(count);
};

function saveCount(){

    if(message[message.length - 2] == ":"){
        message += count;
    }
    else {
        message += " - " + count;
    }
    count = 0;
    counter.innerHTML = count;
    console.log(count);
    saveEL.innerHTML = message;
};


