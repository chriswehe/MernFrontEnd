import { createStore } from 'redux';
import cardReducer from './reducers/card'

export default createStore(cardReducer)