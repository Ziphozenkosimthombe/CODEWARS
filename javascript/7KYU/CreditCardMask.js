/*
when you buy something, you're asked whether your credit card number, phone number or
answer to your most secret question is still correct.

However, since someone could look over your shoulder,
you don't want that shown on your screen. Instead, we mask it.
*/ 
/*
Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/ 

function muskfy(str){
    if (str.length > 4){
        //musk all the the character accept thr last four
        return '#'.repeat(str.length - 4) + str.slice(-4);
    } else{
        return str;
    }
}