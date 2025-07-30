const tabs = document.querySelectorAll('.tab');
// Select all elements that have the class "tab"
const contents = document.querySelectorAll('.tabCont');
// Select all content sections for the tabs
// These 2 linesstore all the tabs and all the content sections in 2 variables.
tabs.forEach(tab =>{
  // runs a function for each single tab.
  tab.addEventListener('click', ()=>{
    // when the tab is clicked, run the function below
    tabs.forEach(t => t.classList.remove('active'));
    // Before activating the new tab, we remove the ".active" class from all tabs 
    //This ensures only one tab is active at a time.
    contents.forEach(c => c.classList.remove('active'));
    // remove ".active" from all content blocks.
    // This hides all content
    tab.classList.add('active');
    // activate the tab that was clicked

    const targetId = tab.getAttribute('data-target');
    // get the value of the attribute
    document.getElementById(targetId).classList.add('active');
    // find the content div with corresponding id
    // adds ".active" to ImageTrack, so it is shown
    // All other sections remain hidden.
  });
});