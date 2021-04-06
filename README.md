# send-whatsapp-message
Enviar lista de mensagens no whatsapp via console do navegador.


# Settings

As principais configurações index.js são:

## Altere a lista de contatos: 
```js

var listaContatos = [
    ["+55 (62) 1234-1234", "Fulano da Silva"], 
    ["+55 (62) 1234-1234", "Zé da Silva"], 
];

```

Caso tenha uma planilha com os contatos, acesse o [seabreezecompures/excel2array](https://www.seabreezecomputers.com/excel2array/) para converter uma tabela em Array Multidimensional


## Altere o templete da menssagem: 

```js

var message = `
Olá {{nome}}, tudo bem?
Está é uma mensagem de teste!
`;

```

# Utilização

...