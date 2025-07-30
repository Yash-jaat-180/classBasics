let productList = [];

const loadData = (renderProductListData) => {
    setTimeout(() => {
        productList = productsListFromServer;
        renderProductListData();
    }, 2000)
}

const renderProduct = () => {

    const renderProductListData = () => {
        if (productList.length == 0) {
            document.getElementById('products').innerHTML = '<h3>Loading...</h3>';
            return;
        }
        document.getElementById('products').innerHTML = `
        <table>
                <thead>
                    <tr>
                        <th>Product id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
            <tbody>
                ${productList.map((product, idx) => (
            `
                    <tr>
                    <td>${idx}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    </tr>
                    `
        )).join('')
            }
            </tbody>
        </table>
    `;
    }
    loadData(renderProductListData);
    renderProductListData();

}
renderProduct();
