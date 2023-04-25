export function hasError(key,items){
   if(items.length > 0){
    for(var i =0; i < items.length; i++){
        if(items[i].field == key){
            return true
            break;
        }
    }
   }
}
export function errMessage(key, items){
    for(var i =0; i < items.length; i++){
        if(items[i].field == key){
            const a = spacing(items[i].message)
            return capitalise(a);
            break;
        }
    }
}

function spacing(string){
    return string.replace(/([A-Z])/g, ' $1')
}

function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}