import {combineReducers} from 'redux'
import products from './products';
import isShowForm from './ShowProducts';
import isShowPopup from './isShowPopup';
import productEditing from './productEditing';



const myReducers = combineReducers({
    products,
    isShowForm,
    isShowPopup,
    productEditing
})

export default myReducers;