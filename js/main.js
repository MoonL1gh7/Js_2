const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

let getRequest = (API, cb) => {
	fetch(API)
		.then((result) => result.json())
		.then((data) => {
			console.log(data);
			cb(xhr.responseText);
		})
		.catch((error) => {
			console.log('Error!', error)
		});
};		

// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };


class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        // this._fetchProducts();
        this._getProducts()
            .then((data) => {
                this.goods = [...data];
                this.render();
            });
    }

  // _fetchProducts() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     this.goods = JSON.parse(data);
  //     this.render();
  //     console.log(this.goods);
  //   });
  // }

    _getProducts() {
        return fetch(API)
            .then(result => result.json())
            .catch(error => {
                console.log('Error!', error);
            });
    }

    calcSum(){
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        // this.title = product.title;
        this.title = product.product_name
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

new ProductList();

