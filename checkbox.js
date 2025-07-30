const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
// storing these HTML elements in variables

// selecting all Category Checkboxes and Products
const checkBoxes = document.querySelectorAll('.cateFilter');
// selecting all checkboxes with class ".cateFilter"
const products = document.querySelectorAll('.product');
// select all product "div" elements (eah with .product class and a data-category)

// Adding a click Eve    nt Listener
toggleBtn.addEventListener('click', (e) =>{
  // when the filter button is clicked ,run this code
  e.stopPropagation();
  // protects the sidebar from accidently closing
  sidebar.classList.toggle('active');
  // if sidebar is active , this removes the class
  // if the sidebar is not ActiveXObject, this adds the class "active"

  // classList => built -in property allows to access and manipulate the element's list of CSS classes
  // provide-;
    // add() - Add a class
    // remove() -Remove a class
    // toggle()  - Add the class if it is misssing, remove if it is already there
    // contains() -Check if the class exists
    overlay.classList.toggle('active');

  });
    // close on outside click
    window.addEventListener('click', function(e){
      // Listen for a click anywhere in the window(entire page),and run this function
      // "e" is the event object,representing the exact place you clicked.
      if(
        !sidebar.contains(e.target) &&
        // true if we clicked any part inside the sidebar
        // false if you clicked outside
        !toggleBtn.contains(e.target)
        //Clicked not on the filterbutton
      ){
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
  });

  checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change',filterProducts);
    // for each checkbox, when its state(checked/unchecked)changes ,ru the filterProducts function
  });
  function filterProducts(){   // main function that filters products based on selected checkboxes
    const selected = Array.from(checkBoxes)
    // Converts nodelist into a real array
    .filter(cb => cb.checked)
    // Keeps only checked boxes
    // .filter => creates a new array that contains only the elements that pass a condition
    .map(cb => cb.value);
    // Gets the value of each checked box
    // .map => creates a new array by modifying each element of the original array

    // Selected become an array like: ['men','kids']

    // Loop through all products
    products.forEach(product =>{
      const category = product.getAttribute('data-category');
   
    // check if product should be shown
    if(selected.length === 0 || selected.includes(category)){
      // if no filters are selected -> show all
      // or if product's category is in selected list -> show it
      product.style.display = 'block';
    }
    else{
      product.style.display = 'none';
    }
  });
  }

  // 'click'  => when the user clicks the element
  //  'change' => when the value/state changes