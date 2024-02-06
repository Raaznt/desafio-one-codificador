let firstClick = true;
let firstText = true;

function encode(text) {
    let result = "";
    if(typeof(text) == "string") {
        text = text.toLowerCase();
        text = text.replaceAll("e", "enter");
        text = text.replaceAll("i", "imes");
        text = text.replaceAll("a", "ai");
        text = text.replaceAll("o", "ober");
        text = text.replaceAll("u", "ufat");
        result = text;
    }
    return result
}

function decode(text) {
    let result = "";
    if(typeof(text) == "string") {
        text = text.toLowerCase();
        text= text.replaceAll("enter", "e");
        text = text.replaceAll("imes", "i");
        text = text.replaceAll("ai", "a");
        text = text.replaceAll("ober", "o");
        text = text.replaceAll("ufat", "u");
        result = text;
    }
    return result;
}

function clearField(id) {
    let tag = document.getElementById(id);
    if(tag.value == "Digite seu texto" && firstClick)
        tag.value = '';
        firstClick = false;
}

function parseText(method) {
    let input_text = document.getElementById("texto__entrada");
    let decode_button = document.querySelector(".botao__descriptografar");
    let copy_button = document.querySelector(".botao__copiar");
    let output_text;

    /*Se for o primeiro texto inserido*/
    if (firstText) {
        /*Obtém os componentes associados a apresentacao de resultados*/
        const my_div = document.querySelector(".apresentar__resultado");
        const my_img = document.querySelector(".apresentar__imagem");
        const msg_1 = document.querySelector(".apresentar__mensagem1");
        const msg_2 = document.querySelector(".apresentar__mensagem2");

        /*Remove componentes do container (div)*/
        my_div.removeChild(msg_1);
        my_div.removeChild(msg_2);
        my_div.removeChild(my_img);

        /*Cria um elemento text area para o texto decodificado */
        output_text = document.createElement('textarea');
        output_text.id = 'texto__saida';
        output_text.readOnly = true;
        my_div.appendChild(output_text);

        /*Habilita os botoes de descriptografar e copiar */
        copy_button.removeAttribute('disabled');
        decode_button.removeAttribute('disabled');

    } else {
        output_text = document.getElementById('texto__saida');    
    }

    output_text.value = method(input_text.value);
    firstText = false;
}

function clearTextArea() {
    clearField("texto__entrada");
}

function encodeText() {
    parseText(encode);
}

function decodeText() {
    parseText(decode);
}

function copyText() {
    let text = document.getElementById('texto__saida');
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
}