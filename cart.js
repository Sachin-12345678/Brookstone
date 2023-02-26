let productData = JSON.parse(localStorage.getItem("product")) || [];

let product = [
    {
      "id": 1,
      "image": "https://n.nordstrommedia.com/id/sr3/7fd3f7ea-1536-47f0-bc0a-b3d71590e31f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Nike",
      "description": "Sports Wear Club Fleece Seweatpants (Big Boy)",
      "price": " 2902", 
      "category": "Lower"
    },
    {
      "id": 2,
      "image": "https://n.nordstrommedia.com/id/sr3/0de850f5-687a-4462-8760-7e9bd33113ef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Nike",
      "description": "Kids Fleece Stripe Joggers (Little Kid and Big Kids)",
      "price": " 4729" ,
      "category": "Lower"
    },
    {
      "id": 3,
      "image": "https://n.nordstrommedia.com/id/sr3/cca5c5a6-7690-4943-939a-9662c0e94d14.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Levi's",
      "description": "Levi's® 502 Strong Performance Straight Leg Jeans",
      "price": " 3611 " ,
      "category": "Jeans"
    },
    {
      "id": 4,
      "image": "https://n.nordstrommedia.com/id/sr3/caeed694-fd63-4d02-9360-531a5bcb85d8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "FEAR OF GOD ESSENTIALS",
      "description": "Kids' Relaxed Sweatpants",
      "price": " 5589 " ,
      "category": "Jeans"
    },
   
    {
      "id": 5,
      "image": "https://n.nordstrommedia.com/id/sr3/b625ae3c-78fb-4070-a1c4-38009da99307.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Joe's",
      "description": "Kids' The Brixton Slim Straight Leg Jeans",
      "price": " 4643 " ,
      "category": "Jeans"
    },
    {
      "id": 6,
      "image": "https://n.nordstrommedia.com/id/sr3/74138ae1-24a1-4659-b546-a501918b3abe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "Nike",
      "description": "Windrunner Water Resistant Hooded Jacket",
      "price": " 5589 ",
      "category": "Jacket" 
    },
    
    {
      "id": 11,
      "image": "https://n.nordstrommedia.com/id/sr3/18fce06a-64ac-4d76-b413-b82997a239e9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "7 DIAMONDS",
      "description": "Liberty Geometric Stretch Button-Up Shirt",
      "price": " 8513" ,
      "category": "Shirts"
    },
    {
      "id": 12,
      "image": "https://n.nordstrommedia.com/id/sr3/8e28c8f6-b927-4d1a-964c-75797483dcd7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "7 DIAMONDS",
      "description": "Generation Plaid Stretch Flannel Button-Up Shirt",
      "price": " 10749" ,
      "category": "Shirts"
    },
    {
      "id": 13,
      "image": "https://n.nordstrommedia.com/id/sr3/22216d5e-3a7b-440c-8548-a2aeca604e0f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "NORDSTROM",
      "description": "Plaid Trim Fit Flannel Button-Down Shirt",
      "price": " 4298" ,
      "category": "Shirts"
    },
    {
      "id": 14,
      "image": "https://n.nordstrommedia.com/id/sr3/4660c6f3-ed4a-425f-bbf2-9758f2978e8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "VINCE",
      "description": "Cotton Blend Shirt Jacket",
      "price": " 25369" ,
      "category": "Jacket"

    },
    {
      "id": 15,
      "image": "https://n.nordstrommedia.com/id/sr3/6314cc2f-4aa3-417c-8dfb-1fc0c65c9676.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "SCHOTT NYC",
      "description": "Military Henley Sweater",
      "price": " 13329" ,
      "category": "Jacket"

    },
    {
      "id": 16,
      "image": "https://n.nordstrommedia.com/id/sr3/ecbb2422-7cdd-476c-b015-c9fde880d9a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "TOPMAN",
      "description": "Solid Cotton Turtleneck",
      "price": " 3267" ,
      "category": "Jacket"
    },
    {
      "id": 17,
      "image": "https://n.nordstrommedia.com/id/sr3/1bf9b189-287e-4398-be2d-ac0cc400fc8d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "TOPMAN",
      "description": "P65 Houndstooth Crewneck Sweater",
      "price": " 5589" ,
      "category": "Jacket"
    },
    {
      "id": 18,
      "image": "https://n.nordstrommedia.com/id/sr3/6cd96fd1-4491-4ac0-9a49-c4a0e880ab90.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "CHARATT WORK IN PROGRESS",
      "description": "Logo Pocket T-Shirt",
      "price": " 4127",
      "category": "T-shirt" 
    },
    {
      "id": 19,
      "image": "https://n.nordstrommedia.com/id/sr3/5f1db63d-858e-489d-8bb3-51aa4368ce59.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
      "title": "Arrives Before Christmas",
      "brand": "VUORI",
      "description": "Current Tech Long Sleeve T-Shirt",
      "price": " 5847" ,
      "category": "T-shirt"
    },
    {
    "id": 20,
    "image": "https://n.nordstrommedia.com/id/sr3/83f63d30-0350-49b1-aa3d-90788ce27287.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    "title": "Arrives Before Christmas",
    "brand": "ICECREAM",
    "description": "Visitation Cotton Graphic Tee",
    "price": " 3009",
    "category": "T-shirt"
  } 
  ]
  let cont = document.getElementById("cart-item");
  let heading = document.getElementById("shop");
  let priceHead = document.getElementById("price-head");
  let bodyDiv = document.getElementById("cart-page");
  let hr1 = document.getElementById("hr1");
  let payAmt = document.getElementById("payAmt");
  let payAmt2 = document.getElementById("payAmt2");
  let secondDiv = document.getElementById("second-div")

  let localData = JSON.parse(localStorage.getItem("cart"))




  let arr =[];

