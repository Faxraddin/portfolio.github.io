const navBtn = document.querySelector('.nav-btn');
const hide = document.querySelector('.hide-it');
const hide2 = document.querySelector('.p1');
const hide3 = document.querySelector('.p2');


navBtn.addEventListener('click',()=>{
    hide.classList.toggle('active');
    hide2.classList.toggle('active2');
    hide3.classList.toggle('active2');
})


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".a[href*=" + sectionId + "] div").classList.add("active1");
      
    } else{
      document.querySelector(".a[href*=" + sectionId + "] div").classList.remove("active1");
    }
  });
};

document.getElementById("workk").onclick = function () {
  window.location.href = "/SF/pages/work.html";
};

document.getElementById("smth").onclick = function () {
  window.location.href = "/SF/pages/shelf.html";
};