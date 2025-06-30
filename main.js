document.getElementById('notify-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const formData = new FormData();
  formData.append("email", email); // "email" must match what's expected in your script

  fetch("https://script.google.com/macros/s/AKfycbxWy8vnNLTDy-JPC9r385VPGg5pe37xT9xeguUr91PmZtlT2WqjiijEq9zzt5b0ByS9/exec", {
    method: "POST",
    body: formData
  })
  .then(() => {
    alert("Submitted successfully!");
    document.getElementById("notify-form").reset();
  })
  .catch(err => {
    alert("Error submitting the form.");
    console.error(err);
  });
});

  
