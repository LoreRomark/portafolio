// // --------------------------- ADD EFFECTS WITH TYPED LIBRARY

// TYPING EFFECT
var typingEffect = new Typed(".typedText", {
    strings: ["arquitecto"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  })
  
  // SCROLL REVEAL ANIMATION
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  // HOME
  sr.reveal('.featured-text-card', {})
  sr.reveal('.featured-name', { delay: 100 })
  sr.reveal('.featured-text-info', { delay: 200 })
  sr.reveal('.featured-text-btn', { delay: 200 })
  // sr.reveal('.social_icons', { delay: 200 })
  sr.reveal('.featured-image', { delay: 100 })
  
  // // PROJECT BOX
  sr.reveal('.project-box', { interval: 100 })
  
  
  
  // /* -----  -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ----- */
  
  // ABOUT INFO & CONTACT INFO 
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
  })
  
  srLeft.reveal('.about-info', { delay: 50 })
  srLeft.reveal('.contact-info', { delay: 50 })
  
  // ABOUT SKILLS & FORM BOX 
  //   const srRight = ScrollReveal({
  //     origin: 'right',
  //     distance: '80px',
  //     duration: 1000,
  //     reset: true
  //   })
  
  //   srRight.reveal('.skills-box',{delay: 50})
  //   srRight.reveal('.form-control',{delay: 50})