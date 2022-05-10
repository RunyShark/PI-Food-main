import {
  GET_ALL,
  GET_NAME,
  GET_ID,
  GET_TYPE,
  POST_DATA,
  // GET_NAMEGlOBLA,
} from "../accions";

const initilState = {
  allDataRecipe: [],
  allDataName: [],
  allDataNameGlobal: [],
  filtertData: [],
  idDataRecipe: [],
  typess: [],
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
        allDataName: actions.payload,
      };
    // case GET_NAMEGlOBLA:
    //   return {
    //     ...state,
    //     allDataNameGlobal: actions.payload,
    //   };
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

    default:
      return state;
  }
};

export default rootReducer;
