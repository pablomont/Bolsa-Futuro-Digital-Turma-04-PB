// @ts-check
function compact(arr){
    if(arr.length>10){
        return arr.trim(0,10)
    }
    return arr;
}
compact([1,2,3])