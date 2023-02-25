let menu = document.querySelector(".menu");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let table1=document.querySelector(".table1")
menu.addEventListener("click", () => {
  left.classList.toggle("active");
  right.classList.toggle("active");
  table1.classList.toggle("active");

});

const api = "https://63c7bcdd5c0760f69abce598.mockapi.io/products";
fetchData();
function fetchData() {
  fetch(api)
    .then((req) => req.json())
    .then((data) => {
      console.log(data);
      display(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

let tproducts = document.querySelector(".tproducts");

function display(pdata) {
  tproducts.innerHTML = null;
  pdata.forEach((element) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = element.title;

    let td2 = document.createElement("td");
    td2.innerText = element.description;

    let td3 = document.createElement("td");
    td3.innerText = element.price;

    let td4 = document.createElement("td");
    let img = document.createElement("img");
    img.classList.add("image");
    img.src = element.avatar;
    td4.append(img);

    let td5 = document.createElement("td");
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");
    del.addEventListener("click",()=>{
      delProd(element.id)
    })

    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.classList.add("edit");
    edit.addEventListener("click",()=>{
      titleIn.value=element.title;
      categoryIn.value=element.description;
      urlIn.value=element.avatar;
      priceIn.value=element.price
      let updatebtn=document.getElementById("update")
      updatebtn.addEventListener("click",(e)=>{
        e.preventDefault();
        updateProd(element.id,titleIn.value,categoryIn.value,priceIn.value,urlIn.value)
      }) 
    })

    td5.append(del, edit);
    tr.append(td1, td2, td3, td4, td5);
    tproducts.append(tr);
   
  });
}

// input taking part---->
let titleIn=document.getElementById("title");
let categoryIn=document.getElementById("category");
let priceIn=document.getElementById("price");
let urlIn=document.getElementById("url");

let addBtn=document.getElementById("new")
addBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  let title=titleIn.value;
  let category=categoryIn.value;
  let price=priceIn.value;
  let url=urlIn.value;
  addProd(title,category,price,url)
})

//update Products------------->
function updateProd(id,title,category,price,url){
  fetch(`${api}/${id}`,{
    method:'PUT',
    body:JSON.stringify({
      title:title,
      price:price,
      avatar:url,
      description:category
    }),
    headers:{
      'Content-type':'application/json'
    }
  })
  .then((req)=>req.json())
  .then(()=>{
    fetchData();
    console.log("updated")
    alert("Updated Successfully")
  })
}

//Add function------------->

function addProd(title,category,price,url){
   
    fetch((api),{
      method:'POST',
      body:JSON.stringify({
        title:title,
        description:category,
        price:price,
        avatar:url
      }),
      headers:{
        'Content-type':'application/json'
      }
    })
    .then((req)=>req.json())
    .then(()=>{
      fetchData();   
      console.log("new")
      alert("Product Added Successfully")
    })  
}
// Delete function-------------->
function delProd(id){
  fetch(`https://63c7bcdd5c0760f69abce598.mockapi.io/products/${id}`,{
    method:'DELETE',
    headers:{
      'Content-type':'application/json'
    }
  })
  .then((req)=>req.json())
  .then(()=>{
    alert("Delete Successfully")
    fetchData();
  })
}

// // Pagination code --------------->

window.addEventListener("load",()=>{
  
})
