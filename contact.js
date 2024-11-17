const scriptURL = 'https://script.google.com/macros/s/AKfycbz9R81FxlG-ZtVzllIdXvR9v3Jp4vBOeENBBGHMMsKqIoKHRbBTCuch0GAXJnulbYYyyw/exec';
const form = document.forms['contact'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Create a new FormData object and append the "to" field
  const formData = new FormData(form);
  formData.append('to', 'Priyanshi'); // Add the hardcoded "to" field
  
  // Send the form data to the server
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert("Thank you! Your form is submitted successfully.");
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});
