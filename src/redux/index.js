import { combineReducers } from 'redux';
import weatherListReducer from './weather/reducer';

const createRootReducer = () =>
  combineReducers({
    weatherSearchList: weatherListReducer
  })

export default createRootReducer