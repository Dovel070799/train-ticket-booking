
const form = document.getElementById("booking-form");
const result = document.getElementById("result");


form.addEventListener("submit", function(event){
   event.preventDefault();

   const from = document.getElementById("from").value;
   const where = document.getElementById("where").value;
   const when = document.getElementById("when").value;

   if (from && where && when){
       result.innerHTML = (`Вы забронировали билет: ${from} → ${where} на ${when}`);
       result.className = "succes"
       document.getElementById("result").style.color = "green";
   } else {
       result.innerHTML = "Пожалуйста, заполните все поля!";
       result.className = "error";
   }
});


//Не работает сброс информацию со всех полей!!!!!!!!!!!

document.getElementById("reset").addEventListener("click", function(){  
    result.innerHTML = "";
    result.className = "";
    form.reset();
});