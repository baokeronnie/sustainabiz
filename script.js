const header=document.querySelector('.site-header');const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-nav');const back=document.querySelector('.back-top');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>20);back.classList.toggle('show',scrollY>500)});
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
back.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.faq-item button').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.parentElement;const open=item.classList.toggle('active');btn.setAttribute('aria-expanded',open)}));
document.querySelectorAll('[data-service]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('#service-select').value=btn.dataset.service;document.querySelector('#contact').scrollIntoView({behavior:'smooth'});setTimeout(()=>document.querySelector('input[name="name"]').focus(),650)}));
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const subject=encodeURIComponent(`Website enquiry: ${d.get('service')}`);const body=encodeURIComponent(`Name: ${d.get('name')}\nOrganisation: ${d.get('organisation')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\n\n${d.get('message')}`);location.href=`mailto:info@sustainabiz.co.bw?subject=${subject}&body=${body}`;document.querySelector('#form-note').textContent='Your email application is opening with the enquiry details.'});
document.querySelector('#year').textContent=new Date().getFullYear();

// CURRENT CEO ENGAGEMENT POP-UP SETTINGS
// The pop-up stays visible for 6 seconds (6000 milliseconds).
// Change 6000 below if you want a different display duration.
const engagementPopup=document.querySelector('#engagement-popup');
const engagementClose=document.querySelector('#engagement-close');
let engagementTimer;
function closeEngagementPopup(){
  if(!engagementPopup)return;
  engagementPopup.classList.add('hide');
  engagementPopup.classList.remove('show');
  clearTimeout(engagementTimer);
}
if(engagementPopup){
  window.addEventListener('load',()=>{
    setTimeout(()=>{
      engagementPopup.classList.add('show');
      engagementTimer=setTimeout(closeEngagementPopup,6000); // AUTO-CLOSE AFTER 6 SECONDS
    },700);
  });
  engagementClose.addEventListener('click',closeEngagementPopup);
}
