const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(callback(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}
class GoodsItem {
    constructor(product_name = "none", price = 0) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `
      <div class="goods-item">
        <div class="image">image</div>
        <h3>${this.product_name}</h3>
        <p>${this.price}</p>
        <button class="add-goods-button">Добавить</button>
      </div>`;
    };
};
class GoodsList {
    constructor(el = ".goods-list") {
        this.el = el;
        this.goods = []
    };
    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            list.render();
            list.totalCostGoods();
        })
    }
    render() {
        const listHtml = this.goods.reduce((acc, good) => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            return acc += goodItem.render();
        }, '');
        document.querySelector(this.el).innerHTML = listHtml;
    };
    // метод, определяющий суммарную стоимость всех товаров.
    totalCostGoods() {
        let totalCost = 0;
        this.goods.forEach(good => {
            totalCost += good.price;
        });
        const totalCostHtml = `Все товары на сумму = ${totalCost}`;
        document.querySelector('.goods-total-cost').innerHTML = totalCostHtml;
    };
};
// Класс элемента корзины
class CastItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    };
    render() {
        // отображение корзины 
    };
};
// Класс корзины
class Cast {
    constructor() {
        this.addGoods = []; // массив с добавленными товарами
    };
    fetchCast() {
        makeGETRequest(`${API_URL}/getBasket.json`, (addGoods) => {})
    };
    addToCast() {
        // добовляем в корзину
        makeGETRequest(`${API_URL}/addToBasket.json`, (good) => {})
    };
    deleteFromCast() {
        // удаляем из корзины
        makeGETRequest(`${API_URL}/deleteFromBasket.json`, (good) => {})
    };
    totalCostCast() {
        //стоимость товаров в корзине
    };
    quantityGootCast() {
        //количество товара в корзине
    };
};
const list = new GoodsList();
list.fetchGoods();
