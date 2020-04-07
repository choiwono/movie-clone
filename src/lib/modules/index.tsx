import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { detailReducer } from './detail';
import { favoriteReducer } from './favorite';
import { loadingReducer } from './loading';
import { searchReducer } from './search';
import { trendsReducer } from './trends';

const rootReducer =  combineReducers({
    
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;