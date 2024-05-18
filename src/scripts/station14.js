function alt() {
  alert('ECMAScript');
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector('button');
  button.addEventListener('click', alt);
});
