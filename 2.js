gsap.from(".main #h3", {
    x: -30,
    duration: 1,
    opacity: 0
})

var tl = gsap.timeline();
tl.from(".list li", {
    // duration:3,
    delay: .5,
    x: 100,
    opacity: 0,
    stagger: .2,
    // ease: "Expo.easeInOut"
});
tl.from(".icon", {
    x: 100,
})
tl.from("#icon", {
    x: 100,
});
tl.from(".rgtp-img img", {
    // ease:"back",
    x: 100,
    opacity: 0,
    stagger: .2,
    // scale:0
});
tl.from(".rgtp-img i", {
    x: 100,
    opacity: 0,
    stagger:.2,
    // duration:1,
})

tl.from("#images", {
    ease: "back",
    scale: 0,
    opacity: 0,
});

tl.from("#bttext", {
    x: -100,
    opacity: 0,
});
tl.from("#text", {
    x: -100,
    opacity: 0,
});

tl.from("#last", {
    y: 100,
    opacity: 0,
    stagger: .2
})