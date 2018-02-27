import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';


export default combineReducers({
    libraries: LibraryReducer,// state will be as libraries in App.js which can now access in LibraryList component
    selectedLibraryId: SelectionReducer
});