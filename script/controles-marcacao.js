let chk = document.querySelector("#visibilidade-das-marcacoes");
let ft = document.querySelector('.foto-anotada');

chk.addEventListener('change', function(e) {
    if(this.checked)
        ft.classList.add('marcacoes-ocultas');
    else
        ft.classList.remove('marcacoes-ocultas');
});

var mrc = document.querySelectorAll('.marcacao');

for(var i=0; i<mrc.length; i++){
    mrc[i].addEventListener('click', function(e) {
        let m = e.currentTarget;
        let p = document.querySelector('.selecionada');
        p.classList.remove('selecionada');
        m.classList.add('selecionada');
        //atualiza section.controles
        document.querySelector('#x-da-marcacao').value = parseInt(m.style.left);
        document.querySelector('#y-da-marcacao').value = parseInt(m.style.top);
        document.querySelector('#largura-da-marcacao').value = parseInt(m.style.width);
        document.querySelector('#altura-da-marcacao').value = parseInt(m.style.height);
        document.querySelector('#titulo-da-marcacao').value = m.getAttribute('data-titulo');
        document.querySelector('#conteudo-da-marcacao').value = m.getAttribute('data-conteudo');
        document.querySelector('#cor-da-marcacao').value = m.getAttribute('data-cor');

        //Usando o valor de data-formato, é possível fazer algo assim:
        //document.querySelector(`input[value="${m.getAttribute('data-formato')}"]`).checked = true;

        //No entanto, já que a presença do atributo data-formato não era esperada, pode-se fazer isso:
        document.querySelector(`input[value="${m.classList.contains('formato-retangular') ? "formato-retangular":"formato-oval"}"]`).checked = true;
        
    });
}

function updateMarcacaoStyle(target_style){ // <-- Isso é uma factory
    return function (e){
    let d = e.currentTarget;
    let p = document.querySelector('.selecionada');
    p.style[target_style] = d.value + 'px';
}}

function updateMarcacaoAttrib(target_attribute){ // <-- Isso é uma factory
    return function (e){
    let d = e.currentTarget;
    let p = document.querySelector('.selecionada');
    p.setAttribute(target_attribute, d.value);
}}

function updateMarcacaoAttrib(target_attribute){ // <-- Isso é uma factory
    return function (e){
    let d = e.currentTarget;
    let p = document.querySelector('.selecionada');
    p.setAttribute(target_attribute, d.value);
}}

function updateShape(e){
    let v = document.querySelector('input[name="formato-da-marcacao"]:checked').value
    console.log(v);
    let p = document.querySelector('.selecionada');
    p.classList.remove(v == "formato-oval" ? "formato-retangular":"formato-oval");
    p.classList.add(v == "formato-retangular" ? "formato-retangular":"formato-oval")
}

document.querySelector('#x-da-marcacao').addEventListener("change", updateMarcacaoStyle('left'));
document.querySelector('#y-da-marcacao').addEventListener("change", updateMarcacaoStyle('top'));
document.querySelector('#largura-da-marcacao').addEventListener("change", updateMarcacaoStyle('width'));
document.querySelector('#altura-da-marcacao').addEventListener("change", updateMarcacaoStyle('height'));
document.querySelector('#titulo-da-marcacao').addEventListener("change", updateMarcacaoAttrib('data-titulo'));
document.querySelector('#conteudo-da-marcacao').addEventListener("change", updateMarcacaoAttrib('data-conteudo'));
document.querySelector('#cor-da-marcacao').addEventListener("change", updateMarcacaoAttrib('data-cor'));
document.querySelector(`input[value="formato-retangular"]`).addEventListener("change", updateShape);
document.querySelector(`input[value="formato-oval"]`).addEventListener("change", updateShape);