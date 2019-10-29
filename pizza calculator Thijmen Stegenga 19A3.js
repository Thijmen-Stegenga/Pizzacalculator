//Thijmen Stegenga Klas 19A3 Pizza Calculator// `
alert ("welkom bij pizzaria Hoogendoorn");
alert ("kan ik uw bestelling opnemen? klik op oke om verder te gaan")
const amountSmall = Number(prompt("hoeveel Small pizza's wilt U bestellen?"))
const amountMedium = Number(prompt("hoeveel Medium pizza's wilt U bestellen?"))
const amountLarge = Number(prompt ("hoeveel Large pizza's wilt U bestellen?"))

const priceSmall = 4.95;
const priceMedium = 7.95;
const priceLarge = 11.95;

var totalpriceSmall = amountSmall * priceSmall
var totalpriceMedium = amountMedium * priceMedium
var totalpriceLarge = amountLarge * priceLarge
var totalPayment = totalpriceSmall + totalpriceMedium + totalpriceLarge
var totalpizzas = amountSmall + amountMedium + amountLarge

alert("prijs voor de small pizza(s) is " + totalpriceSmall)
alert("prijs voor de medium pizza(s) " + totalpriceMedium)
alert("prijs voor de Large pizza(s) " + totalpriceLarge) 
alert("De totale prijs van uw bestelling is " + totalPayment)
alert("de totale pizza die u heeft besteld zijn " +  totalpizzas)
alert("bedankt voor uw bestelling bij Pizzeria Hoogendoorn hij word klaargemaakt")






