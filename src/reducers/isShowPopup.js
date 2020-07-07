import * as types from './../constant/ActionTypes';

var initState = {visible : false , reset : true};

var isShowPopup = (state = initState , action) => {

    switch(action.type){
        case types.IS_SHOW_POPUP_FORM:
            state = {
                ...state,
                visible : !state.visible,
                reset : !state.reset
            }
            return state;
        default:
            return state;
    }
}

export default isShowPopup;