const h1=document.getElementById("togltext");
const button=document.getElementById("toglbutton");

let isOn =false;
button.addEventListener('click',()=>{
    isOn=!isOn
    h1.textContent = isOn ? 'ON' : 'OFF';
    if (isOn) {
    h1.style.color = "black";
    document.body.style.backgroundColor = "white"; 
  } else {
    h1.style.color = "black";
    document.body.style.backgroundColor = "black"; 
  }
});