
/* TO DO */

let text = document.querySelector(".input-area input");
let add = document.querySelector(".add");
let ol = document.querySelector(".todo-ol");
let hide = document.querySelector(".hide");


add.addEventListener('click', () => {
    let addedList = document.createElement('li');
    addedList.innerHTML = `<span>${text.value}</span> <button class='done'>DONE</button>`;
    ol.appendChild(addedList);
    text.value= ""

    let done = document.querySelectorAll('.done');

    for (i = 0; i < done.length; i++){
        done[i].onclick = function() {
            let parent = this.parentElement;
            ol.removeChild(parent);
        }
    }
})

hide.addEventListener('click', () => {
    document.querySelector(".todo-hidden").classList.toggle('hidden');
    if(hide.innerHTML === "HIDE LIST"){
        hide.innerHTML = "SHOW LIST";
    } else{
        hide.innerHTML = "HIDE LIST";
    }
})


/* EXPENSE TRACKER */

let expenseName = document.querySelector('.expense-input #name')
let expenseDate = document.querySelector('.expense-input #date')
let expenseAmount = document.querySelector('.expense-input #amount')
let addExpense = document.querySelector('.expense__button--add');
let expenseTable= document.querySelector('.expense-table table')

addExpense.addEventListener('click', ()=>{
    if(expenseName.value!="" || expenseDate.value!="" || expenseAmount.value!="" ){
        let expenseRow =document.createElement('tr');
    expenseRow.innerHTML = `<td>${expenseName.value}</td><td>${expenseDate.value}</td><td>${expenseAmount.value+'€'}</td><td><button class="expense-remove">REMOVE</button></td>`;
    expenseTable.appendChild(expenseRow);
    expenseName.value = "";
    expenseDate.value = "";
    expenseAmount.value = "";

    let expenseRemove = document.querySelectorAll('.expense-remove');

    for (i = 0; i < expenseRemove.length; i++){
        expenseRemove[i].onclick = function() {
            let removeRow = this.parentElement.parentElement;
            expenseTable.removeChild(removeRow);
        }
    } 
    }else{
        alert("PLEASE FILL THE EMPTY AREAS!!!")
    }
})


/* NOTE TRACKER */

let notetrackerInput = document.querySelector('#note-input');
let notetrackerBtn = document.querySelector('.notetracker-btn');
let noteContainer = document.querySelector('.note-container');
let hiddenDetails = document.querySelector('.hidden-details');

notetrackerBtn.addEventListener('click', () => {
    let noteBox = document.createElement('div');
    noteBox.innerHTML = `<div class="note-box--text d-column">
                            <h4>Note <span></span></h4>
                            <p class="noteparagraph">${notetrackerInput.value}</p>
                            <button class="view-details">View Details</button>
                        </div> 
                        <div class="note-box--close"><button>X</button></div>`;
    noteBox.classList.add('note-box', 'd-flex')
    noteContainer.appendChild(noteBox);

    let noteBoxCloses = document.querySelectorAll('.note-box--close button');
    for (let i = 0; i < noteBoxCloses.length; i++){
        noteBoxCloses[i].onclick = function() {
            let removeNoteBox = this.parentElement.parentElement;
            noteContainer.removeChild(removeNoteBox);
        }
    } 
    let hiddenDetails = document.querySelector('.hidden-details');
    let detailsP = document.querySelector('.details-p');
    let viewDetails = document.querySelectorAll('.view-details');
    for (let i = 0; i< viewDetails.length; i++){
        viewDetails[i].onclick = function() {
            let detailText = this.previousElementSibling.innerHTML;
            detailsP.innerHTML = detailText;
            hiddenDetails.style.display = 'block';
            hiddenDetails.style.left = '50%';
            hiddenDetails.style.top = '50%';
            hiddenDetails.style.transform = 'translate(-50%, -50%)';
        }
    }

})

let detailsClose = document.querySelector('.details-close');
detailsClose.addEventListener('click', ()=>{
    hiddenDetails.style.display= 'none';
})

/* VOWEL COUNTER */

let vowelCheckBtn = document.querySelector('.vowel-btn');
let vowelInput = document.getElementById('vowel-input');

vowelCheckBtn.addEventListener('click',countVowels);

function countVowels(){
    let vowels = ['a','e','i','o','u'];
    let input = vowelInput.value.split("");
    let counter = 0

    for (let i = 0; i<input.length;i++){
        if (vowels.indexOf(input[i]) != -1){
            counter++;
        }
    }
    alert(counter)
}

/* NAVBAR */

let lionBtn = document.querySelector('.nav-left span');
let navbarList = document.querySelector('.navpart ul');

lionBtn.addEventListener('click', () =>{
    
    navbarList.classList.toggle('active');
    
})

window.addEventListener('resize', ()=>{
        if (window.innerWidth > 1000){
        navbarList.classList.remove('active')
    }
})

/* STOPWATCH */

let timerDisplay = document.querySelector('.timerDisplay');
let start = document.getElementById('startTimer');
let pause = document.getElementById('pauseTimer');
let reset = document.getElementById('resetTimer');
let millisecond = 0, second = 0, minute = 0, hour = 0;
let loop;

start.addEventListener('click', () => {
    loop = setInterval(counter,10)
})

pause.addEventListener('click', () =>{
    clearInterval(loop);
})

reset.addEventListener('click', () =>{
    clearInterval(loop);
    timerDisplay.innerHTML = '00 : 00 : 00 : 000 '

})

function counter(){
    millisecond+= 10;
    if (millisecond == 1000){
        millisecond = 0;
        second++
        if(second == 60){
            second = 0;
            minute++
            if(minute == 60){
                minute = 0;
                hour++
            }
        }
    }


    timerDisplay.innerHTML = `${hour}: ${minute} : ${second} : ${millisecond}`;
}
