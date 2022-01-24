import { readable } from 'svelte/store';
export const dictionaries = readable({
  se:{
    "Makeup": "Smink",
    "Hair":"Hår",
    "Skin":"Hud",
    "Other":"Annat",
    "All":"Allt",
    "Bike":"Cykel"
  }
})
export const colorSchemes = readable({
  pink:{
    navBar: "#f2e1f3",
    cartIcon: "#d4b2c9",
    filterBorder: "white",
    companyName: "rgb(58, 58, 58)",
    cardTextBackground: "rgb(241, 203, 229)",
    cardText: "rgb(65, 65, 65)",
    infoWrapperBackground: "rgba(242, 225, 243, 0.671)",
    addToCart: "pink",
  }
})