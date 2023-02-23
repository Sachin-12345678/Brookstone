let container = document.getElementById("container");

let arr = [];

let high = document.getElementById("high");


high.addEventListener('click', () => {
    container.innerHTML = null;
    let hSort = arr.sort((a, b) => b.price - a.price);
    renderData(hSort)

})


let low= document.getElementById("low");


low.addEventListener('click', () => {
    container.innerHTML = null;
    let lSort = arr.sort((a, b) => a.price - b.price);
    renderData(lSort)

})


let filterSelect = document.getElementById("filter");
// console.log(filterSelect)


filterSelect.addEventListener("change", () => {
    let filtered = arr.filter((element) => {
        if (element.description === filterSelect.value) {
            return true;
        } else {
            return false;
        }
    })
    renderData(filtered);
    console.log(filtered)

})



console.log(container)


fetch('https://63c7bcdd5c0760f69abce598.mockapi.io/products')
    .then(response => response.json())

    .then((data) => {
        // console.log(data)
        arr = data
        renderData(data)
        console.log(arr)
    })

    .catch(error =>
        console.error(error));


function renderData(data) {
    container.innerHTML = null;

    data.forEach((element, index) => {

        let card = document.createElement("div")

        // let id = document.createElement("h3");
        // id.textContent = element.id;

        let img = document.createElement("img")
        img.src = element.avatar

        let description = document.createElement("p")
        description.textContent = element.description;

        let title = document.createElement("h3")
        title.textContent = element.title;

        let price = document.createElement("h4")
        price.textContent = element.price;

        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart";

        addToCart.addEventListener("click", () => {

            //old data

            let cartData = JSON.parse(localStorage.getItem("cart")) || []

            // if(cartData === null) cartData = [];

            let isAdleadyInCart = false;
            for (let i = 0; i < cartData.length; i++) {
                if (cartData[i].id === element.id) {
                    isAdleadyInCart = true;
                    break;
                };
            }

            if (isAdleadyInCart === true) {
                alert("Product Already in Cart");
            } else {
                cartData.push({ ...element, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(cartData));
                alert("Product Added To Cart");
            }
        })

        card.append(img, description, title, price, addToCart)
        container.append(card)
    })

}