window.addEventListener("load", () => {

    let featured_cards = document.querySelector("#featured_cards");
    let products_card = document.querySelector("#products_card")

    const items = [
        {
            id: 0,
            img: "/src/img/cat-1.png",
            name: "Vegetables",
            count: 1
        },
        {
            id: 1,
            img: "/src/img/cat-2.png",
            name: "Strawberry",
            count: 2
        },
        {
            id: 2,
            img: "/src/img/cat-3.png",
            name: "Snack",
            count: 3
        },
        {
            id: 3,
            img: "/src/img/cat-4.png",
            name: "Black Plum",
            count: 4
        },
        {
            id: 4,
            img: "/src/img/cat-5.png",
            name: "Custard Apple",
            count: 5
        },
        {
            id: 5,
            img: "/src/img/cat-9.png",
            name: "Red Apple",
            count: 6

        },
        {
            id: 6,
            img: "/src/img/cat-11.png",
            name: "Peach",
            count: 7
        },
        {
            id: 7,
            img: "/src/img/cat-12.png",
            name: "Oganic Kiwi",
            count: 8
        },
        {
            id: 8,
            img: "/src/img/cat-13.png",
            name: "Cake & Milk",
            count: 9
        },
        {
            id: 9,
            img: "/src/img/cat-14.png",
            name: "Coffee & Tea",
            count: 10
        },
    ]

    items.map((item) => {

        const content = ` <div class="card">
    <div class="card_img">
      <img src=${item.img} alt="" />
    </div>
    <div class="center_content">
      <h3>${item.name}</h3>
      <p><span>${item.count}</span>items</p>
    </div>
  </div>`
        featured_cards.innerHTML += content
    })



    // const products = [
    //     {
    //         id: 0,
    //         img1: "/src/img/product-1-1.jpg",
    //         img2: "/src/img/product-1-2.jpg",
    //         title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    //         price: 28.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 1,
    //         img1: "/src/img/product-2-1.jpg",
    //         img2: "/src/img/product-2-2.jpg",
    //         title: "All Natural Italian-Style Chicken Meatballs",
    //         price: 44.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 2,
    //         img1: "/src/img/product-3-1.jpg",
    //         img2: "/src/img/product-3-2.jpg",
    //         title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    //         price: 21.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 3,
    //         img1: "/src/img/product-4-1.jpg",
    //         img2: "/src/img/product-4-2.jpg",
    //         title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    //         price: 66.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 4,
    //         img1: "/src/img/product-5-1.jpg",
    //         img2: "/src/img/product-5-2.jpg",
    //         title: "Blue Diamond Almonds Lightly Salted Vegetables",
    //         price: 78.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 5,
    //         img1: "/src/img/product-6-1.jpg",
    //         img2: "/src/img/product-6-2.jpg",
    //         title: "Chobani Complete Vanilla Greek Yogurt",
    //         price: 98.85,
    //         oldPrice: 32.5

    //     },
    //     {
    //         id: 6,
    //         img1: "/src/img/product-7-1.jpg",
    //         img2: "/src/img/product-7-2.jpg",
    //         title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
    //         price: 18.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 7,
    //         img1: "/src/img/product-8-1.jpg",
    //         img2: "/src/img/product-8-2.jpg",
    //         title: "Encore Seafoods Stuffed Alaskan Salmon",
    //         price: 24.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 8,
    //         img1: "/src/img/product-9-1.jpg",
    //         img2: "/src/img/product-9-2.jpg",
    //         title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    //         price: 20.85,
    //         oldPrice: 32.5
    //     },
    //     {
    //         id: 9,
    //         img1: "/src/img/product-10-1.jpg",
    //         img2: "/src/img/product-10-2.jpg",
    //         title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    //         price: 77.85,
    //         oldPrice: 32.5
    //     }
    // ]

    // products.map((item) => {
    //     const content = ` <div class="product_card">
    //         <div class="prod_image1">
    //           <img src=${item.img1} alt="" class="prod_img" />
    //         </div>
    //         <div class="prod_image2">
    //           <img src=${item.img2} alt="" />
    //           <div class="wishlist">
    //           <i class="fa-regular fa-heart"></i>
    //           <i class="fa-solid fa-code-compare"></i>
    //           <i class="fa-regular fa-eye"></i>
    //         </div>
    //         </div>
    //         <div class="product_card_content">
    //           <span>Snack</span>
    //           <h2 class="product_title">${item.title}</h2>
    //           <div class="rating">
    //             <i class="fa-solid fa-star"></i>
    //             <i class="fa-solid fa-star"></i>
    //             <i class="fa-solid fa-star"></i>
    //             <i class="fa-solid fa-star"></i>
    //             <i class="fa-regular fa-star-half-stroke"></i>
    //           </div>
    //           <p>by <span>nestfood</span></p>
    //           <div class="product_card_buttom">
    //             <div class="prod_price">
    //               <b>$${item.price}</b>
    //               <s>$${item.oldPrice}</s>
    //             </div>
    //             <button class="add" type="button"><img src="./src/img/icon-cart.svg" style="width: 20px;height: 20px;" alt="">
    //               Add</button>
    //           </div>
    //         </div>
    //       </div>`

    //     products_card.innerHTML += content;
    // })

    fetch("db.json")
        .then(res => res.json())
        .then(data => {
            data.products.forEach(item => {
                const content = ` <div class="product_card">
                    <div class="prod_image1">
                      <img src=${item.img1} alt="" class="prod_img" />
                    </div>
                    <div class="prod_image2">
                      <img src=${item.img2} alt="" />
                      <div class="wishlist">
                      <i class="fa-regular fa-heart"></i>
                      <i class="fa-solid fa-code-compare"></i>
                      <i class="fa-regular fa-eye"></i>
                    </div>
                    </div>
                    <div class="product_card_content">
                      <span>Snack</span>
                      <h2 class="product_title">${item.title}</h2>
                      <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                      </div>
                      <p>by <span>nestfood</span></p>
                      <div class="product_card_buttom">
                        <div class="prod_price">
                          <b>$${item.price}</b>
                          <s>$${item.oldPrice}</s>
                        </div>
                        <button data-id="${item.id}" data-price="${item.price}" class="add" type="button"><img src="./src/img/icon-cart.svg" style="width: 20px;height: 20px;" alt="">
                          Add</button>
                      </div>
                    </div>
                  </div>`
                products_card.innerHTML += content;

                // Add to Cart


                let cartIcon = document.querySelector(".cart_icon");
                let cart = document.querySelector(".cart");
                let close_cart = document.querySelector("#cart_close");

                cartIcon.addEventListener("click", () => {
                    cart.classList.add("active");
                })

                close_cart.addEventListener("click", () => {
                    cart.classList.remove("active")
                })

                if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", start)
                } else {
                    start();
                }

                // ===============START======================
                function start() {
                    addEvents();
                    update()
                }


                // ===============UPDATE======================

                function update() {
                    addEvents();
                    updateTotal();
                }


                // ===============ADD EVENTS======================
                function addEvents() {

                    let removeItem_btns = document.querySelectorAll(".cart_remove");

                    removeItem_btns.forEach(btn => {
                        btn.addEventListener("click", handle_removeCartItem)
                    })

                    let quantity_inputs = document.querySelectorAll(".cart_quantity");
                    quantity_inputs.forEach(input => {
                        input.addEventListener("change", handle_changeItemQuantity)
                    })

                    let addCartBtns = document.querySelectorAll(".add");
                    addCartBtns.forEach(btn => {
                        btn.addEventListener("click", handle_addCartItem)

                    })
                }


                let addItems = [];
                function handle_addCartItem() {

                    let product = this.closest('.product_card_content');
                    let title = product.querySelector(".product_title").textContent;
                    let price = product.querySelector(".prod_price b").textContent;
                    let imgSrc = product.parentElement.querySelector('.prod_img').src;

                    let newToAdd = {
                        title,
                        price,
                        imgSrc
                    }

                    if (addItems.find((el) => el.title == newToAdd.title)) {
                        alert("already add");
                        return;
                    } else {
                        addItems.push(newToAdd)
                    }

                    localStorage.setItem("basket", JSON.stringify(addItems))

                    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
                    let newNode = document.createElement("div");
                    newNode.innerHTML = cartBoxElement;
                    const cartContent = cart.querySelector(".cart_content");
                    cartContent.appendChild(newNode);

                    update();
                }

                function handle_changeItemQuantity() {
                    if (isNaN(this.value) || this.value < 1) {
                        this.value = 1;
                        const productCard = this.closest('.cart_box');
                        if (productCard) {
                            productCard.remove();
                            update()
                        }
                    } else {
                        this.value = Math.floor(this.value);
                        update();
                    }
                }

                // ===============HANDLE EVENTS======================
                function handle_removeCartItem() {
                    this.parentElement.remove();

                    localStorage.setItem("basket", JSON.stringify(addItems));
                    update();
                }

                function updateTotal() {
                    let cartBoxes = document.querySelectorAll(".cart_box")
                    let totalElement = cart.querySelector(".total_price");

                    let total = 0;
                    cartBoxes.forEach(cartBox => {
                        let priceElement = cartBox.querySelector(".cart_price");
                        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
                        let quantity = cartBox.querySelector(".cart_quantity").value;
                        total += price * quantity;
                    })

                    total = total.toFixed(2)
                    totalElement.innerHTML = "$" + total;
                }



                function CartBoxComponent(title, price, imgSrc) {
                    return `
                    <div class="cart_box">
                    <img src=${imgSrc} alt="" class="img_cart">
                    <div class="detail_box">
                      <p class="cart_product_title">${title}</p>
                      <b class="cart_price">${price}</b>
                      <input type="number" value="1" class="cart_quantity">
                    </div>
                    <i class="fa-regular fa-trash-can cart_remove"></i>
                  </div>
                    `
                }
            })
        })



})


