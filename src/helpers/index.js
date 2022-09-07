
 import React, {useContext} from "react";
 import {  ContextPurchase, ContextСhoice} from "store/context";


const serchElem = (arr, id) => {
    for (let i=0; i < arr.length; i++ ){
        if (arr[i].id == id){
            return arr[i]
        }
    }
    return null
}

const clear = (arr, i) => {
    return arr.splice(i, arr.length )
}


export {serchElem, clear}