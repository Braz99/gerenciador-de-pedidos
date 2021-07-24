# Site simples que simula registros de pedidos
Link do projeto: https://gerenciadorpedidos.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/45247886-24a7-480a-ac78-d92b37a41266/deploy-status)](https://gerenciadorpedidos.netlify.app/)

## Sobre
Este site foi feito com base no desafio do treinamento hiring coders, que é patrocinado pela VTEX. O desafio era criar um sistema para registrar cliente e produto. 
Ele simula uma loja de doces de pote, que registra o pedido e o endereço de entrega, todos os dados são armazenados no localstorage, por ser apenas para fins didáticos. 

Ferramentas usadas: Toastify, React Router DOM, localStorage, e Hooks do React.



## Instalação
Você vai precisar ter instalado em sua máquina:

[GIT](https://git-scm.com)

[Node.js](https://nodejs.org/en/). 

E também de um editor de código, de preferência o [VSCode](https://code.visualstudio.com/)

### Passos

- Primeiro clone o projeto, use o terminal git bash, com o comando <code>git clone https://github.com/Braz99/gerenciador-de-pedidos</code>
- Depois abra a pasta no terminal usando o comando <code> cd caminho da pasta</code>
- Com a pasta selecionada é hora de instalar todas as dependências do projeto com o comando <code>npm install</code>
- Para executar a aplicação em modo de desenvolvimento use o comando <code>npm start</code>

 O servidor inciará na porta:3000 - acesse http://localhost:3000
 
 ## Estruturação do projeto
 
 Este projeto tem 3 páginas, encontradas na pasta src/pages, que são as seguintes: 
 
 - Home: Com os componentes Navbar e MainHome. E tem a função de registrar os pedidos.
 - List: Com os componentes Navbar e MainList. E tem a função de listar todos os registros e de fornecer a opção de remover;
 - Delete: Com os componentes Navbar e MaindDelete. E tem a função de apagar todos os registros do localStorage.

### Informações 
- As rotas se encontram no arquivo __routes.js__, dentro de __src__;
- Todos os componentes se encontram na pasta __src/components__;
- A lógica de listar registros(generate_list), remover o pedido selecionado(remove) e apagar todos os registros(delete_all) se encontra na pasta __src/logic_app__ ;
- A lógica de registrar está no componente __MainHome__;
- Todo o estilo do projeto se encontra na pasta __src/styles__.

## Licença 
License MIT

## Autor 
Fabrício Brazil
