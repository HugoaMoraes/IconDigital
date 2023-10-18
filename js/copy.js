function copiarTexto(element) {
    var email = element.getAttribute('value');

    var el = document.createElement('textarea');
    el.value = email;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    var selecionado =
        document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (selecionado) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selecionado);
    }

    var copiado = document.createElement('div');
    copiado.className = 'copiado-popup';
    copiado.textContent = 'Contato copiado!';

    document.body.appendChild(copiado);

    setTimeout(function () {
        copiado.remove();
    }, 2000);
}
