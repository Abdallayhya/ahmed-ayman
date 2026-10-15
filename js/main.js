(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
/* ===== Edit your contact info here ===== */
const C={phone:"[PHONE]",wa:"20XXXXXXXXXX",email:"[EMAIL]",ig:"#",fb:"#"};
/* ===== Inline SVG icons (stroke paths) ===== */
const P={menu:"M3 6h18M3 12h18M3 18h18",moon:"M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z",sun:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
dumbbell:"M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11",flame:"M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z",activity:"M22 12h-4l-3 9L9 3l-3 9H2",
apple:"M12 7c-2-2-7-1-7 5 0 4 3 8 5 8 1 0 1-.5 2-.5s1 .5 2 .5c2 0 5-4 5-8 0-6-5-7-7-5zM12 7c0-2 1-4 3-5",globe:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20",
home:"M3 11l9-8 9 8v10H3zM9 21v-7h6v7",cap:"M22 9L12 4 2 9l10 5 10-5zM6 11v5c3 3 9 3 12 0v-5",phone:"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
mail:"M4 4h16v16H4zM4 4l8 9 8-9",wa:"M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z",instagram:"M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
facebook:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",chevL:"M15 18l-6-6 6-6",chevR:"M9 18l6-6-6-6"};
const ic=(n,s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n]}"/></svg>`;

const page=document.body.dataset.page;
const pages=[["home","index.html"],["about","about.html"],["services","services.html"],["programs","programs.html"],["results","transformations.html"],["gallery","gallery.html"],["reviews","testimonials.html"],["contact","contact.html"]];
let lang=localStorage.getItem("lang")||"en";
let theme=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
const t=k=>(I18N[lang]&&I18N[lang][k])||I18N.en[k]||k;

/* ===== Shared navbar, footer, WhatsApp button ===== */
$("#nav").innerHTML=`<header class="nav"><div class="container nav-in"><a class="logo" href="index.html" aria-label="Home">AA<span>.</span></a>
<nav id="links" class="links" aria-label="Main">${pages.map(([k,u])=>`<a href="${u}" data-i18n="nav_${k}" ${k===page?'class="active" aria-current="page"':""}></a>`).join("")}</nav>
<div class="tools"><button id="lt" class="icon-btn" aria-label="Switch language"></button><button id="tt" class="icon-btn" aria-label="Toggle theme"></button><button id="mb" class="icon-btn burger" aria-label="Menu" aria-expanded="false">${ic("menu")}</button></div></div></header>`;
$("#foot").innerHTML=`<footer><div class="container f-in"><div><a class="logo" href="index.html">Ahmed Ayman<span>.</span></a><p class="lead" data-i18n="foot_about"></p></div>
<div><h3 data-i18n="foot_links"></h3><div class="f-links">${pages.map(([k,u])=>`<a href="${u}" data-i18n="nav_${k}"></a>`).join("")}</div></div>
<div><h3 data-i18n="follow"></h3><div class="soc"><a data-c="ig" aria-label="Instagram" target="_blank" rel="noopener">${ic("instagram")}</a><a data-c="fb" aria-label="Facebook" target="_blank" rel="noopener">${ic("facebook")}</a></div></div></div>
<p class="copy">© ${new Date().getFullYear()} Ahmed Ayman. <span data-i18n="rights"></span></p></footer>
<a class="wa" id="wa" href="#" target="_blank" rel="noopener" aria-label="WhatsApp">${ic("wa",28)}</a>`;

/* ===== Apply language + theme ===== */
function apply(){
  const h=document.documentElement;
  h.lang=lang;h.dir=lang==="ar"?"rtl":"ltr";h.dataset.theme=theme;
  $$("[data-i18n]").forEach(e=>e.textContent=t(e.dataset.i18n));
  $$("[data-i18n-label]").forEach(e=>e.setAttribute("aria-label",t(e.dataset.i18nLabel)));
  $$("[data-icon]").forEach(e=>e.innerHTML=ic(e.dataset.icon));
  $$("[data-c]").forEach(e=>{const v=C[e.dataset.c];if(e.tagName==="A"){e.href=(e.dataset.href||"")+v;if(!e.children.length&&e.dataset.href)e.textContent=v}});
  $$("#wa,#wabtn").forEach(a=>a.href="https://wa.me/"+C.wa);
  $("#lt").textContent=lang==="ar"?"EN":"عربي";
  $("#tt").innerHTML=ic(theme==="dark"?"sun":"moon");
  const k=pages.find(p=>p[0]===page);
  document.title=t("name")+" | "+t("nav_"+(k?k[0]:"home"));
}
$("#lt").onclick=()=>{lang=lang==="ar"?"en":"ar";localStorage.setItem("lang",lang);apply()};
$("#tt").onclick=()=>{theme=theme==="dark"?"light":"dark";localStorage.setItem("theme",theme);apply()};
$("#mb").onclick=e=>{const o=$("#links").classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)};
apply();

/* ===== Scroll reveal ===== */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));

/* ===== Gallery lightbox ===== */
const lb=$("#lb");
if(lb){const box=$("#lbc"),close=()=>lb.classList.remove("open");
  $$(".g-item").forEach(i=>i.onclick=()=>{box.innerHTML=i.innerHTML;lb.classList.add("open");$("#lbx").focus()});
  $("#lbx").onclick=close;lb.onclick=e=>{if(e.target===lb)close()};
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()})}

/* ===== Testimonials slider ===== */
const sl=$$(".slide");
if(sl.length){let i=0;const go=n=>{sl[i].classList.remove("on");i=(n+sl.length)%sl.length;sl[i].classList.add("on")};
  $("#prev").onclick=()=>go(i-1);$("#next").onclick=()=>go(i+1);
  let timer=setInterval(()=>go(i+1),6000);$(".slider").addEventListener("pointerdown",()=>clearInterval(timer))}

/* ===== Contact form validation ===== */
const f=$("#cf");
if(f)f.addEventListener("submit",e=>{e.preventDefault();let ok=true;
  const chk=(n,test,msg)=>{const el=f.elements[n],v=el.value.trim(),bad=!test(v);
    $(`[data-err=${n}]`,f).textContent=bad?t(msg):"";el.setAttribute("aria-invalid",bad);if(bad)ok=false};
  chk("name",v=>v.length>=2,"e_name");chk("phone",v=>/^[+\d\s()-]{7,}$/.test(v),"e_phone");
  chk("email",v=>!v||/^\S+@\S+\.\S+$/.test(v),"e_email");chk("message",v=>v.length>=5,"e_msg");
  $("#fs").textContent=ok?t("f_ok"):"";if(ok)f.reset()});
})();
