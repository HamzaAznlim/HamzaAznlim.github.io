document.getElementById('notify-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const formData = new FormData();
  formData.append("email", email); // "email" must match what's expected in your script

  fetch("https://script.google.com/macros/s/AKfycbyXbW7CglS4cgs64MbVqX9r6oJi0blpV6tvEKlOcB71NGkAPmcZPjDIUC-ap8p6zjJueg/exec", {
    method: "POST",
    body: formData
  })
  .then(() => {
    alert("Thank you ! Something big is coming your way... 👀");
    document.getElementById("notify-form").reset();
  })
  .catch(err => {
    alert("Error submitting the form.");
    console.error(err);
  });
});

  
