document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const formData = new FormData();
  
    // Replace this with the actual entry ID you found
  
    fetch('https://script.google.com/macros/s/AKfycbxWy8vnNLTDy-JPC9r385VPGg5pe37xT9xeguUr91PmZtlT2WqjiijEq9zzt5b0ByS9/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ email: email })
      })
      
  });
  