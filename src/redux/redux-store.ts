import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {composeWithDevTools} from 'redux-devtools-extension';

import {profileReducer} from './reducers/profileReducer';
import {dialogsReducer} from './reducers/dialogsReducer';
import {usersReducer} from './reducers/usersReducer';
import {authReducer} from './reducers/authReducer';
import {appReducer} from './reducers/appReducer';
import {chatReducer} from './reducers/chatReducer';
import {ActionTypes} from './actions/actionCreatorsTypes';

const rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    chat: chatReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    ActionTypes
>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))







