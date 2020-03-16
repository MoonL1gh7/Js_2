class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    _sumOfProducts () {
        return this.goods.reduce((accum, product) => accum += product.price, 0);
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                    <h3>${this.title}</h3>
                    <img src="${this.img}" alt="Some img">
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`;
    }
}


class Basket {
    constructor() {
        this.products = [];
    }
    
    addProduct(BasketItem) {}

    removeProduct(BasketItem) {}

    clearBasket() {}

    renderTotalSum() {}

    buy() {}
}

class BasketItem {
    constructor() {
        this.productId = product.id;
        this.title = product.title;
        this.price = product.price;
        this.amount = amount;

    }

    increase(amount) {}
 
    decrease(amount) {}


}

const list = new ProductList();
console.log(list._sumOfProducts())


