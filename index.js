
console.log("it works")

//connection to API

const API="https://platzi-avo.vercel.app/api/avo"
const URLbase ="https://platzi-avo.vercel.app"

function fetchData() {
    window.fetch(API)
    .then(response => response.json())
    .then(response =>{
        const allItems =[];
        response.data.forEach(element => {
            
            //name
            const name = document.createElement("h2");
            name.textContent = element.name;
            
            //price
            const price = document.createElement("h3");
            price.textContent = "$ " + element.price ;
            
            //image
            const img = document.createElement("img");
            img.src = URLbase + element.image;

            const container = document.createElement("div");
            container.append(name,img, price);
            allItems.push(container);
        });
        const mainContainer = document.querySelector(".main-container");
        console.log(mainContainer)
        mainContainer.append(...allItems); 
    })
}

fetchData();