fetch('assets/publications.json').then(r=>r.json()).then(data=>{
  let container = document.getElementById('pub-list');
  let search = document.getElementById('search');
  function render(list){
    container.innerHTML = '';
    list.forEach(p=>{
      let div=document.createElement('div');
      div.className='pub';
      div.innerHTML = '<strong>'+p.title+'</strong><br><small>'+p.authors+' — '+p.year+'</small>';
      container.appendChild(div);
    });
  }
  render(data);
  search.addEventListener('input',()=>{
    let q=search.value.toLowerCase();
    render(data.filter(p=>p.title.toLowerCase().includes(q)));
  });
});
