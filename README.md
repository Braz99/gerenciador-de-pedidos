# Site de registros de pedidos
Link do projeto: https://gerenciadorpedidos.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/45247886-24a7-480a-ac78-d92b37a41266/deploy-status)](https://gerenciadorpedidos.netlify.app/)

## Sobre
Este site foi feito com base no desafio do treinamento hiring coders, que é patrocinado pela VTEX. O desafio era criar um sistema para registrar cliente e produto. 
Ele simula uma loja de doces de pote, que registra o nome do cliente, o pedido  e o endereço de entrega, armazenando estes dados no localstorage(por ser apenas para fins didáticos). 

Ferramentas usadas: Toastify, React Router DOM, localStorage, e contextAPI.


## Instalação
Você vai precisar ter instalado em sua máquina:

[GIT](https://git-scm.com)

[Node.js](https://nodejs.org/en/). 

E também de um editor de código, de preferência o [VSCode](https://code.visualstudio.com/)

### Passos

- Primeiro clone o projeto, use o terminal git bash, com o comando <code>git clone https://github.com/Braz99/gerenciador-de-pedidos.git</code>
- Depois abra a pasta no terminal usando o comando <code> cd caminho da pasta</code>
- Com a pasta selecionada é hora de instalar todas as dependências do projeto com o comando <code>npm install</code>
- Para executar a aplicação em modo de desenvolvimento use o comando <code>npm start</code>

 O servidor inciará na porta:3000 - acesse http://localhost:3000
 
 ## Estruturação do projeto
 
 Este projeto tem 3 páginas, encontradas na pasta src/pages, que são as seguintes: 
 
 - Home: Renderiza o componente MainHome, com a função de registrar os pedidos.
 - List: Renderiza o componente MainList, com a função de listar todos os registros e de fornecer a opção de remover;
 - Delete: Renderiza o componente MaindDelete, com a função de apagar todos os registros do localStorage.

### Informações 
- As rotas se encontram no arquivo __routes.js__, dentro de __src__;
- Todos os componentes se encontram na pasta __src/components__;
- Toda a lógica, a mais complexa, se encontra em hooks personalizados, na pasta __src/hooks__;
- Na pasta __provider__ fornece a lista de clientes e seus respectivos pedidos para uso na aplicação;
- Todo o estilo do projeto se encontra na pasta __src/styles__, que contém o estilo global(App.css), o estilo dos alerts(toastify) e o estilo dos componentes na pasta __components__ .

## Licença 
License MIT

## Autor 
Fabrício Brazil

