import { createStore } from 'redux';
import plannerReducer from './reducers';

const store = createStore(plannerReducer);

export default store;