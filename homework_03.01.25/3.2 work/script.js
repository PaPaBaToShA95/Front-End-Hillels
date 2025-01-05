function form_popup() {
    const nameto=document.getElementById('name').value;
document.getElementById('namejs').textContent=nameto;
const ageto=document.getElementById('age').value;
document.getElementById('agejs').textContent=ageto;
const profto=document.getElementById('prof').value;
document.getElementById('profjs').textContent=profto;
document.getElementById("output").style.display = "block";
console.log(`Привіт! Мене звати ${nameto}. Мені ${ageto} років. Моя професія ${profto}.`);
};
