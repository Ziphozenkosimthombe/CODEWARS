/*  function that calculates the original product price, without VAT.
Round the result to 2 decimal places.
If null value given then return -1*/
function excludingVatPrice(price){
    if (price === null)
        return -1
    return +(price / 1.15).toFixed(2)
}