const toggleBtn = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const checkboxes = document.querySelectorAll(".checkk");
const products = document.querySelectorAll(".product");

toggleBtn.addEventListener('click', (e) =>{
  e.stopPropagation();
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});
window.addEventListener('click', function(e){
  if(
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ){
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }
});
checkboxes.forEach(checkbox =>{
  checkbox.addEventListener('change',changeFilter);
});
function changeFilter(){
  const selected = Array.from(checkboxes)
  .filter(cb =>cb.checked)
  .map(cb => cb.value)

  products.forEach(product =>{
    const category = product.getAttribute('data-category');
     
    if(selected.length === 0 || selected.includes(category)){
      product.style.display = 'block';
    }
    else{
      product.style.display = 'none'
    }
  });
}