renderData(localData);

function renderData(data)
{
    // let cardList = `
    // ${data.map((item ) => getCard(item.id,item.image,item.title,item.description,item.price)).join(" ")}
    // `
    // console.log(window)
    // cont.innerHTML = cardList;
   if(data.length==0)
   {
    heading.innerText=null;
    bodyDiv.innerHTML=null;
    bodyDiv.style.width=0;
    bodyDiv.style.height=0;
    hr1.innerHTML=null;
    secondDiv.innerHTML=null;

    secondDiv.style.height=0;
    secondDiv.style.width=0;
    let a = document.createElement("img");
    a.src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
    a.style.display="block";
    a.style.margin="auto";
    // a.style.height=150;
    a.style.width=10;
    bodyDiv.append(a);

   }
   else{
    heading.innerText= `${data.length} Items In Your Bag`
   

    cont.innerHTML= null;
    data.forEach((item,index) => {
      console.log(item)
      let mainDiv = document.createElement("div");
      mainDiv.classList.add("card");
      mainDiv.id=item.id;

      let imageDiv = document.createElement("div");
      imageDiv.classList.add("img-div");

      let img = document.createElement("img");
      img.classList.add("cart-image");
      img.src= item.avatar;

      imageDiv.append(img);

      let descDiv = document.createElement("div");
      descDiv.classList.add("desc-div")
      let h4 = document.createElement("h4");
      h4.classList.add("cart-heading")
      h4.innerText = item.title;

      let p = document.createElement("p");
      p.classList.add("cart-desc")
      p.innerText = item.description;

      let btn1 = document.createElement("button");
      btn1.innerText = "Delete";
      btn1.addEventListener("click",()=> {
        data.splice(index,1);
        renderData(data)
        
        
        localStorage.setItem("deleteArr",JSON.stringify(arr))
      })

      let btn2 = document.createElement("button");
      btn2.innerText = `Save For Later`;
      btn2.addEventListener("click",() => {
        // let key = data.splice(index,1);
        // renderData(data);
        // console.log(key[0])
        arr.push(key[0]);

        // renderSave(arr);
        console.log(arr)
      })

      let anchor = document.createElement("a");
      anchor.href = "./product.html"

      let btn3 = document.createElement("button");
      btn3.innerText = "See More Like This";
      anchor.append(btn3)

      let shrA = document.createElement("a");
      shrA.href="https://web.whatsapp.com/"
      let btn4 = document.createElement("button");
      btn4.innerText = "Share";
      shrA.append(btn4)
      

      descDiv.append(h4,p,btn1,btn2,anchor,shrA);

      let incDcr = document.createElement("div");
      incDcr.classList.add("incDcr");

      let inc = document.createElement("button");
      inc.innerText = "+";
      inc.classList.add("inc")
      inc.addEventListener("click",()=>{
        item.quantity++;;

        localStorage.setItem("cart",JSON.stringify(localData));
        renderData(localData);

      });

      let spanTag = document.createElement("span");
      spanTag.innerText=item.quantity;

      let dec = document.createElement("button");
      dec.innerText = "-";
      dec.classList.add("dec")
      dec.addEventListener("click",()=>{
        
         if(item.quantity>1){
          item.quantity--

          localStorage.setItem("cart",JSON.stringify(localData));
          renderData(localData)
         }
      });
      incDcr.append(dec,spanTag,inc)


      let priceDiv = document.createElement("div");
      priceDiv.classList.add("price-div");

      let priceEle = document.createElement("h4");
      priceEle.classList.add("cart-price")
      priceEle.innerText = `₹${item.price}`;

      priceDiv.append(priceEle);

      mainDiv.append(imageDiv,descDiv,incDcr,priceDiv);

      cont.append(mainDiv)
    });

    let res = 0;
    for(let i=0;i<data.length;i++)
    {
      res+= +data[i].price*data[i].quantity;
    }
    priceHead.innerText=`Proceed By  ₹${res}`;
    payAmt.innerText=`${res}`;
    payAmt2.innerText=`${res}`;

  }
}

