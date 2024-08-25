import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { buyCake } from "./cake/cakeActions";

const store = createStore(cakeReducer);

export default store;
