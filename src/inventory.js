const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');

// Função para carregar dados do JSON
const loadInventory = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Função para salvar dados no JSON
const saveInventory = (inventory) => {
  fs.writeFileSync(dataPath, JSON.stringify(inventory, null, 2));
};

const inventory = {
  data: loadInventory(),

  addProduct(name, category, quantity, price) {
    const id = Date.now().toString(); // Gera um ID único
    const newProduct = { id, name, category, quantity, price };
    this.data.push(newProduct);
    saveInventory(this.data);
    return newProduct;
  },

  listProducts() {
    return this.data;
  },

  findProductById(id) {
    return this.data.find((product) => product.id === id);
  },

  findProductByName(name) {
    return this.data.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  },

  updateProduct(id, updates) {
    const product = this.findProductById(id);
    if (!product) return null;
    Object.assign(product, updates);
    saveInventory(this.data);
    return product;
  },

  deleteProduct(id) {
    const index = this.data.findIndex((product) => product.id === id);
    if (index === -1) return false;
    this.data.splice(index, 1);
    saveInventory(this.data);
    return true;
  },
};

module.exports = inventory;
