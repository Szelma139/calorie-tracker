import database from '../firebase/firebase';
import { startRenderGoal, startRemoveGoal } from './nutritionGoals';
import { startSetCalorie, startRemoveCalorie } from './calorieItem';
import { startSetHashtags } from './statusFeatures';
import { startSetStatus, startSetImages, startRemoveAllStatuses } from './postStatus';
import { startSetComment } from './comment';
import { startSetLike, startRemoveAllLikes } from './like';
import { startSetTotalLikes } from './totalLikes';
// import configureStore from '../store/configureStore';

// const store = configureStore();

export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    user
});

export const startSetCurrentUser = (email) => {
    return (dispatch) => {
        return database.ref('users').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if (email === childSnapshot.val().email) {
                    const likesArr = [];
                    dispatch(setCurrentUser({
                        ...childSnapshot.val(),
                        id: childSnapshot.key,
                        googleId: childSnapshot.val().id,
                        likes: [] || Object.values(childSnapshot.val().likes)
                    }));
                    dispatch(startRenderGoal(childSnapshot.key));
                    dispatch(startSetCalorie(childSnapshot.key));
                    dispatch(startSetLike(childSnapshot.key));
                    dispatch(startSetTotalLikes());
                    dispatch(startSetHashtags());
                    dispatch(startSetStatus());
                    dispatch(startSetComment());
                    dispatch(startSetImages());
                    
                    
                };
            });
        })
    };
};

export const removeCurrentUser = () => ({
    type: 'REMOVE_CURRENT_USER'
})

export const startRemoveCurrentUser = () => {
    return (dispatch) => {
        dispatch(startRemoveGoal());
        dispatch(startRemoveCalorie());
        dispatch(startRemoveAllLikes());
        dispatch(startRemoveAllStatuses());
        // dispatch(startSetTotalLikes());
        // dispatch(startSetHashtags());
        // dispatch(startSetStatus());
        // dispatch(startSetComment());
        // dispatch(startSetImages());
    }
}

// store.dispatch(startRenderGoal());
// store.dispatch(startSetCalorie());
// store.dispatch(startSetHashtags());
// store.dispatch(startSetStatus());
// store.dispatch(startSetComment());
// store.dispatch(startSetImages());