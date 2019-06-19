const goods = [
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
const renderGoodsItem = (title, price) => {
    return `<div class="goods-item">
            <div class="image">image</div>
            <h3>${title}</h3>
            <p>${price}</p>
            </div>`;
};
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(''); // в методе join у казываем нужный разделитель
};
renderGoodsList(goods);
