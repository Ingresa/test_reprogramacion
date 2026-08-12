
const f=document.querySelector('#contactForm'),e=document.querySelector('#email'),e2=document.querySelector('#email2'),m=document.querySelector('#match'),s=document.querySelector('#success');
function check(){const ok=e.value.trim().toLowerCase()===e2.value.trim().toLowerCase();m.textContent=ok?'Los correos coinciden.':'Los correos no coinciden.';m.className=ok?'ok':'';return ok}
e.addEventListener('input',check);e2.addEventListener('input',check);
f.addEventListener('submit',ev=>{ev.preventDefault();if(check())s.hidden=false});
