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
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * (resources: https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/)
 */
let navbarList = document.querySelector("#navbar__list"); /*https://www.w3schools.com/jsref/met_document_queryselectorall.asp****/
const sections = document.querySelectorAll("section"); /*https://www.codegrepper.com/code-examples/javascript/queryselectorall+in+javascript***/


/**
 * End Global Variables
 * Start Helper Functions
 */
//check if an element is in viewport or not (https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=Use%20the%20getBoundingClientRect()%20method%20to%20get%20the%20size%20of,in%20the%20viewport%20or%20not.)
function isInViewport(elem) {
    let distance = elem.getBoundingClientRect();

    return (
        distance.top >= -300 &&
        distance.left >= 0 &&
        distance.bottom <= (1.3 * window.innerHeight ||
            document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth ||
            document.documentElement.clientWidth)
    );
};

// remove active classes
//https://stackoverflow.com/questions/8379776/add-remove-active-class-from-a-navigation-link
//https://www.javatpoint.com/add-and-remove-the-active-class-from-a-navigation-link
// https://awik.io/check-if-element-is-inside-viewport-with-javascript/
// https://stackoverflow.com/questions/61585027/remove-class-from-all-elements-except-active-element

function deactivateSections() {
    sections.forEach((element) => {
        element.classList.remove("your-active-class", "active");
    });
}

function deactivateNavLinks() {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach((element) => {
        element.classList.remove("active-nav");
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
window.addEventListener('load', buildNavbar())

// https://stackoverflow.com/questions/39446702/how-to-highlight-active-element-using-javascript
// Add class 'active' to section when near top of viewport

function activateCurrentSection(currentSection) {
    currentSection.classList.add("your-active-class", "active");

    deactivateNavLinks();
    activateNavLinks(currentSection.getAttribute('id'));
}

function activateNavLinks(currentSectionId) {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    //console.log(navbarAnchors);
    navbarAnchors.forEach((element) => {
        if (element.getAttribute('href') == `#${currentSectionId}`) {
            element.classList.add("active-nav");
        }
    });
}

// Scroll to anchor ID using scrollTO event
//https://blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button
function scrollToSectionOnClick() {
    let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
    navbarAnchors.forEach((element) => {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(element.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
//https://itnext.io/build-a-single-page-web-app-javascript-and-the-dom-90c99b08f8a9

function buildNavbar() {
    sections.forEach((element) => {
        let listItem = document.createElement("li");
        listItem.classList.add("navbar__list__item");
        let sectionName = element.getAttribute("data-nav");
        let currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentSectionId}" class="nav__hyperlink">${sectionName}</a>`;
        navbarList.appendChild(listItem);
    });
}

// Scroll to section on link click
//https://blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button

scrollToSectionOnClick();

// Set sections as active
window.addEventListener('scroll', function(event) {
    event.preventDefault();

    sections.forEach((element) => {
        // console.log(element);
        if (isInViewport(element)) {
            deactivateSections();
            activateCurrentSection(element);
            // console.log('In viewport!');
        } else if (window.scrollY == 0) {
            deactivateSections();
            deactivateNavLinks();
            // console.log('No Change');
        }
    }, false);
});

// scroll-up
///https: //blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// contactForm 
//const form  = document.getElementById('contactForm');
//https://stackoverflow.com/questions/6799533/how-to-submit-a-form-with-javascript-by-clicking-a-link
//https://blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button
// this is the link I used for this code: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript
const form = document.getElementById('contactForm');

form.addEventListener('submit', () => {
    // handle the form data, the call back function 
});