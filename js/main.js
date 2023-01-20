// afficher menu y masqué
const navMenu = document.querySelector('#nav-menu'),
    navToggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close')
// menu affichage
// verifier si les constantes en-dessus existent
if(navToggle){
    navToggle.addEventListener("click",() => {
        $(navMenu).addClass('show-menu')
    })
}

 //menu masquage
 //verifier si .... existent
 if(navClose){
    navClose.addEventListener('click', () =>{
        $(navMenu).removeClass('show-menu')
    })
 }

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    $(navMenu).removeClass('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for ( i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/


const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset['target'])

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*==================== hobbies MODAL ====================*/
const modalWindows = document.querySelectorAll('.hobbies_modal'),
    modalBtns = document.querySelectorAll('.hobbies_button'),
    modalClose = document.querySelectorAll('.hobbies_modal-close')

let modal = function(modalClick){
    modalWindows[modalClick].classList.add('active-modal')
}

let fermeture = function(modalClick){
    modalWindows[modalClick].classList.remove('active-modal')
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach((close,i) => {
    close.addEventListener('click', ()=>{
        fermeture(i)
    })
})
        

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },

  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY= window.pageYOffset

//     sections.forEach(current=> {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     });
// }

// window.addEventListener('scroll',scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function shadowNav(){
    const nav = document.getElementById('header'),
        scrolltop = document.getElementById('scroll-up')
    if(this.scrollY >= 80 ) {
    nav.classList.add('scroll-header')
    scrolltop.classList.add('scroll-show');     
    
}   else {
    nav.classList.remove('scroll-header')
    scrolltop.classList.remove('scroll-show')

}
}

window.addEventListener('scroll',shadowNav)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark-theme',
    iconTheme = 'uil-sun'

//theme choisi d'avant

const selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon')

//obtenir le theme courant

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
    getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//valider if l'utilisateur a choisi un theme avant

if(selectedTheme){
    //
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    //pick or no dark theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //sauvgarder les thems 
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})
