import {createStore} from 'redux';
import counterReducer from '../src/Services/Reducer/CounterReducer';
const store= createStore(counterReducer);
// console.log('store:', store);

export default store;