const navbar = document.querySelector(".navbar")
window.addEventListener("scroll", ()=>
{
    if (window.scrollY > 200) {
        navbar.style.border ="1px solid var(--border-color)"
        navbar.style.borderLeft= "1px";
        navbar.style.borderTop= "1px";
        navbar.style.borderRight= "1px";
        navbar.style.transition= "1s ease"
    }
    else
    {
         navbar.style.border ="none"
    }
})

const mobileBottomNavbar = document.querySelector(".mobile-bottom-navbar")
window.addEventListener("scroll", ()=>
    {
        if (window.scrollY > 800) {
            mobileBottomNavbar.style.display = "flex";
            mobileBottomNavbar.style.transition= "1s ease" 
        }
        else
        {
            mobileBottomNavbar.style.display ="none"
        }
    })

    
const chatBtn = document.querySelector(".chat-btn")
const sidebar = document.querySelector(".sidebar")
const sidebarCloseIcon = document.querySelector(".sidebar-close-icon")

chatBtn.addEventListener("click", ()=>
{
    sidebar.classList.add("show-sidebar");
    sidebar.classList.remove("close-sidebar");
    
})
sidebarCloseIcon.addEventListener("click", ()=>
    {
        sidebar.classList.add("close-sidebar");
    })
    // ---------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const changingText = document.querySelector('.changing-text');
        let isDeveloper = true;
        
        function toggleText() {
            if (isDeveloper) {
                changingText.textContent = 'Designer';
               
            } else {
                changingText.textContent = 'Developer';
              
            }
            
            // Toggle active class for animation
           
            
            isDeveloper = !isDeveloper;
        }
        
        // Change text every 2 seconds
        setInterval(toggleText, 2000);
    });
    const aboutparagraph = document.querySelector(".about-paragraph")
    const text =aboutparagraph.innerText; 
    const spanned = text.split("").map(elements =>
    {
        if (elements === " ") {
            return " ";
        }
        let shayan = `<span>${elements}</span>`
        return shayan;
    }
    ).join("")
    aboutparagraph.innerHTML = spanned;
    const myEducationSection = document.querySelector(".my-education-section")
    const mySkillsSection = document.querySelector(".my-skills-section")
    const myAboutSection =document.querySelector(".my-about-section")
    const myCertificates = document.querySelector(".certificates-container")
    const allBtns = document.querySelectorAll(".btn");
    
    allBtns.forEach((btn)=>
    {
        
        btn.addEventListener("click", ()=>
        {
           if(btn.classList.contains("about-btn"))
           {
            myAboutSection.style.display = "inline-flex";
            mySkillsSection.style.display = "none";
            myEducationSection.style.display ="none"
            myCertificates.style.display = "none"
           }
           else if(btn.classList.contains("education-btn"))
           {
            myAboutSection.style.display = "none";
            mySkillsSection.style.display = "none";
            myEducationSection.style.display ="inline-flex"
            myCertificates.style.display = "none"
           }
           else if(btn.classList.contains("skills-btn"))
           {
            myAboutSection.style.display = "none";
            mySkillsSection.style.display = "inline-flex";
            myEducationSection.style.display ="none"
            myCertificates.style.display = "none"
           }
           else if(btn.classList.contains("certificates-btn"))
           {
            myAboutSection.style.display = "none";
            mySkillsSection.style.display = "none";
            myEducationSection.style.display ="none"
            myCertificates.style.display = "block"
           } 
        })
    })
const currentYear = document.getElementById("current-year")

const year = new Date();
let fullYear = year.getFullYear();
currentYear.innerText = fullYear;

const toggle= document.getElementById("toggle");

toggle.addEventListener("change", ()=>
{
    document.documentElement.classList.toggle("dark-mode");

})

// -------------------------------------------------------------
// video button
let videoButton = document.querySelector(".video-play-button");
let modal= document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn")
videoButton.addEventListener("click", ()=>
{
    modal.classList.add("open-model");
    document.body.style.position = "fixed";
    
});
closeBtn.addEventListener("click",()=>
{   
    document.body.style.position= "relative";
    modal.classList.remove("open-model");
})
sidebar.addEventListener("domContentLoaded",()=>{
    // document.body.classList.add("close-sidebar")
    console.log("shayan"); 
    document.body.classList.add("close-sidebar");  
})
// -------------------------------------------------------------------
ScrollReveal({
 
    distance : '10px',
    duration : 1500,
    delay : 300,
  });
  ScrollReveal().reveal('.animate-right', {delay : 250, origin: 'right', distance: '20px', reset: true, mobile: false, easing: 'ease'});
  ScrollReveal().reveal('.animate-left', { delay: 250 , origin: 'left', distance: '20px', reset: true, mobile: false});
  ScrollReveal().reveal('.animate-bottom',{ delay: 200 , origin: 'bottom' , reset: true, distance: '30px'});
  ScrollReveal().reveal('.animate-top',{ delay: 300 , origin: 'top', distance: '30px', reset: true});
//   ScrollReveal().reveal('.animate-top-1',{ delay: 200 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-2',{ delay: 300 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-3',{ delay: 400 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-4',{ delay: 500 , origin: 'bottom'});
  ScrollReveal().reveal('.reveal1',{ delay: 300 , reset:true,});
  ScrollReveal().reveal('.reveal2',{ delay: 500 , reset:true, });
  ScrollReveal().reveal('.reveal3',{ delay: 700 , reset:true,});
  ScrollReveal().reveal('.reveal4',{ delay: 900 , reset:true,});
  ScrollReveal().reveal('.clickmore',{ delay: 700 , reset:true, origin: 'bottom' });
  ScrollReveal().reveal('.rotate',{ rotate:{ x: 0, y: 0, z: 100 }, reset: true } );
  ScrollReveal().reveal('.footerSection',{ delay: 200 , origin: 'bottom' , reset: true, distance: '30px', desktop: false });
  ScrollReveal().reveal('.contactSection',{ delay: 200 , origin: 'top' , reset: true, distance: '30px', desktop: false } );



document.querySelectorAll(".certificate").forEach((e)=>{
    e.addEventListener("click", ()=>
    {
        console.log("work");
        
        // document.querySelector(".allCertificates").className.add("openCertificatecrousel")
        document.querySelector(".allCertificate").classList.add("openCertificatecrousel")
        document.body.style.overflow = "hidden"
    })
})
document.querySelector(".crousel-close-btn").addEventListener("click", ()=>{
    document.querySelector(".allCertificate").classList.remove("openCertificatecrousel")
    document.body.style.overflow = "scroll"
})

// gsap.to(".active1", {
//     color: "var(--primary-color)",
//     duration: 0.2,
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: "#home",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse"
//     }
//   });
  

//   gsap.to(".active2", {
//     color: "var(--primary-color)",
//     duration: 0.2,
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: "#about",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse"
//     }
//   });
  

//   gsap.to(".active3", {
//     color: "var(--primary-color)",
//     duration: 0.2,
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: "#services",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse"
//     }
//   });
  

//   gsap.to(".active4", {
//     color: "var(--primary-color)",
//     duration: 0.2,
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: "#projects",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse"
//     }
//   });
  

//   gsap.to(".active5", {
//     color: "var(--primary-color)",
//     duration: 0.2,
//     ease: "power3.inOut",
//     scrollTrigger: {
//       trigger: "#contact",
//       start: "top center",
//       end: "bottom center",
//       toggleActions: "play reverse play reverse"
//     }
//   });
  