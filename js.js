// selecting the elements from the DOM
const toggleBtn = document.getElementById("togggleBtn");
const sidebar = document.getElementById("sidebar");

// show/hide sidebar on button click
toggleBtn.addEventListener('click', (e) => {
  // Add a click event to the toggle button
  // the function inside will run everytime we click the filters button


  e.stopPropagation();
  // "e" is the event object - it holds data about the click
  // this line stops the event from bubbling up to the window


  sidebar.classList.toggle('active');
  // if the "sidebar" doesn't have the class "active", it adds it
  // if the "sidebar" already has the class "active", it removes it


  // the active class makes the sidebar slide into the view
});


// hide sidebar when clicking outside of it 


window.addEventListener('click', function (e){
  // listens to any click anywhere on the screen


  

  if(!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
    // e.target =>the exact element the user clicked on

  // !sidebar.contains(e.target) => Checks was the click not inside the sidebar
  // !toggleBtn.contains(e.target) => checks was the click not on the toggle button

    sidebar.classList.remove('active');
    // removes the active class -> sidebar slides awy offscreen again
  }
});
// 