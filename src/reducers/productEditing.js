import * as types from './../constant/ActionTypes';
import {findIndex} from 'lodash';
var initState = {};

var myReducer = (state = initState , action) => {

    switch(action.type){
        case types.PRODUCT_EDITTING:
            var data = JSON.parse(localStorage.getItem("products"));
            var index = findIndex(data , (o) => {
                return o.key === action.id
            })
            state = data[index];
            console.log(state)
            return state;
        case types.PRODUCT_EDITTING_CLEAR:
            return {};   
        default:
            return state;
    }
}

export default myReducer;