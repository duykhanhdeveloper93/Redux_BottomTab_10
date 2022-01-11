import { createStore, combineReducers } from 'redux';
import HomeReducer from '../reducers/HomeReducer';
import CosmosReducer from '../reducers/CosmosReducer';
import MessageReducer from '../reducers/MessageReducer';
import UserReducer from '../reducers/UserReducer';
import AddReducer from '../reducers/AddReducer';
import LoginReducer from '../reducers/LoginReducer';

const rootReducer = combineReducers(
    {
        loginReducer : LoginReducer,
        homeReducer: HomeReducer,
        cosmosReducer: CosmosReducer,
        messageReducer: MessageReducer,
        userReducer: UserReducer,
        addReducer: AddReducer,
       
    }
);
const Store1 = () => {
    return createStore(rootReducer);
}
export default Store1;