
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
      res+= +data[i].price*(+data[i].quantity);
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

