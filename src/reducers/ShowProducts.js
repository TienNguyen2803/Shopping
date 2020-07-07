import * as types from './../constant/ActionTypes';

var initState = false;

var isShowForm = (state = initState , action) => {

    switch(action.type){
        case types.IS_SHOW_FORM:
            return !state;
        default:
            return state;
    }
}

export default isShowForm;