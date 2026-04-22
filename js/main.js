gsap.registerPlugin(ScrollTrigger);

gsap.from("#main-header", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});


if (document.querySelector(".about-kat")) {
gsap.from(".blurb-text", {
  x: 100,
  opacity: 0,
  duration: 1,
    scrollTrigger: {
    trigger: ".about-kat",
    start: "top 80%"
  },
});
}

if (document.querySelector(".products")) {
gsap.from(".product-card", {
  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".products",
    start: "top 75%"
  },
});
}

if (document.querySelector(".zoom-img")) {
gsap.utils.toArray(".zoom-img").forEach((img) => {

  gsap.fromTo(img,
    {
      scale: 1
    },
    {
      scale: 1.15, // zoom strength
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        end: "bottom 20%",
        scrub: true
      }
    }
  );
});
}
if (document.querySelector(".left")) {
gsap.from(".left", {
  opacity: 0,
  x: -80,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".left",
    start: "top 75%"
  },
});
}

if (document.querySelector(".right")) {
gsap.from(".right", {
  opacity: 0,
  x: 80,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".right",
    start: "top 75%"
  },
});
}

if (document.querySelector(".bottom-left")) {
gsap.from(".bottom-left", {
  opacity: 0,
  x: -80,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".bottom-left",
    start: "top 95%"
  },
});
}

if (document.querySelector(".info")) {
gsap.from(".info h2", {
  opacity: 0,
  y: 60,
  scale: 0.96,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".info",
    start: "top 80%",
    end: "top 40%",
    scrub: 1
  }
});
}