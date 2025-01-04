const readline = require('readline-sync');
const inventory = require('./inventory');

const menu = `
Bem-vindo ao sistema AgilStore
Escolha uma opção:
1. Adicionar Produto
2. Listar Produtos
3. Atualizar Produto
4. Excluir Produto
5. Buscar Produto
0. Sair
`;

const main = () => {
  let option;
  do {
    console.log(menu);
    option = readline.questionInt('Opcao: ');

    switch (option) {
      case 1:
        const name = readline.question('Nome do Produto: ');
        const category = readline.question('Categoria: ');
        const quantity = readline.questionInt('Quantidade em Estoque: ');
        const price = readline.questionFloat('Preco: ');
        const product = inventory.addProduct(name, category, quantity, price);
        console.log('Produto Adicionado:', product);
        break;

      case 2:
        console.table(inventory.listProducts());
        break;

      case 3:
        const updateId = readline.question('ID do Produto: ');
        const updates = {};
        if (readline.keyInYN('Deseja atualizar o Nome?')) {
          updates.name = readline.question('Novo Nome: ');
        }
        if (readline.keyInYN('Deseja atualizar a Categoria?')) {
          updates.category = readline.question('Nova Categoria: ');
        }
        if (readline.keyInYN('Deseja atualizar a Quantidade?')) {
          updates.quantity = readline.questionInt('Nova Quantidade: ');
        }
        if (readline.keyInYN('Deseja atualizar o Preco?')) {
          updates.price = readline.questionFloat('Novo Preco: ');
        }
        const updatedProduct = inventory.updateProduct(updateId, updates);
        console.log('Produto Atualizado:', updatedProduct || 'ID nao encontrado');
        break;

      case 4:
        const deleteId = readline.question('ID do Produto: ');
        const deleted = inventory.deleteProduct(deleteId);
        console.log(deleted ? 'Produto Removido' : 'ID não encontrado');
        break;

      case 5:
        const searchTerm = readline.question('Buscar por ID ou Nome: ');
        const result =
          inventory.findProductById(searchTerm) ||
          inventory.findProductByName(searchTerm);
        console.log(result || 'Nenhum produto encontrado');
        break;

      case 0:
        console.log('Saindo...');
        break;

      default:
        console.log('Opcao invalida!');
    }
  } while (option !== 0);
};

main();
