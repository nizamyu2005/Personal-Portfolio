/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_nte7oxi', 'template_w0j3yw6', '#contact-form', '61N4t_XezopbmclOf')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅';

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
    }, () => {
        contactMessage.textContent = "Message not sent (Server Issue) ❌";
    });
}

contactForm.addEventListener('submit', sendEmail);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
