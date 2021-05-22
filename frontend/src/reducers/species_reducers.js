import {
  SPECIE_DELETE_FAIL,
  SPECIE_DELETE_REQUEST,
  SPECIE_DELETE_RESET,
  SPECIE_DETAILS_FAIL,
  SPECIE_DELETE_SUCESS,
  SPECIE_DETAILS_REQUEST,
  SPECIE_DETAILS_RESET,
  SPECIE_DETAILS_SUCESS,
  SPECIE_LIST_FAIL,
  SPECIE_LIST_REQUEST,
  SPECIE_LIST_RESET,
  SPECIE_LIST_SUCESS,
  SPECIE_REGISTER_FAIL,
  SPECIE_REGISTER_REQUEST,
  SPECIE_REGISTER_RESET,
  SPECIE_REGISTER_SUCESS,
  SPECIE_UPDATE_FAIL,
  SPECIE_UPDATE_REQUEST,
  SPECIE_UPDATE_RESET,
  SPECIE_UPDATE_SUCESS,
} from "../constants/species_constants";
export const specieRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIE_REGISTER_REQUEST:
      return { loading: true };
    case SPECIE_REGISTER_SUCESS:
      return { loading: false, success: true, specie: action.payload };
    case SPECIE_REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case SPECIE_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const specieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIE_DETAILS_REQUEST:
      return { loading: true };
    case SPECIE_DETAILS_SUCESS:
      return { loading: false, success: true, specie: action.payload };
    case SPECIE_DETAILS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case SPECIE_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
export const specieListReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIE_LIST_REQUEST:
      return { loading: true };
    case SPECIE_LIST_SUCESS:
      return {
        loading: false,
        success: true,
        species: action.payload
      };
    case SPECIE_LIST_FAIL:
      return { loading: false, success: false, error: action.payload };
    case SPECIE_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const specieUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case SPECIE_UPDATE_REQUEST:
      return { loading: true };
    case SPECIE_UPDATE_SUCESS:
      return { loading: false, success: true, message: action.payload };
    case SPECIE_UPDATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case SPECIE_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const specieDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SPECIE_DELETE_REQUEST:
      return { loading: true };
    case SPECIE_DELETE_SUCESS:
      return { loading: false, success: true, message: action.payload };
    case SPECIE_DELETE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case SPECIE_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
