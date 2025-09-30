let currentTheme = localStorage.getItem('theme') || 'dark';
let currentLang = localStorage.getItem('lang') || 'tr';

function applyTheme(){
  if(currentTheme==='light'){document.body.classList.add('light');}
  else{document.body.classList.remove('light');}
}
function applyLang(){
  fetch('assets/'+currentLang+'.json').then(r=>r.json()).then(dict=>{
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      let key = el.getAttribute('data-i18n');
      if(dict[key]) el.textContent = dict[key];
    });
  });
}

document.getElementById('theme-toggle').onclick=()=>{
  currentTheme = (currentTheme==='light'?'dark':'light');
  localStorage.setItem('theme',currentTheme);
  applyTheme();
};
document.getElementById('lang-toggle').onclick=()=>{
  currentLang = (currentLang==='tr'?'en':'tr');
  localStorage.setItem('lang',currentLang);
  applyLang();
};
applyTheme(); applyLang();
