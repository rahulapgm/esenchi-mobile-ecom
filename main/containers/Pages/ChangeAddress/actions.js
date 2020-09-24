import {
  SAVE_ADDRESS,
  SET_ADDRESS,
  GET_ADDRESS,
  IS_UPDATING,
  GET_ESTIMATED_DELIVERY_TIME
} from "./constants";

export const saveAddress = data => {
  return {
    type: SAVE_ADDRESS,
    data
  };
};

export const setAddress = data => {
  return {
    type: SET_ADDRESS,
    data
  };
};

export const getUserAddress = () => {
  return {
    type: GET_ADDRESS
  };
};

export const setIsUpdating = data => {
  return {
    type: IS_UPDATING,
    data
  };
};

export const getEstimatedDelivery = data => {
  return {
    type: GET_ESTIMATED_DELIVERY_TIME,
    data
  };
};

export const setEstimatedDelivery = data => {
  return {
    type: SET_ESTIMATED_DELIVERY_TIME,
    data
  };
};
