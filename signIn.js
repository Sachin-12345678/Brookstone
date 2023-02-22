function register() {
    loginEl.style.left = "-400px"
    registerEl.style.left = "50px"
    buttonEl.style.left = "110px"
}
function login() {
    loginEl.style.left = "50px"
    registerEl.style.left = "450px"
    buttonEl.style.left = "0px"
}
let loginEl = document.getElementById("login");//form
let registerEl = document.getElementById("register");
let buttonEl = document.getElementById("bot");
//    LS part
let UserName = document.getElementById("name");
let UserEmail = document.getElementById("email");
let UserPassword = document.getElementById("password");
let submitEl = document.querySelector(".submit-btn");
let bottom_text = document.getElementById("botText")

registerEl.addEventListener("submit", (e) => {
    e.preventDefault();
    
        let myData = JSON.parse(localStorage.getItem("account-data"))||[];
        let formData = {
            name: UserName.value,
            email: UserEmail.value,
            password: UserPassword.value,
        };
        myData.push(formData)
      
        localStorage.setItem("account-data", JSON.stringify(myData));
      
        ResetData();
    })
    // console.log("hi")

// login part

 let user_id = document.getElementById("userId");
 let user_pass = document.getElementById("userPassword");
 let login_btn = document.getElementById("login-btn");
 let display_msg = document.getElementById("Display-msg")
 loginEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    
 })
 let loginData = JSON.parse(localStorage.getItem("account-data"))||[];

 function display(data){
    login_btn.addEventListener("click",()=>{
        data.forEach((element,index)=>{
    if(element.email ===user_id.value && element.password === user_pass.value){
       display_msg.style.display="block";
       display_msg.innerText="Login Sucessful";
       display_msg.style.color="green";
       
    }else{
        display_msg.style.display="block";
        display_msg.innerText="Wrong Credential"
        display_msg.style.color="red";
    }

   })
  display(loginData);
    })
 }
 display(loginData)

 function ResetData(){
    UserName.value = ""
    UserEmail.value = ""
    UserPassword.value= ""
    bottom_text.style.display="block"
    bottom_text.style.color="green";
 }