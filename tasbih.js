// Counters
const subhanallahCounter=document.getElementById('subhanallahCounter');
const alhamdulillahCounter=document.getElementById('alhamdulillahCounter');
const allahuakberCounter=document.getElementById('allahuakberCounter');
// Buttons
const subhanallahIncrimentBtn=document.getElementById('subhanallahIncrimentBtn');
const subhanallahDecrimentBtn=document.getElementById('subhanallahDecrimentBtn');
const alhamdulillahIncrimentBtn=document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn=document.getElementById('alhamdulillahDecrimentBtn');
const allahuakberIncrimentBtn=document.getElementById('allahuakberIncrimentBtn');
const allahuakberDecrimentBtn=document.getElementById('allahuakberDecrimentBtn');
const resetBtn=document.getElementById('resetBtn');
// Values
let subCounter=0;
let alCounter=0;
let allCounter=0;
// Actions

// Subhanallah
subhanallahIncrimentBtn.addEventListener('click',function(){
    if(subCounter===33){
        return alert("Now Recite Alhamdulillah 33 Times");
    }
    subCounter++;
    subhanallahCounter.innerText=subCounter;
})
subhanallahDecrimentBtn.addEventListener('click',function(){
    if(subCounter===0){
        return alert("Recite Subhanallah 33 Times");
    }
    subCounter--;
    subhanallahCounter.innerText=subCounter;
})

// Alhamdulillah
alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alCounter===33){
        return alert("Now Recite AllahuAkber 33 Times");
    }
    alCounter++;
    alhamdulillahCounter.innerText=alCounter;
})
alhamdulillahDecrimentBtn.addEventListener('click',function(){
    if(alCounter===0){
        return alert("Recite Alhamdilillah 33 Times");
    }
    alCounter--;
    alhamdulillahCounter.innerText=alCounter;
})

// AllahuAkber
allahuakberIncrimentBtn.addEventListener('click',function(){
    if(allCounter===34){
        return alert("100 Times Finished....");
    }
    allCounter++;
    allahuakberCounter.innerText=allCounter;
})
allahuakberDecrimentBtn.addEventListener('click',function(){
    if(allCounter===0){
        return alert("Recite AllahAkber 34 Times");
    }
    allCounter--;
    allahuakberCounter.innerText=allCounter;
})

// Reset
resetBtn.addEventListener('click',function(){
    subCounter=0;
    alCounter=0;
    allCounter=0;

    subhanallahCounter.innerText=0;
    alhamdulillahCounter.innerText=0;
    allahuakberCounter.innerText=0;
})