// ------- LOAD NAVBAR EACH RECIPE -------- //

fetch('./elements/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  })
  .catch(error => console.error('Error loading navbar:', error));





  // ------- DAY OF THE WEEK -------- //

function displayDate() {
  const date = new Date();
  const options = {
    day: 'numeric', month: 'long', year: 'numeric'
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  const message = `WELCOME TO THE WEEK OF ${formattedDate.toUpperCase()}!`;

  document.getElementById('date').innerHTML = message;
}
displayDate();





// ------- PRINT -------- //

function printRecipe() {
  const recipeContent = document.querySelector('main').innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = recipeContent;

  window.print();

  document.body.innerHTML = originalContent;
}
