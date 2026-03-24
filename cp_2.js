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
// step 5 
function displayProducts(products) {
  const container = document.querySelector("#product-container");
  container.innerHTML = "";

  const first5 = products.slice(0, 5);

  first5.forEach((product, index) => {
    const { name, price, images } = product.fields;

    // this creates price
    const formattedPrice = (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    const imgUrl =
      images && images.length > 0
        ? images[0].url
        : "https://via.placeholder.com/400x300?text=No+Image";

    // Build card
    const card = document.createElement("article");
    card.classList.add("product-card");
    // changes animation per delay
    card.style.animationDelay = `${index * 0.12}s`;

    const imgWrap = document.createElement("div");
    imgWrap.classList.add("product-img-wrap");

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = name;
    img.loading = "lazy";

    imgWrap.appendChild(img);

    const body = document.createElement("div");
    body.classList.add("product-body");

    const nameEl = document.createElement("h2");
    nameEl.classList.add("product-name");
    nameEl.textContent = name;

    const priceEl = document.createElement("p");
    priceEl.classList.add("product-price");
    priceEl.textContent = formattedPrice;

    body.appendChild(nameEl);
    body.appendChild(priceEl);

    card.appendChild(imgWrap);
    card.appendChild(body);

    container.appendChild(card);
  });
}
// step 6 this is the reusable error handler
function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
}


// step 7 (this calls each function)
fetchProductsThen();
fetchProductsAsync();