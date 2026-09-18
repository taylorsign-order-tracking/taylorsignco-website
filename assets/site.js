const ASSET='https://6aad9b55321b9ff4ff5b09b3--taylorsignco-test.netlify.app/assets/portfolio/';
const projects=[
{i:1,name:'Bap Bowl',label:'Illuminated',cat:'illuminated'},
{i:2,name:'Bap Bowl',label:'Channel Letters',cat:'channel-letters'},
{i:3,name:'Okinawa',label:'Building Signage',cat:'building-signage'},
{i:4,name:'Restaurant Identity',label:'Building Signage',cat:'building-signage'},
{i:5,name:'Restaurant Identity',label:'Building Signage',cat:'building-signage'},
{i:6,name:'Smoke & Shop',label:'Channel Letters',cat:'channel-letters'},
{i:7,name:'Smoke & Shop',label:'Channel Letters',cat:'channel-letters'},
{i:8,name:'H Brands',label:'Wall Sign',cat:'wall-sign'},
{i:9,name:'Commercial Property',label:'Building Signage',cat:'building-signage'},
{i:10,name:'Commercial Property',label:'Building Signage',cat:'building-signage'},
{i:11,name:'Riviera 89',label:'Building Signage',cat:'building-signage'},
{i:12,name:'Riviera 89',label:'Illuminated',cat:'illuminated'},
{i:13,name:'Riviera 89',label:'Illuminated',cat:'illuminated'},
{i:14,name:'Tenant Directory',label:'Wayfinding',cat:'wayfinding'},
{i:15,name:'Smokehouse',label:'Channel Letters',cat:'channel-letters'},
{i:16,name:'Smokehouse',label:'Building Signage',cat:'building-signage'},
{i:17,name:'Florida Network Realty',label:'Interior',cat:'interior'},
{i:18,name:'Kia',label:'Corporate Identity',cat:'corporate-identity'},
{i:19,name:'Architectural Identification',label:'Building Signage',cat:'building-signage'},
{i:20,name:'Flagler Center 100',label:'Monument',cat:'monument'},
{i:21,name:'Flagler Center 200',label:'Monument',cat:'monument'},
{i:22,name:'Flagler Center 300',label:'Monument',cat:'monument'},
{i:23,name:'Flagler Center 400',label:'Monument',cat:'monument'},
{i:24,name:'Lakeside Three, Four & Five',label:'Monument',cat:'monument'},
{i:25,name:'Lakeside Five',label:'Monument',cat:'monument'},
{i:26,name:'Lakeside One & Two',label:'Monument',cat:'monument'},
{i:27,name:'Lakeside One & Two',label:'Monument',cat:'monument'},
{i:28,name:'Lakeside One & Two',label:'Monument',cat:'monument'},
{i:29,name:'The Exercise Coach',label:'Channel Letters',cat:'channel-letters'},
{i:30,name:'Retail Center',label:'Building Signage',cat:'building-signage'},
{i:31,name:'The Exercise Coach',label:'Channel Letters',cat:'channel-letters'},
{i:32,name:'TyMe Institute',label:'Building Signage',cat:'building-signage'},
{i:33,name:'TyMe Institute',label:'Architectural',cat:'architectural'},
{i:34,name:'Commercial Storefront',label:'Building Signage',cat:'building-signage'},
{i:35,name:'Jacksonville Clay Target Sports',label:'Monument',cat:'monument'},
{i:36,name:'Retail Storefront',label:'Building Signage',cat:'building-signage'}
];

const btn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(btn&&nav){
  btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}));
}

document.addEventListener('DOMContentLoaded',()=>{
  const grid=document.getElementById('gallery-grid');
  if(grid){
    grid.innerHTML=projects.map(p=>{
      const n=String(p.i).padStart(2,'0');
      const src=`${ASSET}portfolio-${n}.webp`;
      const alt=`${p.name} — ${p.label}`;
      return `<article class="gallery-card" data-category="${p.cat}">
        <button class="gallery-open" type="button" data-src="${src}" data-alt="${alt}" aria-label="Open ${p.name} project photo">
          <img src="${src}" alt="${alt}" loading="lazy">
          <span class="gallery-meta"><strong>${p.name}</strong><em>${p.label}</em></span>
        </button>
      </article>`;
    }).join('');
  }

  const filters=document.querySelectorAll('.filter');
  const cards=()=>document.querySelectorAll('.gallery-card');
  filters.forEach(b=>b.addEventListener('click',()=>{
    filters.forEach(x=>x.classList.remove('active')); b.classList.add('active');
    const target=b.dataset.filter;
    cards().forEach(card=>card.classList.toggle('is-hidden',target!=='all'&&card.dataset.category!==target));
  }));

  const lb=document.getElementById('lightbox');
  if(lb){
    const img=lb.querySelector('img');
    const close=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');img.src='';};
    document.addEventListener('click',e=>{
      const open=e.target.closest('.gallery-open');
      if(open){img.src=open.dataset.src;img.alt=open.dataset.alt||'';lb.classList.add('open');lb.setAttribute('aria-hidden','false');}
      if(e.target===lb||e.target.closest('.lightbox-close'))close();
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  }
});
