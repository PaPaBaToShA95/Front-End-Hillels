function form_popup() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const prof = document.getElementById("prof").value;
  alert(`Мене звати ${name}, мені ${age} років, я працюю в сфері ${prof}`);
  console.log(
    `Мене звати ${name}, мені ${age} років, я працюю в сфері ${prof}`
  );
}
