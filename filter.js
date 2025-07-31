const checkboxes = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selected = Array.from(checkboxes)
      .filter(i => i.checked)
      .map(i => i.value);

    products.forEach(product => {
      const category = product.dataset.category;
      if (selected.length === 0 || selected.includes(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
