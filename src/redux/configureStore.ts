import {createStore} from 'redux';
import { setUserReducer } from './reducers/setUserReducers';

export const configureStore = () => {
    return createStore(setUserReducer);
}