<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet">


<script>
  import {colorSchemes,dictionaries} from "../utility/utility.js"
  import {clickedProduct} from "../utility/products"
  import InfoWrapper from "../components/InfoWrapper.svelte";

  let colorScheme
  let dictionary
  let selectedProduct
  colorSchemes.subscribe(value => {
		colorScheme = value;
	});
  dictionaries.subscribe(value => {
		dictionary = value;
	});
  clickedProduct.subscribe(value => {
		selectedProduct = value;
	});

  const products = [
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Makeup", description: "This is a great product, you should really buy it. It contains every atom in the atomic table and it will do wonders for you life.", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:0, category: "Hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Skin", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Other", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Other", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Other", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Other", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", brand: "Aussie", price: 100, currency: "SEK", stock:1, category: "Other", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
  ]
  let filteredProducts = products

  function getFilters(products){
    let filters = []
    products.forEach(element => {
      if(!filters.includes(element.category)) filters.push(element.category)
    });
    return filters
  }

  let filters = getFilters(products)
  
  let language = "se"
  let color = "pink"

  let cart = []

</script>

<body>
  <nav class="hideScroll hidescroll" style="background-color:{colorScheme[color].navBar}">
    <h1 style="color:{colorScheme[color].companyName}">Beautily</h1>
    <li class="hidescroll hideScroll" style="border:2px solid {colorScheme[color].filterBorder}">
      <button on:click={() => filteredProducts = products}>Allt</button>
      {#each filters as filter }
      <button on:click={() => filteredProducts = products.filter(element => element.category === filter)}>{dictionary[language][filter]}</button>
      {/each}
    </li>
    <button class="material-icons-outlined" style="margin-left:auto;margin-right:clamp(5px, 10%, 120px);color:{colorScheme[color].cartIcon}">shopping_cart</button>
  </nav>
  {#if selectedProduct}
    <InfoWrapper color={color} language={language} />
  {/if}
  <div class="productWrapper hideScroll hidescroll">
    {#each filteredProducts as product}
    {#if product.stock}
    <div on:click={() => clickedProduct.update(() => product)} class="card" style="background-image:url({product.photo});background-size:cover">
      <p style="background-color:{colorScheme[color].cardTextBackground};color:{colorScheme[color].cardText}">{product.brand}<br>{product.title}<br>{product.price} {product.currency?product.currency:"" }</p>
    </div>
    {/if}
    {/each}
  </div>
</body>

<style>

*{
  margin: 0 0;
  padding: 0 0;
}

body{
  height: 100vh;
  width: 100vw;
}

.hideScroll::-webkit-scrollbar { display: none; }
.hidescroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}

.productWrapper{
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  column-gap: 40px;
  row-gap: 40px;
  overflow-y: scroll;
  padding-top: 100px;
  padding-bottom: 20px;
}

.card{
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 1px 2px 14px 3px rgba(0,0,0,0.05);
  transition: transform .2s;
}

.card:hover{
  cursor: pointer;
  transform: scale(1.05)
}

.card p{
  font-size: clamp(1rem,3vh,2rem);
  opacity: 85%;
  font-family: 'Oswald', sans-serif;
  padding-left: 5px;
}

button{
  min-width: 55px;
  border-radius: 30px;
  border: 1px solid #d6d6d6;
  transition: background-color 0.5s;
  padding: 10px;
}

button:hover{
  background-color: rgb(202, 202, 202);
}

button:focus{
  background-color: rgb(202, 202, 202);
}

nav{
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  position: fixed;
  top: 0%;
  width: 100%;
  opacity: 90%;
  z-index: 1;
  height: 80px;
}

li{
  width: clamp(100px, 35%, 1000px);
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  overflow-x: scroll;
  border-radius: 5px;
  padding: 5px;
}

nav h1{
  padding: 10px;
  font-family: 'Satisfy', cursive;
  font-size: clamp(1rem,5vh,2rem);
}

</style>