let save = document.getElementById("save-item");
let saveDiv = document.getElementById("save-div");
let saveHead = document.getElementById("save-head");
let saveTitle = document.getElementById("save-head");

// renderSave(arr);
 // if(data.length==0)
    // {
    //   saveDiv.innerHTML= null;
    //   saveHead.innerHTML=null;
    //   saveTitle.innerHTML=null;
    //   saveDiv.style.width=0;
    //   saveDiv.style.height=0;
      
    // }
function renderSave(data)
{
      console.log("render Data")
      saveTitle.innerText= "Saved Item";

      save.innerHTML = null;      
      data.forEach((item,index) => {
      console.log(item)
      console.log("item11")
      let mainDiv = document.createElement("div");
      mainDiv.classList.add("card1");
      mainDiv.id=item.id;

      let imageDiv = document.createElement("div");
      imageDiv.classList.add("img-div1");

      let img = document.createElement("img");
      img.classList.add("cart-image1");
      img.src= item.avatar;

      imageDiv.append(img);

      let descDiv = document.createElement("div");
      descDiv.classList.add("desc-div1")
      let h4 = document.createElement("h4");
      h4.classList.add("cart-heading1")
      h4.innerText = item.title;

      let p = document.createElement("p");
      p.classList.add("cart-desc1")
      p.innerText = item.description;

      let button = document.createElement("button");
      button.classList.add("addTocart")
      button.innerText = "Add To Cart";
      button.addEventListener("click",()=>{
        let singleItem = data.splice(index,1)
        renderSave(data);

        product.push(singleItem[0])
        renderData(product)
      })


      descDiv.append(h4,p,button)

      let priceDiv = document.createElement("div");
      priceDiv.classList.add("price-div");

      let priceEle = document.createElement("h4");
      priceEle.classList.add("cart-price")
      priceEle.innerText = `₹${item.price}`;

      priceDiv.append(priceEle);

      mainDiv.append(imageDiv,descDiv,priceDiv);

      save.append(mainDiv)
    });

    console.log("hey")
    
}

