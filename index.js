class Store {
    constructor(goods) {
      this.goods = goods;
    }
  
    sortByPrice(descending = true) {
      this.goods.sort((a, b) => {
        return descending ? b.price - a.price : a.price - b.price;
      });
    }
  
    searchByName(keyword) {
      return this.goods.filter(item => 
        item.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
  
    showGoods(goods = this.goods) {
      goods.forEach(item => {
        console.log(`Название: ${item.name}, Цена: ${item.price}`);
      });
    }
  }
  
  let goods = [
    { name: 'Яблоко', price: 300 },
    { name: 'Помидор', price: 150 },
    { name: 'Вишня', price: 500 }
  ];
  
  const store = new Store(goods);
  
  store.sortByPrice();
  console.log("Сортировка по убыванию цены:");
  store.showGoods();
  
  store.sortByPrice(false);
  console.log("Сортировка по возрастанию цены:");
  store.showGoods();
  
  const searchResult = store.searchByName('Яблоко');
  console.log("Результат поиска по названию:");
  store.showGoods(searchResult);
  