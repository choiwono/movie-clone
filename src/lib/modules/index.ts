import { combineReducers } from 'redux'
import detail from './detail';
import favorite from './favorite';
import loading from './loading';
import search from './search';
import trends from './trends';

const rootReducer = combineReducers({
    
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;