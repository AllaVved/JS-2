class GoodsItem {
    constructor(title = "none", price = 0) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
      <div class="goods-item">
        <div class="image">image</div>
        <h3>${this.title}</h3>
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
        this.goods = [

            {
                title: "Щенок пуделя",
                price: 1000
            }
            , {
                title: "Утка с утенком",
                price: 1500
            }
            , {
                title: "Кукла Маша",
                price: 1700
            }
            , {
                title: "Пупс Саша",
                price: 2000
            }
            , {
                title: "Джип",
                price: 1200
            }
            , {
                title: "Формула 1",
                price: 700
            }
            , {
                title: "Лама Белая",
                price: 500
            }
            , ];
    };
    render() {
        const listHtml = this.goods.reduce((acc, good) => {
            const goodItem = new GoodsItem(good.title, good.price);
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
class BasketItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    };
    render() {
        // отображение корзины 
    };
};
// Класс корзины
class Basket {
    constructor() {
        this.addGoods = []; // массив с добавленными товарами
    };
    addToBasket() {
        // Добавление товара в корзину 
    };
    deleteFromBasket() {
        // Удаление товара из корзины        
    };
    totalCostBasket() {
        //стоимость товаров в корзине
    };
    quantityGootBasket() {
        //количество товара в корзине
    };
};
const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalCostGoods();
