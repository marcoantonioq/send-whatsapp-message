# send-whatsapp-message
Enviar lista de mensagens no whatsapp via console do navegador.

# Configurações
Como utilizar:

1. Abra o Whatsapp web
2. Abra o console do navegador com a tecla de atalho <Ctrl+Shift+J>
3. Copie o código index.js <Ctrl+C> e cole no console aberto <Ctrl+V>
4. Preencha o array contatos com os respectivos Telefones e Nomes

```js

var contatos = [
    ["+55 (62) 1234-1234", "Fulano da Silva"], 
    ["+55 (62) 1234-1234", "Zé da Silva"], 
];

```

5. Altere o template da mensagem.
```js

var template = `
Olá {{nome}}, tudo bem?
Está é uma mensagem de teste!
`;

```
6. Pressione enter

# Preview
![VIEW](https://raw.githubusercontent.com/marcoantonioq/send-whatsapp-message/main/demo/demo.gif)