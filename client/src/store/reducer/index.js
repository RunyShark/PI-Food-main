import { GET_ALL, GET_NAME, GET_ID, GET_TYPE, POST_DATA } from "../accions";

const initilState = {
  allDataRecipe: [],
  filtertData: [],
  idDataRecipe: [],
  DietType: [],
};

const rootReducer = (state = initilState, actions) => {
  switch (actions.type) {
    case GET_ALL:
      return {
        ...state,
        allDataRecipe: actions.payload,
      };
    case GET_NAME:
      return {
        ...state,
        allDataRecipe: actions.payload,
      };
    case GET_ID:
      return {
        ...state,
        idDataRecipe: actions.payload,
      };
    case GET_TYPE:
      return {
        ...state,
        DietType: actions.payload,
      };
    case POST_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
