// Project Links
  
var divelog = document.getElementById('divelog');
const goodnotgreat = document.getElementById("goodnotgreat");
const fourfins = document.getElementById("fourfins");

divelog.onclick = function() {
  window.location.href = "http://dive.dillonmd.com";
}

goodnotgreat.onclick = function() {
  window.location.href = "http://goodnotgreat.herokuapp.com";
}

fourfins.onclick = function() {
  window.location.href = "http://www.4finsdownriggerweights.com";
}


// Burger Menu

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  }
  
  });