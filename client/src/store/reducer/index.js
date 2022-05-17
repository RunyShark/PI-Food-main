/* eslint-disable array-callback-return */
import {
  GET_ALL,
  GET_NAME,
  GET_ID,
  GET_TYPE,
  POST_DATA,
  GET_OR,
  FILTER_TYPE,
  ADD_FAV,
  GET_FAV,
  UPDATE_FAV,
  DELETE_FAV,
} from "../accions";

const initilState = {
  allDataRecipe: [],
  allDataName: [],
  idDataRecipe: [],
  typess: [],
  addFav: [],
};

const rootReducer = (state = initilState, actions) => {
  switch (actions.type) {
    case GET_ALL:
      return {
        ...state,
        allDataRecipe: actions.payload,
      };
    case GET_OR:
      return {
        ...state,
        allDataRecipe: actions.payload,
      };

    case FILTER_TYPE:
      return {
        ...state,
        allDataRecipe: state.allDataRecipe.filter((e) => {
          let name = e.Types.map((e) => e.name);
          if (name.includes(actions.payload)) {
            console.log(e);
            return e;
          }
        }),
      };

    case GET_NAME:
      return {
        ...state,
        allDataName: actions.payload,
      };

    case GET_ID:
      return {
        ...state,
        idDataRecipe: actions.payload,
      };
    case GET_TYPE:
      return {
        ...state,
        typess: actions.payload,
      };

    case POST_DATA:
      return {
        ...state,
      };

    case ADD_FAV:
      return {
        ...state,
      };
    case GET_FAV:
      return {
        ...state,
        addFav: actions.payload,
      };
    case UPDATE_FAV:
      return {
        ...state,
      };
    case DELETE_FAV:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
