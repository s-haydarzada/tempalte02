window.addEventListener("load",()=>{

let featured_cards= document.querySelector("#featured_cards");

const items = [
    {
        id: 0,
        img: "../img/cat-1.png",
        name: "Vegetables",
        count:1
    },
    {
        id: 1,
        img: "../img/cat-2.png",
        name: "Strawberry",
        count:2
    },
    {
        id: 2,
        img: "../img/cat-3.png",
        name: "Snack",
        count:3
    },
    {
        id: 3,
        img: "../img/cat-4.png",
        name: "Black Plum",
        count:4
    },
    {
        id: 4,
        img: "../img/cat-5.png",
        name: "Custard Apple",
        count:5
    },
    {
        id: 5,
        img: "../img/cat-9.png",
        name: "Red Apple",
        count:6

    },
    {
        id: 6,
        img: "../img/cat-11.png",
        name: "Peach",
        count:7
    },
    {
        id: 7,
        img: "../img/cat-12.png",
        name: "Oganic Kiwi",
       count:8
    },
    {
        id: 8,
        img: "../img/cat-13.png",
        name: "Cake & Milk",
        count:9
    },
    {
        id: 9,
        img: "../img/cat-14.png",
        name: "Coffee & Tea",
        count:10
    },
    // {
    //     id: 10,
    //     img: "../img/cat-15.png.png",
    //     name: "Headphone",
    //     count:11
    // }
]

items.map((item)=>{

    const content = ` <div class="card">
    <div class="card_img">
      <img src=${item.img} alt="" />
    </div>
    <div class="center_content">
      <h3>${item.name}</h3>
      <p><span>${item.count}</span>items</p>
    </div>
  </div>`
  featured_cards.innerHTML+=content
})


})