ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1000,
  delay: 400
});

ScrollReveal().reveal('h2', { delay: 300, opacity: 0, distance: 0})
ScrollReveal().reveal('.image', { delay: 100, origin: 'left'})
ScrollReveal().reveal('.text-box', { delay: 200, origin: 'right' })
