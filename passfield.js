// // selects HTML elements using their id
// const passwordInput = document.getElementById("passInput");
// const togglebutton = document.getElementById("togglePassword");

// togglebutton.addEventListener('click', function(){
//   // sets up a click event listener,the function inside will run.
//   const isPassword = passwordInput.type === 'password';
//   // every "input" field has a type property (text.password,email etc.)
//   // we check if the current input type is "password"
//   // if true, isPassword becomes true, else false
//   passwordInput.type = isPassword ? 'text' : 'password';
//   togglebutton.textContent = isPassword ? 'Hide': 'Show';
// });

const passwordInput = document.getElementById("passInput");
const toggleIcon = document.getElemnetById("togglePassword");

toggleIcon.addEventListener("click", function(){
  const isPassword = passwordInput.type ==="password";
  passwordInput.type = isPassword ? "text":"password";
  toggleIcon.textContent = isPassword ? "🙈" :"👁️"

});