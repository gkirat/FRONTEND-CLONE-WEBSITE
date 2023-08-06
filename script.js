// JavaScript code here
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// Update cursor position based on mouse movement
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
});

// Navigation bar effects on mouse enter and leave
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
});

h4all.forEach(function(elem) {
    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

// GSAP animations and scroll triggers
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -15%",
        scrub: 1
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 1
    }
});

// GSAP animations for other sections
gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});

// Add more GSAP animations and scroll triggers for other sections as needed
// ...

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 3
    }
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 50%",
        end: "top 45%",
        scrub: 3
    }
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
});
