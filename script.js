

gsap.from('.hero-content', {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
});

gsap.from('.step', {
    scrollTrigger: {
        trigger: '.steps',
        start: 'top 80%',
        scrub:0.2
        
        
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.benefit', {
    scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 80%',
        scrub:0.5
      
       
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

gsap.from('.faq-item', {
    scrollTrigger: {
        trigger: '.faq-container',
        start: 'top 80%',
        
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
});

gsap.from('.contact-info, .contact-form', {
    scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%',
        
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const formData = new FormData(contactForm);
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    
    contactForm.reset();
    

    alert('Thank you for your message. We will contact you soon!');
});