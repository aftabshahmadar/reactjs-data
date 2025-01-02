// src/store/store.js

import { createStore } from 'redux';
import themeReducer from '../reducers/themeReducer';

// Create store with themeReducer
const store = createStore(themeReducer);

export default store;
