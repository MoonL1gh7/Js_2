const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = ({ title = 'Some product', price = 100000, picture = 'https://placehold.it/200x150' }) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${picture}" alt="no picturre">
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = (list) => {
    // Запятые были напечатаны, потому что renderProducts вернул массив.
    // При объединении всех элементов массива в одну строку запятые были удалены.
    document.querySelector('.products').innerHTML = list.map((item) => renderProduct(item)).join('');
};

renderProducts(products);
