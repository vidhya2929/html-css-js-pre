const toggleBtn = document.getElementById('togggleBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// open/close sidebar and overlay
toggleBtn.addEventListener('click', (e) =>{
  e.stopPropagation(); //if we don't use this ,clicking the button will immediately open and then close the sidebar,because window's click handler thinks we clicked outside.
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

// close both when clicking outside
window.addEventListener('click', function (e){
  if(
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  )
  {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    // It becomes visisble (display: block) when active
    // Hidden(displya: none)when not.
  }
});
