/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}

navLink.forEach(element => {
    element.addEventListener('click', linkAction)
});

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHADOW HEADER ====== =========*/


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessenger = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {
            contactMessenger.textContent = 'Message sent successfully ✅';

            setTimeout(() => {
                contactMessenger.textContent = ''; // Reset message after 5 seconds
            }, 5000);

            contactForm.reset();
        })
        .catch((err) => {
            console.error('Error:', err);
            contactMessenger.textContent = 'Message not sent (service error) ❌';

            setTimeout(() => {
                contactMessenger.textContent = ''; // Reset message after 20 seconds
            }, 20000);
        });
};

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]'); // Chọn tất cả các section có id

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight, 
            sectionTop = current.offsetTop - 58, 
            sectionId = current.getAttribute('id'), 
            sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]'); 

        if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive); 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 0,
    reset: true
})

sr.reveal('.home__perfil, .about__image', { origin: 'right' });
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info', { origin: 'left' });
sr.reveal('.services__card, .projects__card', { interval: 100 });

// Lắng nghe sự thay đổi giá trị input và textarea
const inputs = document.querySelectorAll('.contact__input, .contact__textarea');

inputs.forEach(input => {
    // Khi input có sự thay đổi (bao gồm autofill)
    input.addEventListener('input', function () {
        // Kiểm tra nếu có giá trị trong input, có thể là do autofill
        if (input.value !== '') {
            input.style.transition = 'background-color 0.5s, color 0.5s';
            input.style.backgroundColor = 'var(--white-color)'; 
            input.style.color = 'var(--black-color)'; 
        } else {
            input.style.backgroundColor = 'var(--black-color)'; 
            input.style.color = 'var(--white-color)';
        }
    });

    // Khi input mất focus (blur)
    input.addEventListener('blur', function () {
        if (input.value !== '') {
            input.style.transition = 'background-color 0.5s, color 0.5s';
            input.style.backgroundColor = 'var(--white-color)';
            input.style.color = 'var(--black-color)';
        } else {
            input.style.transition = 'background-color 0.5s, color 0.5s';
            input.style.backgroundColor = 'var(--black-color)';
            input.style.color = 'var(--white-color)';
        }
    });
});
