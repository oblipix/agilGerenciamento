# AgilStore - Sistema de Gerenciamento de Produtos



https://github.com/user-attachments/assets/73cc93dc-bc15-4017-93da-e313c03f5c9c



#### Descrição

A AgilStore é uma aplicação em Node.js para gerenciamento de inventário de produtos em uma loja. A aplicação permite realizar operações como adicionar, listar, atualizar, excluir e buscar produtos. Os dados são persistidos em um arquivo JSON para garantir que o inventário seja mantido entre as execuções.

### Funcionalidades

Adicionar Produto:

Insira Nome, Categoria, Quantidade e Preço.

Um ID único é gerado automaticamente.

Listar Produtos:

Exibe todos os produtos cadastrados em formato de tabela.

Atualizar Produto:

Atualize os campos de um produto existente pelo ID.

Excluir Produto:

Remova um produto pelo ID.

Buscar Produto:

Busque produtos pelo ID ou pelo nome.

Persistência de Dados:

Os dados são armazenados no arquivo data.json.



### Tecnologias Utilizadas

Node.js

Módulo readline-sync para entrada de dados no terminal

Persistência de dados com JSON


#### Fazendo o projeto funcionar:

Navegue até a pasta onde está o projeto:

cd src

Execute o arquivo principal app.js com o Node.js:

node app.js



##### O menu principal será exibido no terminal:

Bem-vindo ao sistema AgilStore
Escolha uma opção:
1. Adicionar Produto
2. Listar Produtos
3. Atualizar Produto
4. Excluir Produto
5. Buscar Produto
0. Sair
