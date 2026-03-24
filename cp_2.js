const API= "https://www.course-api.com/javascript-store-products"
// Step 3
function fetchProductsThen() {
    fetch(API)
        .then((response) => response.json())
            .then((products) => {
                products.forEach((product) => {
                    console.log(product.fields.name);
                });
            })
            .catch((error) => {
                console.error(`Fetch error (then): ${error.message}`);

            });
        };
        // Step 4
    async function fetchProductsAsync() {
        try {
            const response = await fetch(API_URL);
            const products = await response.json();
            displayProducts(products);
            } catch (error) {
    handleError(error);
  }
}





fetchProductsThen();
fetchProductsAsync();