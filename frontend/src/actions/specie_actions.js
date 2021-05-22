import {
  SPECIE_DELETE_FAIL,
  SPECIE_DELETE_REQUEST,
  SPECIE_DETAILS_FAIL,
  SPECIE_DELETE_SUCESS,
  SPECIE_DETAILS_REQUEST,
  SPECIE_DETAILS_SUCESS,
  SPECIE_LIST_FAIL,
  SPECIE_LIST_REQUEST,
  SPECIE_LIST_SUCESS,
  SPECIE_REGISTER_FAIL,
  SPECIE_REGISTER_REQUEST,
  SPECIE_REGISTER_SUCESS,
  SPECIE_UPDATE_FAIL,
  SPECIE_UPDATE_REQUEST,
  
  SPECIE_UPDATE_SUCESS,
} from '../constants/species_constants.js';
import axios from "axios";

export const registerSpecie = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SPECIE_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/species/create/", {}, config);
    dispatch({ type: SPECIE_REGISTER_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SPECIE_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const updateSpecie = (specie) => async (dispatch, getState) => {
  try {
    dispatch({ type: SPECIE_UPDATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/species/update/${specie.id}/`,
      specie,
      config
    );
    dispatch({ type: SPECIE_UPDATE_SUCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SPECIE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const listSpecies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SPECIE_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`api/species/getspecies/`, config);

    dispatch({
      type: SPECIE_LIST_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPECIE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const specieDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SPECIE_DETAILS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`api/species/getspecie/${id}/`, config);

    dispatch({
      type: SPECIE_DETAILS_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPECIE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const deleteSpecie = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SPECIE_DELETE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(`api/species/delete/${id}/`, config);

    dispatch({
      type: SPECIE_DELETE_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SPECIE_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
