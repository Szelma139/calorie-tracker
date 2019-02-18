import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import nutritionGoalsReducer from '../reducers/nutritionGoalsReducer';
import calorieItemReducer from '../reducers/calorieItemReducer';
import postStatusReducer from '../reducers/postStatusReducer';
import commentReducer from '../reducers/commentReducer';
import statusFeaturesReducer from '../reducers/statusFeaturesReducer';
import hashtagFilterReducer from '../reducers/hashtagFilterReducer';
import calorieLookUpReducer from '../reducers/calorieLookUpReducer';
import userReducer from '../reducers/userReducer';
import currentUserReducer from '../reducers/currentUserReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            calorieItem: calorieItemReducer,
            nutritionGoals: nutritionGoalsReducer,
            statusItem: postStatusReducer,
            commentItem: commentReducer,
            hashtags: statusFeaturesReducer,
            hashtagFilter: hashtagFilterReducer,
            calorieLookUp: calorieLookUpReducer,
            user: userReducer,
            currentUser: currentUserReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};






