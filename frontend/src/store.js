import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  specieDeleteReducer,
  specieDetailsReducer,
  specieListReducer,
  specieRegisterReducer,
  specieUpdateReducer,
} from "./reducers/species_reducers";
import { specieDetails } from "./actions/specie_actions";
const reducer = combineReducers({
  //Aqui iran los reducers
  specieUpdate: specieUpdateReducer,
  specieDetails: specieDetailsReducer,
  specieDelete: specieDeleteReducer,
  specieList: specieListReducer,
  specieRegister: specieRegisterReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
