
import categoryReducer from './category.reducer';

import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({    
    category: categoryReducer,
    product: productReducer
    
});

export default rootReducer;