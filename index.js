// Converter Convert Table to Multidimensional Array
// https://www.seabreezecomputers.com/excel2array/

var listaContatos = [
    ["+55 (62) 1234-1234", "Fulano da Silva"], 
    ["+55 (62) 1234-1234", "Zé da Silva"], 
];


var message = `

Olá {{nome}}, tudo bem?

Está é uma mensagem de teste!

`;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sendMessage ( ) {
    var main = document.querySelector('#main');
    var event = new InputEvent('input', {
        bubbles: true
    });
    var textbox = main.querySelector('div._2_1wd');
    textbox.dispatchEvent(event);
    var buttons = main.querySelectorAll('button');
    buttons[buttons.length -1].click();
}
function deleteUL(header){
    try {
        var elUL = header.querySelector('ul.ulURL');
        elUL.remove();
    } catch (e) { }
}
function createUL( ){
    var header = document.querySelector('header');
    var ul = document.createElement('ul');
    deleteUL(header);
    ul.setAttribute('class', 'ulURL');
    header.appendChild(ul);
    return ul;
}
function createLI(listContact){
    var ul = createUL( );
    listContact.forEach(([number, name])=>{
        var li = document.createElement('li');
        var a = document.createElement('a');
        
        let msg = message.replace(/{{nome}}/g, name);
        let nb = number.replace(/([()+. -])/g, '');
        a.setAttribute('class','itemURL')
        a.setAttribute('href','https://wa.me/'+nb+'&text='+encodeURIComponent(msg));
        li.append(a);
        ul.appendChild(li);
    });
    return document.querySelectorAll('a.itemURL');
}

(async ()=>{

    console.log('Criando links...');
    
    var itensURL = createLI(listaContatos);
    
    for (const item of itensURL) {
        
        console.log('Enviando mensagem para: ', item.href);
        
        item.click();
        await sleep(3000);
        
        sendMessage()
        await sleep(2000);
    }
})()