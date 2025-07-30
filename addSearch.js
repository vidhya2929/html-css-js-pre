document.querySelectorAll('.dropdown').forEach(dropdown =>{
  // selects every ".dropdown" container on the page and loops through each dropdown
  const searchInput = dropdown.querySelector('.dropSearch');
  // looks inside each dropdown and finds the input box ".dropSearch" used for typing/searching(just the current one)
  if(!searchInput) return;
  // This skips dropdowns that don't have a search input.

  searchInput.addEventListener('input', ()=>{
    // Adds an event listener to run a function whenever the user types something inside the search box
    const filter = searchInput.value.toLowerCase();
    // takes whatever the user typed in th search box(value), and converts it to lowercase.

    const options = dropdown.querySelectorAll('label');
    // Finds all <label> elements inside the specific dropdown

    options.forEach(option =>{
      // loops through each label option
      const text = option.textContent.toLowerCase();
      // gets the full text inside the label and converts it to lowercase for case-insensitive matching
      option.style.display = text.includes(filter) ? '': 'none';

    });
  });
});
