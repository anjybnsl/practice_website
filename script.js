
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});// this is locomotive library, for the smooth scrolling and the great scroller.


var t1 = gsap.timeline()
// here we have declared a variable named t1 for the gsap library
// Basically GSAP is a library which is responsible for the movement of elements in the website

t1.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
// this will send the web down in 0 seconds.

t1.to("#page1",{
    y:"30vh",
    duration:1,
    delay:1
})
// come up but with delay of 1 second.

t1.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7,
    delay:0.2
})
// here we are rotating it and making it big again.
