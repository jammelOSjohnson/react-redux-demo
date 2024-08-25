import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import carReducer from "./car/carReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  car: carReducer,
});

export default reducer;
