const h1=document.getElementById("togltext");
const button=document.getElementById("toglbutton");

let isOn =false;
button.addEventListener('click',()=>{
    isOn=!isOn
    h1.textContent = isOn ? 'ON' : 'OFF';
});