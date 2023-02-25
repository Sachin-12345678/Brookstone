var right = 0;
var maxMargin;
var jumpMargin = 150;

function setWidth(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function slideLeft(event){
  var rowcont = document.querySelector(".row-container");
  if(right <= -maxMargin){
    event.preventDefault();
  }
  else{
    right -= jumpMargin;
  }
   rowcont.style.marginLeft = right+"px";
}

function slideRight(event){
  var rowcont = document.querySelector(".row-container");
  if(right==0){
    event.preventDefault();
  }
  else if(right >= maxMargin){
    event.preventDefault();
  }
  else{
     right += jumpMargin;
  }
  rowcont.style.marginLeft = right+"px";
}

window.onload=setWidth;


// let url="https://63c7bcdd5c0760f69abce598.mockapi.io/products"

// fetch(`${url}`)
// .then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err);
// })




// let searchbtn=document.getElementById("search-btn");
// let search=document.getElementById("search1");
// searchbtn.addEventListener("click", ()=>{
//   let value=search.value;
//   let url1=`https://63c7bcdd5c0760f69abce598.mockapi.io/products/?description=${value}`

// fetch(`${url1}`)
// .then((res)=>{
//   return res.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err);
// })

// })
