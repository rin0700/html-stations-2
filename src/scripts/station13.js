document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("check");
  var text = document.getElementById("text");

  checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
          text.style.backgroundColor = "red";
      } else {
          text.style.backgroundColor = "";
      }
  });
});