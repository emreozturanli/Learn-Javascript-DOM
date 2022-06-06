
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
    clearInterval(loop);
    loop = setInterval(counter,10)
})

pause.addEventListener('click', () =>{
    clearInterval(loop);
})

reset.addEventListener('click', () =>{
    clearInterval(loop);
    millisecond = 0, second = 0, minute = 0, hour = 0;
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

/* BG-GENERATOR */

const hexList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const bgSection = document.getElementById('bg-generator');
const bgGeneratorBtn = document.querySelector('.bgGenBtn');

bgGeneratorBtn.addEventListener('click', changeBg);

function changeBg(){

    let hex = '#';
    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * hexList.length);
        hex += hexList[randomIndex];
    }

    bgSection.style.backgroundColor = hex;
}

/* DIGITAL CLOCK */

window.setInterval(function clock(){
    let clock = new Date();
    let clockHour = document.querySelector('.hour');
    let clockMinute = document.querySelector('.minute');
    let clockSecond = document.querySelector('.second');

    clockHour.innerHTML= clock.getHours();
    clockMinute.innerHTML= clock.getMinutes();
    clockSecond.innerHTML= clock.getSeconds();

},0);


/* DIAMOND */

const diamondInput = document.getElementById('diamondInput');
const displayDiamond = document.querySelector('.displayDiamond');

diamondInput.addEventListener('change',() =>{

    let n = diamondInput.value;
    
    console.log(n);
    displayDiamond.innerHTML = ''

    diamondGenerator(n)
    
})

function diamondGenerator(n){
    for(let i = 0; i<n; i++){
        let line ='';
        for(let j = 0; j <(n*2)-1;j++){
            if(j == (n-(i+1)) || j == (i+(n-1))){
                line += '*'
            }else{
                line += ' ';
            }
        }
        console.log(line);
        displayDiamond.innerHTML += line +'<br>'
    } 
    for(let i = 0; i<n-1; i++){
        let secLine ='';
        for(let j = 0; j <(n*2)-1;j++){
            if(j == (i+1) || j == (2*n-2)-(i+1)){
                secLine+= '*'
            }else{
                secLine+= ' ';
            }
        }
        console.log(secLine);
        displayDiamond.innerHTML += secLine +'<br>'
    } 
}

/* REGISTRATION */

const students = [
'C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack'
] 

const regisTable = document.querySelector('#registration table');

students.forEach((student)=>{
    const[firstPart, location, path] = student.split(',');
    const [no, fullName] = firstPart.split('-');
    const [fname, lname] = fullName.trim().split(' '); 
    
    let row = document.createElement('tr');
    row.innerHTML= `<td>${no.trim()}</td> <td>${fname}</td> <td>${lname}</td> <td>${location.trim()}</td> <td>${path.trim()}</td>`
    regisTable.appendChild(row);
})