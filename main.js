ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 1000,
  delay: 400,
});

ScrollReveal().reveal("h1", { delay: 300, opacity: 0, distance: 0 });
ScrollReveal().reveal(".image", { delay: 100, origin: "left" });
ScrollReveal().reveal(".text-box", { delay: 200, origin: "right" });
ScrollReveal().reveal(".social", { delay: 200 });
ScrollReveal().reveal(".social2", { delay: 400, origin: "left" });
