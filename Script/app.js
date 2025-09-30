const navbar1 = document.querySelector(".navbar")
window.addEventListener("scroll", ()=>
{
    if (window.scrollY > 200) {
        navbar1.style.backgroundColor= "green";
        navbar1.style.transition= "2s ease";
    }
    else
    {
        navbar1.style.backgroundColor= "#2b2b2b";
    }
   
})
const chatBtn = document.querySelector(".chat-btn")
const sidebar = document.querySelector(".sidebar")
const sidebarCloseIcon = document.querySelector(".sidebar-close-icon")

chatBtn.addEventListener("click", ()=>
{
    sidebar.classList.add("show-sidebar");
    console.log("clicked");
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
                changingText.classList.remove('developer');
                changingText.classList.add('designer');
            } else {
                changingText.textContent = 'Developer';
                changingText.classList.remove('designer');
                changingText.classList.add('developer');
            }
            
            // Toggle active class for animation
            changingText.classList.remove('active');
            void changingText.offsetWidth; // Trigger reflow
            changingText.classList.add('active');
            
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
    const allBtns = document.querySelectorAll(".btn");
    
    allBtns.forEach((btn)=>
    {
        
        btn.addEventListener("click", ()=>
        {
           if(btn.classList.contains("about-btn"))
           {
            console.log("about");
           }
           else if(btn.classList.contains("education-btn"))
           {
            console.log("edu");
           }
           else if(btn.classList.contains("skills-btn"))
           {
            console.log("skill");
           }
           else if(btn.classList.contains("hobbies-btn"))
           {
            console.log("hobbies");
           }
           
        })
    })