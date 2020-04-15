import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;