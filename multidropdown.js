const dropdowns = document.querySelectorAll('.dropdown');
// select all dropdown blocks 
dropdowns.forEach(dropdown => {
  // for each individual dropdown
  const button = dropdown.querySelector('.dropBtn');

  button.addEventListener('click',(e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    // Opens the clicked dropdown,If already open,closes it

    // Close other dropdowns
    dropdowns.forEach(d =>{
      // After opening one dropdown,we close all others.
      if(d !== dropdown) d.classList.remove('active');
      // if(d !== dropdown) ensures the clicked one stays open,others close
    });
  });
});

// Close dropdowns if clicking outside
document.addEventListener('click', ()=>{
  // if you click anywhere else on the pageXOffset,all dropdowns are closed
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('active');
  });
});
