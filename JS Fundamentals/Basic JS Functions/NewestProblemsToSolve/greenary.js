function greenary(squareMeters, pricePerSquareMeter, discountPercentage) {
    let totalPrice = squareMeters * pricePerSquareMeter;
    let discount = totalPrice * (discountPercentage/100);
    let finalPrice = totalPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The duscount is: ${discount} lv.`);

}

greenary(550, 7.61, 18);