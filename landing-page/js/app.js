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
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before c:rucial code sections within the procedure.
 */

/** Define Global Variables
 
**/
let sections = document.querySelectorAll("section");
let navigation = document.getElementById("navbar__list");
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
sections.forEach((section) => {
  let navlist = innerHTML = `<li><a href="#${section.id}" class="menu__link" data-nav="${section.id}">${section.dataset.nav}</a></li>`;
  navigation.insertAdjacentHTML("beforeend", navlist);
});

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () => {
  let current = '';
  // lopping through each section and see if it in the viewport and the if in the viewport we get the id of the section and save it in the (current) variable.
  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id')
    };
  });
  console.log(current);
  // adding (active) class
  sections.forEach(section => {
    section.classList.remove('your-active-class');
    if(section.classList.contains(current)){
      section.classList.add('your-active-class')
    }
  });
});

// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
navigation.addEventListener('click' ,(tosec) => {
  tosec.preventDefault();
  if (tosec.target.dataset.nav) {
    document.getElementById(`${tosec.target.dataset.nav}`).scrollIntoView({behavior: "smooth"});
    setTimeout(() => { // for a smooth scroll
      location.hash = `${tosec.target.dataset.nav}`;
    }, 471);
  }
});
// Set sections as active
