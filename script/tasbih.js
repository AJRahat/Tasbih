// Counters
const subhanallahCounter = document.getElementById('subhanallahCounter');
const alhamdulillahCounter = document.getElementById('alhamdulillahCounter');
const allahuakberCounter = document.getElementById('allahuakberCounter');

const totalCounter = document.getElementById('totalCount');
// Buttons
const subhanallahIncrimentBtn = document.getElementById('subhanallahIncrimentBtn');
const subhanallahDecrimentBtn = document.getElementById('subhanallahDecrimentBtn');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');
const allahuakberIncrimentBtn = document.getElementById('allahuakberIncrimentBtn');
const allahuakberDecrimentBtn = document.getElementById('allahuakberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');
const countBtn = document.getElementById('countBtn')
// Values
let subCounter = 0;
let alCounter = 0;
let allCounter = 0;

let total = 0;


// Actions
function startBtn() {
    const startBtn = document.getElementById("startBtn");
    const nextPage = document.getElementById("mainPage");
    const totalCount0 = document.getElementById("totalCount0");
    startBtn.classList.add('hidden');
    nextPage.classList.remove('hidden');
    totalCount0.classList.remove('hidden');
}
function doneBtn() {

}
// Subhanallah
subhanallahIncrimentBtn.addEventListener('click', function () {
    if (subCounter === 33) {
        return alert("Now Recite Alhamdulillah 33 Times");
    }
    subCounter++;
    subhanallahCounter.innerText = subCounter;
})
subhanallahDecrimentBtn.addEventListener('click', function () {
    if (subCounter === 0) {
        return alert("Recite Subhanallah 33 Times");
    }
    subCounter--;
    subhanallahCounter.innerText = subCounter;
})

// Alhamdulillah
alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if (alCounter === 33) {
        return alert("Now Recite AllahuAkber 33 Times");
    }
    alCounter++;
    alhamdulillahCounter.innerText = alCounter;
})
alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if (alCounter === 0) {
        return alert("Recite Alhamdilillah 33 Times");
    }
    alCounter--;
    alhamdulillahCounter.innerText = alCounter;
})

// AllahuAkber
allahuakberIncrimentBtn.addEventListener('click', function () {
    if (allCounter === 34) {
        return alert("if 100 Times Finished....Tap Count to keep Record");
    }
    allCounter++;
    allahuakberCounter.innerText = allCounter;
})
allahuakberDecrimentBtn.addEventListener('click', function () {
    if (allCounter === 0) {
        return alert("Recite AllahAkber 34 Times");
    }
    allCounter--;
    allahuakberCounter.innerText = allCounter;
})

// Reset
resetBtn.addEventListener('click', function () {
    zero();
})
// Total Count
countBtn.addEventListener('click', function reuse() {
    if (subCounter === 33 && alCounter === 33 && allCounter === 34) {
        total++;
        totalCounter.innerText = total;
        zero();
        return total;
    }
    else {
        return alert('Please Complete Full Iteration!')
    }
})
// Counted
const doneButun = document.getElementById('doneBtn');

doneButun.addEventListener('click', function () {
    const nextPage = document.getElementById('mainPage');
    const lastPage = document.getElementById('lastPage');
    const total_count = document.getElementById('totalCount0');
    nextPage.classList.add('hidden');
    lastPage.classList.remove('hidden')
    total_count.classList.add('hidden')

    const countedOutput = document.getElementById('lastOutput');
    let re=reuse();
    countedOutput.innerText = re;
})



const startAgainn = document.getElementById("startAgain");
startAgainn.addEventListener('click', function () {
    // const nextPage = document.getElementById('mainPage');
    const ttcount=document.getElementById('totalCount');
    const firstPage = document.getElementById('firstPage');
    firstPage.classList.remove('hidden');
    ttcount.classList.add('hidden');
})