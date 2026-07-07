
const product = [
    {
        id: 1,
        name: "akara-dress",
        type: "handmade",
        category: "women",
        image: "./akara.png"

    },
    {
        id: 2,
        name: "akara-gown",
        type: "handmade",
        category: "women",
        image: "./the best.png"
    },
    {
        id: 3,
        name: "adult-footwear",
        type: "ready-made",
        category: "men",
        image: "./import2.jpg"
    },
    { 
        id: 4,
        name:"adult-footwear",
        type: "ready-made",
        category: "men",
        image:"./import.jpg"
    },
    {
        id: 5,
        name: "kids-readymade-footwear",
        type: "ready-made",
        category: "kids",
        image: "./import3.jpg"
    },
    {
        id: 6,
        name: "kids-readymade-footwear",
        type: "ready-made",
        category: "kids",
        image: "./import.jpg"
    },
    {
        id: 7,
        name: "adult-handmade-footwear",
        type: "handmade",
        category: "men",
        image: "./import3.jpg"
    },
    {
        id: 8,
        name: "adult-clothing",
        type: "ready-made",
        category: "men",
        image: "./import.jpg"
    },
    {
        id: 9,
        name: "adult-handmade-footwear",
        type: "ready-made",
        category: "men",
        image: "./import2.jpg"
    }
    
]
const  displayproduct = (arr) => {
   const productContainer = document.getElementById("products-container");
   productContainer.innerHTML = ""
   for ( let i = 0; i < arr.length; i++){

    const card = document.createElement("div");
    card.classList.add("product-card");
      card.innerHTML = `
        <img src="${arr[i].image}" alt="${arr[i].name}">
        <div class="product-info">
          <h4>${arr[i].name}</h4>
         
        </div>
        
        <p> ${arr[i].type}</p>
        <p>${arr[i].category}</p>
           
        <div class="card-buttons">
          <button>Buy Now</button>
          <button class="add-to-cart"> Add to Cart</button>
        </div>
      `
     productContainer.append(card);
   }
}

const searchinput = document.querySelector(`input[type="search"]`)
search.addEventListener("keyup",()=>{
  const search = searchinput.value.trim().toLowerCase()
   const filtered = product.filter((product) => product.name.toLowerCase().includes(search))
   displayproduct(filtered)
}) 


const filterButtons = document.querySelectorAll(".filter-button")
for( let i = 0; i<filterButtons.length; i++ ){
   filterButtons[i].addEventListener('click', () =>{
  const getfilter = filterButtons[i].dataset.category
     if(getfilter === "all")
       displayproduct(product);
    else{
     const filtered = product.filter(item => item.category === getfilter)
     displayproduct(filtered)
    }

   })

}
displayproduct(product);

