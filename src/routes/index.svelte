<link href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet">
<script>
  const products = [
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "makeup", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "hair", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
    {title: "Product", price: 100, currency: "SEK", stock:1, category: "clean", photo:"https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductListLarge/84APL3S590_8001841396828_front.jpg"},
  ]
  let filteredProducts = products
</script>

<body>
  <nav class="hideScroll hidescroll">
    <h1>Beautily</h1>
    <li class="hidescroll hideScroll">
      <button on:click={() => filteredProducts = products}>Allt</button>
      <button on:click={() => filteredProducts = products.filter(element => element.category === "makeup")}>Smink</button>
      <button on:click={() => filteredProducts = products.filter(element => element.category === "hair")}>Hår</button>
      <button on:click={() => filteredProducts = products.filter(element => element.category === "clean")}>Clean</button>
    </li>
    <button class="material-icons-outlined" style="margin-left:auto;margin-right:clamp(5px, 10%, 120px)">shopping_cart</button>
  </nav>
  <div class="productWrapper hideScroll hidescroll">
    {#each filteredProducts as product}
    {#if product.stock}
    <div class="card" style="background-image:url({product.photo});background-size:cover">
      <p>{product.title}<br> {product.price?product.price:"Ur lager"} {product.currency?product.currency:"" }</p>
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
  height: calc(100% - 100px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  column-gap: 40px;
  row-gap: 40px;
  overflow-y: scroll;
  padding-top: 100px;
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
  transform: scale(1.1)
}

.card p{
  background-color: rgb(241, 203, 229);
  font-size: clamp(1rem,3vh,2rem);
  color:rgb(65, 65, 65);
  opacity: 85%;
  font-family: 'Oswald', sans-serif;
}

button{
  min-width: 55px;
  border-radius: 30px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(214, 214, 214);
  transition: background-color 0.5s;
  padding: 10px;
}

button:hover{
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
  background-color: rgb(242, 225, 243);
  opacity: 90%;
  z-index: 99999;
  height: 80px;
}

li{
  width: clamp(100px, 35%, 1000px);
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  overflow-x: scroll;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
}

nav h1{
  padding: 10px;
  color:rgb(58, 58, 58);
  font-family: 'Satisfy', cursive;
  font-size: clamp(1rem,5vh,2rem);
}

.material-icons-outlined{
  color: rgb(212, 178, 201);

}

</style>