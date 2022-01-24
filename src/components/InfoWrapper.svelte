<script>
  import {colorSchemes,dictionaries} from "../utility/utility.js"
  import {clickedProduct} from "../utility/products.js"
  let colorScheme
  let dictionary
  let product
  colorSchemes.subscribe(value => {
		colorScheme = value;
	});
  dictionaries.subscribe(value => {
		dictionary = value;
	});
  clickedProduct.subscribe(value => {
		product = value;
	});
  export let color
  export let language
</script>


<div class="infoWrapperBackground" style="background-color:{colorScheme[color].infoWrapperBackground}">
  <div class="infoWrapper">
    <span on:click={() => clickedProduct.update(() => null)} >X</span>
    <img src={product.photo} alt="productPhoto">
    <p style="font-size:1.6rem;border-bottom:1px solid grey">{product.brand} - {product.title}</p>
    <p style="font-size:1.4rem">Pris: {product.price} {product.currency}</p>
    <p style="font-size:1.3rem">{product.description?product.description:""}</p>
    <p class="stockIndicator" style="font-size:1.4rem">Lagernivå: {product.stock < 5 ? "Slut 😬" : product.stock < 20 ? "Låg 😱" : product.stock < 50 ? "Medel 😃" : "Hög 😍"}</p>
    <p class="material-icons-outlined addToCart" style="color:{colorScheme[color].addToCart}">add_shopping_cart</p>
  </div>
</div>

<style>
  *{
  margin: 0 0;
  padding: 0 0;
  }

  .infoWrapper{
  width: clamp(200px,80%,500px);
  height: clamp(200px,60%,500px);
  background-color: white;
  position: fixed;
  font-size: clamp(1rem,3vh,2rem);
  font-family: 'Oswald', sans-serif;
  padding-left: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
}

.infoWrapper span{
  position: absolute;
  right: 2%;
  top: 2%;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  transition: font-size 0.2s;
}

.infoWrapper span:hover{
  font-size: 2rem;
}

.infoWrapper span:hover{
  cursor: pointer;
}

.infoWrapper img{
  margin-right: auto;
  height: clamp(100px,100%,150px);
  transition: transform 0.5s;
  transition-delay: 0.1s;
}
.infoWrapper img:hover{
  transform: scale(2) translateX(30px) translateY(30px);
  opacity: 90%;
  border-radius: 1px solid rgb(202, 202, 202);
  box-shadow: 1px 2px 14px 3px rgba(0,0,0,0.05);
}

@keyframes cartIntro {
  from {right:0%; bottom: 10%;}
  to {right:10%; bottom: 10%;}
}

.addToCart{
  color:green;
  font-size:3rem;
  position: absolute;
  right: 10%;
  bottom: 10%;
  transition: transform 0.2s;
  animation: cartIntro 0.5s;
}

.addToCart:hover{
  cursor: pointer;
  transform: scale(1.1);
}

.stockIndicator{
  left: 30px;
  bottom: 10%;
  position: absolute;
}

.infoWrapperBackground{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
}
</style>