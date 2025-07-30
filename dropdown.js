const dropdownBtn = document.querySelector('.dropdown-btn');
// select dropdown button in the HTML
// finds the first element with class "dropdown-btn"
const dropdown = document.querySelector('.dropdown');
// selects whole dropdown container,including the button and the menu


dropdownBtn.addEventListener('click', ()=>{
  // listening to the click on the button
  dropdown.classList.toggle('active');
  // Add the class "active" if it is not there
  // Remove the class "active" if it is already there
});
// close dropdown
document.addEventListener('click', (e)=>{
  // (document.) will add a global click listener on the whole page
  if(!dropdown.contains(e.target)){
    dropdown.classList.remove('active');
  }
});