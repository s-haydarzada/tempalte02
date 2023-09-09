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



    const products = [
        {
            id: 0,
            img1: "/src/img/product-1-1.jpg",
            img2:"/src/img/product-1-2.jpg",
            title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 1,
            img1: "/src/img/product-2-1.jpg",
            img2:"/src/img/product-2-2.jpg",
            title: "All Natural Italian-Style Chicken Meatballs",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 2,
            img1: "/src/img/product-3-1.jpg",
            img2:"/src/img/product-3-2.jpg",
            title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 3,
            img1: "/src/img/product-4-1.jpg",
            img2:"/src/img/product-4-2.jpg",
            title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 4,
            img1: "/src/img/product-5-1.jpg",
            img2:"/src/img/product-5-2.jpg",
            title: "Blue Diamond Almonds Lightly Salted Vegetables",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 5,
            img1: "/src/img/product-6-1.jpg",
            img2:"/src/img/product-6-2.jpg",
            title: "Chobani Complete Vanilla Greek Yogurt",
            price: 28.85,
            oldPrice: 32.5

        },
        {
            id: 6,
            img1: "/src/img/product-7-1.jpg",
            img2:"/src/img/product-7-2.jpg",
            title: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 7,
            img1: "/src/img/product-8-1.jpg",
            img2:"/src/img/product-8-2.jpg",
            title: "Encore Seafoods Stuffed Alaskan Salmon",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 8,
            img1: "/src/img/product-9-1.jpg",
            img2:"/src/img/product-9-2.jpg",
            title: "Gorton’s Beer Battered Fish Fillets with soft paper",
            price: 28.85,
            oldPrice: 32.5
        },
        {
            id: 9,
            img1: "/src/img/product-10-1.jpg",
            img2:"/src/img/product-10-2.jpg",
            title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
            price: 28.85,
            oldPrice: 32.5
        }
    ]

    products.map((item)=>{
        const content=` <div class="product_card">
            <div class="prod_image1">
              <img src=${item.img1} alt="" />
            </div>
            <div class="product_card_content">
              <span>Snack</span>
              <h2>${item.title}</h2>
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
                <button type="button"><img src="./src/img/icon-cart.svg" style="width: 20px;height: 20px;" alt="">
                  Add</button>
              </div>
            </div>
          </div>`

          products_card.innerHTML+=content;
    })


})