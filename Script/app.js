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
    // document.documentElement.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
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
    duration : 1500
  });
  ScrollReveal().reveal('.animate-right', {delay : 250, origin: 'right', distance: '20px', reset: true, mobile: false, easing: 'ease'});
  ScrollReveal().reveal('.animate-left', { delay: 250 , origin: 'left', distance: '20px', reset: true, mobile: false});
  ScrollReveal().reveal('.animate-bottom',{ delay: 200 , origin: 'bottom' , reset: true, distance: '30px'});
  ScrollReveal().reveal('.animate-top',{ delay: 300 , origin: 'top', distance: '30px', reset: true});
//   ScrollReveal().reveal('.animate-top-1',{ delay: 200 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-2',{ delay: 300 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-3',{ delay: 400 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-4',{ delay: 500 , origin: 'bottom'});
  ScrollReveal().reveal('.reveal1',{ delay: 100 , reset:true,});
  ScrollReveal().reveal('.reveal2',{ delay: 300 , reset:true, });
  ScrollReveal().reveal('.reveal3',{ delay: 500 , reset:true,});
  ScrollReveal().reveal('.reveal4',{ delay: 700 , reset:true,});
  ScrollReveal().reveal('.clickmore',{ delay: 900 , reset:true, origin: 'bottom' });
  ScrollReveal().reveal('.rotate',{ delay: 300, rotate:{ x: 0, y: 0, z: 100 }, reset: true } );
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

function navActive(link, section) {
    gsap.fromTo(
      link,
      { color: "var(--font-color)" },
      {
        color: "var(--primary-color)",
        duration: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          
        }
      }
    );
  }
  
  navActive(".active1", "#home");
  navActive(".active2", "#about");
  navActive(".active3", "#services");
  navActive(".active4", "#projects");
  navActive(".active5", "#contact");

//   gsap.to(".timeline",{
//     // transform: "translateY(-780px)",
//     y: "-780px",
//     duration: 1,
//     ease: "power3.out",
//     scrollTrigger: {
//         trigger: "#about",
//         start: "top 30%",
//         end: "bottom 80%",
//         // toggleActions: "play reverse play reverse",
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//         markers: true,
//     }
//   })

let crousel1=document.querySelector(".crousel")
let certificates=["./certificates/1758219679918.jpeg","./certificates/google agile essentail.PNG","./certificates/AI certificate_page-0001.jpg","./certificates/Design Promts.PNG","./certificates/frontend developer.jpg","./certificates/github certificate MTF TECHNOLOGY_page-0001.jpg","./certificates/google Ai essentail.PNG","./certificates/Google prompting essentials.PNG","./certificates/HTMLEssentialsv120250421-27-8f2knl_page-0001.jpg","./certificates/speed up data analysis and presentation.PNG","./certificates/UC-418274c3-4ca0-4257-9f6f-7be41f349cf6_page-0001.jpg","./certificates/Virtual Uni (SEO).PNG","./certificates/virtual freelance.PNG","./certificates/Discover the Art of Prompting.PNG","./certificates/Foundations of Agile Project Management.PNG","./certificates/maximize productivity Ai tool.PNG","./certificates/Use AI as a Creative or Expert Partner.PNG","./certificates/Implement the Scrum Framework.PNG"]

for(let i in certificates)
{
    let certificateImages=document.createElement("img");
    console.log(certificates[i]);
    crousel1.appendChild(certificateImages)
    certificateImages.src=certificates[i];
}

// const loco = new LocomotiveScroll({
//   el: document.querySelector(".locomotive-scroll"),
//   smooth: true
// });
// loco.scrollTo(0, 0, 0);
// loco.on("scroll", ScrollUpdate => {
//   console.log(ScrollUpdate);
// });

// Initialize Lenis
// const lenis = new Lenis({
//     autoRaf: true,
//   });

const lenis = new Lenis();
  // Listen for the scroll event and log the event data
//   lenis.on('scroll', (e) => {
//     console.log(e);
//   });

  // Initialize Lenis

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);