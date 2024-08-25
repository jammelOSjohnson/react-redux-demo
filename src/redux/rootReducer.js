import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import carReducer from "./car/carReducer";
import userReducer from "./user/userReducer";

const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  car: carReducer,
  user: userReducer,
});

export default reducer;
