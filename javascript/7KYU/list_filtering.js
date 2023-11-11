/*
 function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/ 

function filter_list(list_s){
    return list_s.filter(item => typeof item !== 'string')
}