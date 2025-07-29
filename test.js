function show(){
  console.log(this);
}



.filter-item {
  padding: 10px;
  background-color: #f4f4f4; /* default background */
  cursor: pointer;
}

.filter-item.active {
  background-color: white; /* active background */
  font-weight: bold; /* optional */
}


<script>
  const items = document.querySelectorAll('.filter-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all
      items.forEach(el => el.classList.remove('active'));
      // Add active class to the clicked one
      item.classList.add('active');
    });
  });
</script>
