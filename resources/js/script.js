const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("header-scrolled")
    } else {
      header.classList.remove("header-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Header background change
// $('.menu-btn').click(function() {
//  if(clicked){//
//    $('header').css('background-color', 'white');
//    clicked = false;
//  } else {
//   $('header').css('background-color', 'rgba(0, 0, 0, 0.05);');
//   clicked = true;
//  }
//});

$("input:checkbox").click(function() {
    var actualTime = "";
    $(this).parent().toggleClass("header-scrolled-2");
});
