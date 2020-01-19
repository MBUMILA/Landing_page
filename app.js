/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
var names = ['section1', 'section2','section3','section4']

for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var ul = document.getElementById("navbar__list");
    var li = document.createElement('li');
    var a = document.createElement('a');
    //a.document.createTextNode(name);
    a.setAttribute('href',"#"+name);
        a.setAttribute('class',"active");

    li.appendChild(a);
    a.innerText = name;
    ul.appendChild(li);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

//Change navigation style on scroll
//Change navigation style on scroll

//Active navigation on scroll
window.addEventListener('scroll', event => {
  
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
      
     
    } else {
      link.classList.remove('active');
     
    }
    
  });
});
