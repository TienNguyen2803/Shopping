 import * as types from './../constant/ActionTypes';
 import {findIndex}  from "lodash";
 
 var data = JSON.parse(localStorage.getItem("products"));
 var initState = data ? data : []

 var products = (state = initState , action) => {

    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_PRODUCT:
            
            var index = findIndex(state , (o) => {
                return o.key.toString() === action.product.key.toString()
            }) 
          
            if( index === -1)
            {
                state.push(action.product);
            }else{
                console.log(action.product)
                console.log(state[index])

                state[index] = action.product
            }
             
            localStorage.setItem("products",JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCT:
            var index =  findIndex(state, (product) => {
                return product.key === action.id
            })
            state.splice(index,1);
            localStorage.setItem("products",JSON.stringify(state))
            return [...state];
        default: 
            return state;
    }
 }

export default products;