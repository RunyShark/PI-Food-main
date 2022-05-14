import axios from "axios";

export const GET_ALL = "GE_TALL";
export const GET_NAME = "GET_NAME";
export const GET_ID = "GET_ID";
export const GET_OR = "GET_OR";
export const GET_MM = "GET_MM";
export const GET_TYPE = "GET_TYPE";
export const POST_DATA = "POST_DATA";
export const FILTER_TYPE = "FILTER_TYPE";

export const getAll = () => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        method: "GET",
        url: "/recipes",
      });
      console.log(resp);
      return dispatch({ type: GET_ALL, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getName = (name) => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        method: "GET",
        url: `/recipes?name=${name}`,
      });
      return dispatch({ type: GET_NAME, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrder = (Order) => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        method: "GET",
        url: `/recipes?OR=${Order}`,
      });
      return dispatch({ type: GET_OR, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getID = (id) => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        method: "GET",
        url: `/recipes/${id}`,
      });
      return dispatch({ type: GET_ID, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getType = () => {
  return async (dispatch) => {
    try {
      const resp = await axios({
        method: "GET",
        url: `/type`,
      });
      return dispatch({ type: GET_TYPE, payload: resp.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterType = (type) => {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
};
//-------------------------------------------------------//
//local
export const postRecipe = (data) => {
  return async () => {
    const resp = await axios.post(`/recipe`, data);
    return resp;
  };
};
