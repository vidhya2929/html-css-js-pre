const toggleBtn = document.getElementById('togggleBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// open/close sidebar and overlay
toggleBtn.addEventListener('click', (e) =>{
  e.stopPropagation(); //if we don't use this ,clicking the button will immediately open and then close the sidebar,because window's click handler thinks we clicked outside.
  sidebar.classList.toggle('active');
  // Toggles the "active" class on the sidebar 
  overlay.classList.toggle('active');
});

// close both when clicking outside
window.addEventListener('click', function (e){
  // listens for a click anywhere on the page
  if(
    !sidebar.contains(e.target) &&
    // true if we clicked inside the sidebar
    // e.target is the element that was clicked
    !toggleBtn.contains(e.target)
    // true if you clicked the filter button
    // but here is not
  )
  {
    sidebar.classList.remove('active');
    // slides the sidebar out
    overlay.classList.remove('active');
    // It becomes visisble (display: block) when active
    // Hidden(displya: none)when not.
  }
});
