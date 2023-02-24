let menu=document.querySelector(".menu")
        let left=document.querySelector(".left")
        let right=document.querySelector(".right")
        menu.addEventListener("click",()=>{
            left.classList.toggle("active")
            right.classList.toggle("active")

        })

        const api="https://63c7bcdd5c0760f69abce598.mockapi.io/products"
        fetchData()
        function fetchData(){
            fetch(api)
            .then((req)=>req.json())
            .then((data)=>{
                console.log(data)
                display(data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
        let tproducts=document.querySelector(".tproducts")

        function display(pdata){
            tproducts.innerHTML=null;
            pdata.forEach(element => {
                let tr=document.createElement("tr")

                let td1=document.createElement("td")
                td1.innerText=element.title

                let td2=document.createElement("td")
                td2.innerText=element.description;

                let td3=document.createElement("td")
                td3.innerText=element.price;
                
                let td4=document.createElement("td")
                let img=document.createElement("img")
                img.classList.add("image")
                img.src=element.avatar
                td4.append(img)

                let td5=document.createElement("td")
                let del=document.createElement("button")
                del.innerText="Delete"
                let edit=document.createElement("button")
                edit.innerText="Edit"
                td5.append(del,edit)

                tr.append(td1,td2,td3,td4,td5)
                tproducts.append(tr)

            });
        }