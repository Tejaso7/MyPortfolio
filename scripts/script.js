/*--------------------------------------------------------------------
    Function for Hilighting navlinks on scroll to particular section
----------------------------------------------------------------------*/
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Add an event listener listening for scroll

function navHighlighter() {
  const sections = document.querySelectorAll("section");

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 180;
    const sectionId = current.getAttribute("id");

    /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar .navbar-link[name*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar .navbar-link[name*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}


 /**
   * Hero type effect
   */
 const typed = select('.typed')
 if (typed) {
   let typed_strings = typed.getAttribute('data-typed-items')
   typed_strings = typed_strings.split(',')
   new Typed('.typed', {
     strings: typed_strings,
     loop: true,
     typeSpeed: 100,
     backSpeed: 50,
     backDelay: 2000
   });
 }

window.addEventListener("scroll", () => {
  headerAnim();
  navHighlighter();
});

/*------------------------------------
        ON SCROLL FUNCTION
 -------------------------------------*/

const scrollToSection = (e) => {
  document.querySelector(`#${e.getAttribute("name")}`).scrollIntoView();
};

/*-------------------------------------------
---------------------------------------------*/

console.log("\x1B[36mHey developer, there are no logs here. sheesh!");
console.log(
  "\x1B[36mRepo available at https://github.com/sushain-gupta/Portfolio"
);

/*-------------------------------------------
                FIREBASE
---------------------------------------------*/

//----------DEVELOPMENT MODE SETUP-------------
ref.child("(Development Mode)").on("value", (mode) => {
  toString(mode.val());
  DevMode = /true|T|True|t|on|On/.test(mode.val());
});

ref.on("value", (snapshot) => {
  DevMode == true && Header(snapshot);
  Home(snapshot);
  About(snapshot);
  Skills(snapshot);
  Project(snapshot);
  Education(snapshot);
  Experience(snapshot);
  Contact(snapshot);
  Footer(snapshot);
  setSkeleton();
  navHighlighter();
});
ref.once("value", (snapshot) => {
  DevMode == false && Header(snapshot);
  Home(snapshot);
  About(snapshot);
  Skills(snapshot);
  Project(snapshot);
  Education(snapshot);
  Experience(snapshot);
  Contact(snapshot);
  Footer(snapshot);
  setSkeleton();
  navHighlighter();
});
