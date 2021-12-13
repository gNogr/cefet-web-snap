var mrc = document.querySelectorAll('.marcacao');


for(var i=0; i<mrc.length; i++){
    mrc[i].addEventListener('mouseover', function(e) {
        let m = e.currentTarget;
        let b = document.querySelector('#balaozinho');
        b.innerHTML = `<h2>${m.getAttribute('data-titulo')}</h2><p>${m.getAttribute('data-conteudo')}</p>`
        b.style.top = `${e.pageY}px`;
        b.style.left = `${e.pageX}px`;
        b.style.color = m.getAttribute('data-cor');
    });
    mrc[i].addEventListener('mousemove', function(e){
        b = document.querySelector('#balaozinho');
        b.style.top = `${e.pageY}px`;
        b.style.left = `${e.pageX}px`;
    });
    mrc[i].addEventListener('mouseout', function(e){
        b = document.querySelector('#balaozinho');
        b.innerHTML = '';
    });
}