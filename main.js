
const WHATSAPP = "919922770419";
function waMessage(packageName="Vatvriksha Tours"){
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Vatvriksha Tours, I am interested in the " + packageName + " package. Please share booking details.")}`;
}
function setWhatsAppLinks(){
  document.querySelectorAll("[data-wa]").forEach(a=>{
    const pkg=a.getAttribute("data-wa")||"Vatvriksha Tours";
    a.href=waMessage(pkg);
    a.target="_blank";
  });
}
function mobileMenu(){
  const t=document.querySelector(".mobile-toggle"), m=document.querySelector(".menu");
  if(t&&m)t.onclick=()=>m.classList.toggle("open");
}
function year(){const y=document.querySelector("#year");if(y)y.textContent=new Date().getFullYear();}
document.addEventListener("DOMContentLoaded",()=>{setWhatsAppLinks();mobileMenu();year();});
