// Converter Convert Table to Multidimensional Array
// https://www.seabreezecomputers.com/excel2array/

var contatos = [
    ["+55 (62) 91234-1234", "1 Fulano da Silva"], 
    ["+55 (62) 9111112385", "2 Fulano da Silva"], 
];


var template = `

Olá {{nome}}, tudo bem?

Está é uma mensagem de teste!

`;


var managerAPP = {
    header: document.querySelector('header'),
    main: document.querySelector('#main'),
    sleep: function(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    clear: function(){
        var els = this.header.querySelectorAll('a.itemURL');
        els.forEach(el=>el.remove())
    },
    validURL: function(){
        var pop = document.querySelector("div._3SRfO")
        if(pop.innerText.includes('inválido'))
            throw "O número de telefone compartilhado através de url é inválido."
        return false
    },
    clickSend: async function(){
        await this.sleep(4000)
        console.info("Click send...");
        let buttons = this.main.querySelectorAll('button');
        buttons[buttons.length -1].click();
        this.clear()
        return true
    },
    sendMessage:async function(url, autoSend=false) {
        console.info("Open...");
        const header = document.querySelector('header');
        let a = document.createElement('a');
        a.setAttribute('class','itemURL');
        a.setAttribute('href', url);
        header.appendChild(a);
        a.click()
        await this.sleep(500)
        this.validURL()
        return autoSend && await this.clickSend();
    }, 
}

async function init(){

    console.info('Criando links...');

    let logs = {errors:[]}
    
    for (const [number, name] of contatos) {

        let nb = number.replace(/([()+. -])/g, '');
        let msg = template.replace(/{{nome}}/g, name);
        let url = 'https://wa.me/'+nb+'&text='+encodeURIComponent(msg)

        try {
            
            console.info('Enviando mensagem para: ', url.split("&")[0]);
            await managerAPP.sendMessage(url, true)

        } catch (e) {
            logs.errors.push([number, name, e]) 
            console.info(`Erro ao enviar mensagem para ${nb}, ${url.split("&")[0]}`)
            console.warn("Erro encontrado:", e)
        }
    }

    console.group("Saída:");
    console.error("Erros encontrados:")
    console.table(logs.errors, [2,3,4])
    console.groupEnd();
    
}

init()
